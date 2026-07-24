import { describe, expect, it } from "vitest";
import { EXPERIENCE_START, experienceStat, experienceText } from "./profile";

describe("experienceText", () => {
  it("returns 0 years on the start date", () => {
    expect(experienceText(EXPERIENCE_START)).toBe("0 years");
  });

  it("returns N+ years before the nine-month remainder threshold", () => {
    expect(experienceText(new Date(2024, 5, 15))).toBe("0+ years"); // Jun 2024 — 8 months in
  });

  it("returns exact years on an anniversary", () => {
    expect(experienceText(new Date(2024, 9, 1))).toBe("1 years");
    expect(experienceText(new Date(2025, 9, 1))).toBe("2 years");
  });

  it("returns nearly N+1 years when 9+ months into the next year bucket", () => {
    expect(experienceText(new Date(2026, 6, 17))).toBe("nearly 3 years"); // Jul 2026
  });
});

describe("experienceStat", () => {
  it("returns compact stat forms", () => {
    expect(experienceStat(EXPERIENCE_START)).toBe("0");
    expect(experienceStat(new Date(2024, 5, 15))).toBe("0+");
    expect(experienceStat(new Date(2024, 9, 1))).toBe("1");
    expect(experienceStat(new Date(2026, 6, 17))).toBe("~3");
  });
});
