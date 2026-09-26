import { describe, expect, it, vi, beforeEach } from "vitest";
import { projects as staticProjects } from "@/data/projects";

const firestoreMocks = vi.hoisted(() => ({
  getDocs: vi.fn(),
  getDoc: vi.fn(),
  collection: vi.fn(),
  doc: vi.fn(),
}));

vi.mock("./firebase", () => ({
  isFirebaseConfigured: true,
  db: {},
  storage: null,
}));

vi.mock("firebase/firestore", () => ({
  collection: firestoreMocks.collection,
  doc: firestoreMocks.doc,
  getDocs: firestoreMocks.getDocs,
  getDoc: firestoreMocks.getDoc,
  setDoc: vi.fn(),
  updateDoc: vi.fn(),
  deleteDoc: vi.fn(),
  serverTimestamp: vi.fn(),
}));

vi.mock("firebase/storage", () => ({
  ref: vi.fn(),
  uploadBytes: vi.fn(),
  getDownloadURL: vi.fn(),
  deleteObject: vi.fn(),
}));

import { fetchProject, fetchProjects } from "./firestore-projects";

describe("fetchProjects", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("falls back to static projects when Firestore is empty", async () => {
    firestoreMocks.getDocs.mockResolvedValue({ empty: true, docs: [] });

    const result = await fetchProjects();

    expect(result).toEqual(staticProjects);
  });

  it("falls back to static projects when Firestore throws", async () => {
    firestoreMocks.getDocs.mockRejectedValue(new Error("network"));

    const result = await fetchProjects();

    expect(result).toEqual(staticProjects);
  });

  it("sorts Firestore results using static project order", async () => {
    const reversed = [...staticProjects].reverse();
    firestoreMocks.getDocs.mockResolvedValue({
      empty: false,
      docs: reversed.map((p) => ({ data: () => p })),
    });

    const result = await fetchProjects();

    expect(result.map((p) => p.slug)).toEqual(staticProjects.map((p) => p.slug));
  });

  it("keeps static name/status when Firestore has stale Lyfuber copy", async () => {
    const local = staticProjects.find((p) => p.slug === "lyfuber")!;
    expect(local.name).toBe("Lyfuber");

    firestoreMocks.getDocs.mockResolvedValue({
      empty: false,
      docs: [
        {
          data: () => ({
            ...local,
            name: "Ride Share Client",
            status: "Internal / Client Delivery",
            storeLink: false,
            playStoreUrl: undefined,
          }),
        },
        ...staticProjects.filter((p) => p.slug !== "lyfuber").map((p) => ({ data: () => p })),
      ],
    });

    const result = await fetchProjects();
    const ride = result.find((p) => p.slug === "lyfuber");

    expect(ride?.name).toBe("Lyfuber");
    expect(ride?.status).toBe("Live on Google Play");
    expect(ride?.storeLink).toBe(true);
    expect(ride?.playStoreUrl).toContain("lyfuber");
  });

  it("includes static projects missing from Firestore", async () => {
    const withoutLyfuber = staticProjects.filter((p) => p.slug !== "lyfuber");
    firestoreMocks.getDocs.mockResolvedValue({
      empty: false,
      docs: withoutLyfuber.map((p) => ({ data: () => p })),
    });

    const result = await fetchProjects();

    expect(result.map((p) => p.slug)).toContain("lyfuber");
    expect(result.find((p) => p.slug === "lyfuber")?.name).toBe("Lyfuber");
    expect(result.map((p) => p.slug)).toContain("ride-sharing-app");
  });

  it("restores static screenshots when Firestore leaves images empty", async () => {
    const meghna = staticProjects.find((p) => p.slug === "meghna-life-insurance");
    expect(meghna?.images.length).toBeGreaterThan(0);

    firestoreMocks.getDocs.mockResolvedValue({
      empty: false,
      docs: [
        {
          data: () => ({
            ...meghna!,
            images: [],
          }),
        },
      ],
    });

    const result = await fetchProjects();
    const merged = result.find((p) => p.slug === "meghna-life-insurance");

    expect(merged?.images).toEqual(meghna!.images);
  });
});

describe("fetchProject", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns static project when Firestore doc is missing", async () => {
    firestoreMocks.getDoc.mockResolvedValue({ exists: () => false });

    const result = await fetchProject("fouta-app");

    expect(result?.slug).toBe("fouta-app");
    expect(result?.name).toBe("Fouta App");
  });

  it("falls back to static project when Firestore throws", async () => {
    firestoreMocks.getDoc.mockRejectedValue(new Error("offline"));

    const result = await fetchProject("presentini");

    expect(result?.slug).toBe("presentini");
  });
});
