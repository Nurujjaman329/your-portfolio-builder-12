export interface ProjectDetail {
  slug: string;
  name: string;
  tag: string;
  tagline: string;
  company: string;
  period: string;
  status: string;
  accent: string;
  storeLink: boolean;
  overview: string;
  challenge: string;
  solution: string;
  architecture: {
    pattern: string;
    description: string;
    layers: { name: string; desc: string }[];
  };
  stateManagement: { solution: string; reason: string };
  stack: { name: string; purpose: string }[];
  highlights: { title: string; desc: string }[];
  images: string[];
  results: string[];
}

export const projects: ProjectDetail[] = [
  {
    slug: "fouta-app",
    name: "Fouta App",
    tag: "Social Commerce",
    tagline: "A 4-role social commerce platform with real-time marketplace features — live on App Store.",
    company: "Sparktech Agency – Betopia Group",
    period: "2024",
    status: "Live on App Store",
    accent: "from-primary to-accent",
    storeLink: true,
    overview:
      "Fouta is a social commerce platform that combines social media with e-commerce. Users can browse feeds, follow sellers, place orders and track deliveries — all within a single app. The platform operates across four distinct user roles, each with its own onboarding, dashboard and permission set.",
    challenge:
      "The biggest technical challenge was managing four independent user flows (User, Seller, Driver, Admin) with separate authentication states, permissions and real-time data requirements — all within a single Flutter codebase without introducing cross-role complexity.",
    solution:
      "Implemented a role-based routing system at app startup that directs users to their dedicated module after login. Each role's feature tree is isolated as its own package within Clean Architecture, so changes to one role never affect another. Socket.IO rooms were scoped per-role to manage real-time events efficiently.",
    architecture: {
      pattern: "Clean Architecture (Feature-first)",
      description:
        "Each feature (auth, feed, orders, chat) is structured into its own folder with three layers. Features are kept independent — no cross-feature imports, only shared domain entities.",
      layers: [
        { name: "Presentation", desc: "Widgets, pages, Bloc/Cubit — handles only UI logic and dispatches events." },
        { name: "Domain", desc: "Use cases and entity models — pure Dart, zero Flutter dependency." },
        { name: "Data", desc: "Repository implementations, API clients, local cache (Hive/SharedPrefs)." },
      ],
    },
    stateManagement: {
      solution: "Bloc (flutter_bloc)",
      reason:
        "Chosen for predictable state transitions across complex flows like multi-step checkout, real-time chat and role-based navigation. BlocObserver used globally for debugging in development builds.",
    },
    stack: [
      { name: "Flutter", purpose: "Cross-platform UI framework" },
      { name: "Firebase", purpose: "Push notifications & analytics" },
      { name: "Socket.IO", purpose: "Real-time messaging, feeds & live order updates" },
      { name: "REST API", purpose: "Core business logic — products, orders, user management" },
      { name: "Hive", purpose: "Local cache for offline feed and cart persistence" },
      { name: "Google Maps", purpose: "Delivery tracking & driver location" },
    ],
    highlights: [
      { title: "4-Role System", desc: "User, Seller, Driver and Admin — each with isolated onboarding, dashboard and permission logic." },
      { title: "Real-time Feed", desc: "Live social feed, stories and messaging powered by Socket.IO with room-based event scoping." },
      { title: "End-to-end Checkout", desc: "Cart → payment → order assignment → live delivery tracking in one seamless pipeline." },
      { title: "Role-based Routing", desc: "App startup resolves the correct module per role — zero UI leakage between roles." },
    ],
    images: [],
    results: [
      "Successfully shipped and live on App Store.",
      "Handles 4 user roles within a single Flutter binary.",
      "Real-time features (chat, feed, delivery) operating at production scale.",
    ],
  },
  {
    slug: "tnp-beauty",
    name: "TNP Beauty",
    tag: "Beauty Marketplace",
    tagline: "A 3-role beauty services marketplace with location-based discovery — live on App Store & Play Store.",
    company: "Sparktech Agency – Betopia Group",
    period: "2024",
    status: "Live on App Store & Play Store",
    accent: "from-accent to-primary",
    storeLink: true,
    overview:
      "TNP Beauty connects customers with vendors and beauticians through a location-aware marketplace. Customers discover nearby beauty services, book appointments and pay via Stripe. Vendors manage their listings, track earnings and verify their business credentials. Beauticians manage their schedules and client bookings.",
    challenge:
      "Coordinating availability, booking state and payment status across three roles in real time — while keeping each role's UI completely independent and preventing data leakage between vendor and beautician accounts.",
    solution:
      "Used a shared domain layer for booking entities and role-specific repositories that filter data by role context. Stripe's payment intents flow was implemented server-confirmed to prevent client-side manipulation. Location-based discovery uses geohash queries to efficiently fetch nearby services.",
    architecture: {
      pattern: "Clean Architecture (Layer-first)",
      description:
        "Shared domain models (Booking, Service, Vendor) sit in a common package. Each role (Customer, Vendor, Beautician) has its own presentation and data layers on top of the shared domain.",
      layers: [
        { name: "Presentation", desc: "Role-specific screens and Cubits — Customer, Vendor, Beautician modules are fully isolated." },
        { name: "Domain", desc: "Shared Booking, Service and User entities — the single source of truth across all roles." },
        { name: "Data", desc: "Role-filtered API calls and local cache; Stripe SDK integration lives in the Customer data layer." },
      ],
    },
    stateManagement: {
      solution: "Bloc + Cubit (flutter_bloc)",
      reason:
        "Bloc used for complex multi-step flows (booking, checkout). Cubit used for simpler UI states (filter selections, map view). This split kept the codebase lean without over-engineering simple interactions.",
    },
    stack: [
      { name: "Flutter", purpose: "Cross-platform UI — single codebase for iOS & Android" },
      { name: "Stripe", purpose: "Payment processing with server-confirmed intents" },
      { name: "Geolocation", purpose: "Location-based discovery and geohash proximity queries" },
      { name: "REST API", purpose: "Booking management, vendor listings, user accounts" },
      { name: "Firebase", purpose: "Push notifications for booking confirmations and reminders" },
    ],
    highlights: [
      { title: "3-Role Platform", desc: "Customer, Vendor and Beautician — each with separate dashboards and booking views." },
      { title: "Location Discovery", desc: "Geohash-based proximity search surfaces nearby services in real time." },
      { title: "Stripe Payments", desc: "Server-confirmed payment intents ensure secure, tamper-proof transaction processing." },
      { title: "Vendor Dashboard", desc: "Earnings analytics, payout history and multi-vendor cart management built in." },
    ],
    images: [],
    results: [
      "Live on both App Store and Google Play.",
      "Stripe payments processing real bookings at production scale.",
      "Business verification flow approved by Sparktech QA team.",
    ],
  },
  {
    slug: "ride-sharing-app",
    name: "Ride Sharing App",
    tag: "Transport",
    tagline: "A dual-role ride platform with live tracking, wallet management and auto-pricing.",
    company: "Sparktech Agency – Betopia Group",
    period: "2024",
    status: "Internal / Client Delivery",
    accent: "from-primary to-accent",
    storeLink: false,
    overview:
      "A full-featured ride sharing app with separate Passenger and Driver experiences. Passengers request rides, track drivers in real time and pay via wallet. Drivers receive ride requests, navigate to pickups and manage their earnings — all with in-trip chat for coordination.",
    challenge:
      "Synchronising driver location with the passenger map in real time with minimal latency, while managing the complete ride lifecycle (request → accept → pickup → trip → completion) as a reliable state machine that handles edge cases like cancellations and network drops.",
    solution:
      "The ride lifecycle was modelled as a finite state machine using Bloc. Driver location updates are emitted via Socket.IO at a 2-second interval and consumed directly into the map widget using a StreamBuilder. Google Directions API handles routing and auto-pricing based on distance and estimated time.",
    architecture: {
      pattern: "Clean Architecture (Feature-first)",
      description:
        "The ride flow is isolated as a single feature with its own Bloc, use cases and repository. Map, wallet and auth are separate features that communicate only through domain entities — never direct widget calls.",
      layers: [
        { name: "Presentation", desc: "Passenger and Driver screens are separate widget trees — no shared UI components between roles." },
        { name: "Domain", desc: "RideState machine, Trip entity and pricing use cases — pure Dart, fully testable." },
        { name: "Data", desc: "Socket.IO location streams, Google Directions API client and local wallet cache." },
      ],
    },
    stateManagement: {
      solution: "Bloc (flutter_bloc)",
      reason:
        "The ride lifecycle has many discrete states (idle, searching, accepted, in-trip, completed, cancelled). Bloc's explicit state transitions made this safe to model — each state determines exactly what UI and actions are available.",
    },
    stack: [
      { name: "Flutter", purpose: "Cross-platform UI for Passenger and Driver apps" },
      { name: "Socket.IO", purpose: "Real-time driver location streaming and in-trip chat" },
      { name: "Google Maps", purpose: "Live map, route display and pickup navigation" },
      { name: "Google Directions API", purpose: "Route calculation and auto-pricing by distance/time" },
      { name: "REST API", purpose: "User accounts, ride history, wallet and driver management" },
    ],
    highlights: [
      { title: "Live Location Tracking", desc: "Driver position updates pushed to passenger map every 2 seconds via Socket.IO." },
      { title: "Auto-pricing", desc: "Google Directions API calculates fare dynamically based on distance and time estimate." },
      { title: "Ride State Machine", desc: "Bloc-driven lifecycle with explicit states preventing invalid UI/action combinations." },
      { title: "OTP Auth + Wallet", desc: "Phone OTP onboarding and in-app wallet for cashless ride payments." },
    ],
    images: [],
    results: [
      "Delivered to client with full Passenger and Driver flows operational.",
      "Real-time location tracking running reliably in QA at 2s update intervals.",
      "Auto-pricing integrated with Google Directions API.",
    ],
  },
  {
    slug: "mykrishi",
    name: "MyKrishi",
    tag: "Agri-Tech",
    tagline: "A smart agriculture investment platform connecting farmers, investors and agents.",
    company: "Synergy Interface Ltd.",
    period: "2023–2024",
    status: "Production",
    accent: "from-accent to-primary",
    storeLink: false,
    overview:
      "MyKrishi bridges the gap between farmers who need capital and investors looking for agricultural returns. Agents facilitate deals on the ground. Each role has a tailored dashboard — farmers post campaigns, investors browse and fund them, and agents track their portfolio of managed deals.",
    challenge:
      "Building three fundamentally different user experiences within one app, each with distinct data models and workflows, while keeping the codebase maintainable and enabling deep-linked campaign sharing that works across both authenticated and unauthenticated app states.",
    solution:
      "Clean Architecture with role-resolved routing at startup. Deep links are parsed at the router level — if the user is unauthenticated, the app stores the pending route, completes onboarding, then redirects. ShurjoPay's SDK was integrated with a custom repository abstraction to keep payment logic testable.",
    architecture: {
      pattern: "Clean Architecture (MVVM-inspired)",
      description:
        "Each role's dashboard is a self-contained module. Shared infrastructure (auth, deep linking, payment) sits in a core layer that modules depend on — never the reverse.",
      layers: [
        { name: "Presentation", desc: "Role dashboards (Farmer, Investor, Agent) are separate route branches with their own ViewModels." },
        { name: "Domain", desc: "Campaign, Investment and Agent entities with use cases for funding, reporting and commission calculation." },
        { name: "Data", desc: "REST repositories, ShurjoPay SDK wrapper, deep link handler and local session cache." },
      ],
    },
    stateManagement: {
      solution: "Provider + ChangeNotifier",
      reason:
        "Chosen for its simplicity given the relatively straightforward data flows in this app. Campaign lists and investment summaries are read-heavy with infrequent updates — Provider's lightweight nature was a better fit than the overhead of Bloc.",
    },
    stack: [
      { name: "Flutter", purpose: "Cross-platform mobile app for all three roles" },
      { name: "ShurjoPay", purpose: "Investment payment processing for Bangladeshi users" },
      { name: "Socket.IO", purpose: "Real-time farmer–investor chat within active campaigns" },
      { name: "Deep Linking", purpose: "Campaign sharing via links that work in and out of the app" },
      { name: "REST API", purpose: "Campaign management, investment records and agent commission tracking" },
    ],
    highlights: [
      { title: "3-Role Platform", desc: "Farmer, Investor and Agent — each with separate dashboards and action sets." },
      { title: "Deep Linking", desc: "Campaign links resolve correctly whether the user is logged in or not." },
      { title: "ShurjoPay Integration", desc: "Local payment gateway for investment funding — supports Bangladeshi banks and MFS." },
      { title: "Real-time Chat", desc: "Farmer–investor messaging within campaigns for deal negotiation and updates." },
    ],
    images: [],
    results: [
      "Deployed to production for Synergy Interface Ltd. client.",
      "Deep linking working across web and app contexts.",
      "ShurjoPay processing investment payments in production.",
    ],
  },
  {
    slug: "meghna-life-insurance",
    name: "Meghna Life Insurance",
    tag: "Fintech / GovTech",
    tagline: "A dual-app suite replacing manual insurance collection for a government-linked provider.",
    company: "Synergy Interface Ltd.",
    period: "2023",
    status: "Production",
    accent: "from-primary to-accent",
    storeLink: false,
    overview:
      "Two separate Flutter apps — one for customers to manage policies and pay premiums, and one for field advisors to manage their client portfolios. Before this, advisors collected premiums manually with paper records. The apps digitised the entire workflow from policy issuance to payment confirmation.",
    challenge:
      "Integrating two Bangladeshi mobile banking gateways (bKash and Nagad) with their distinct authentication and callback flows, while ensuring payment status is reliably reconciled even when users close the app mid-transaction.",
    solution:
      "Payment sessions are persisted locally before initiating any gateway redirect. On app resume, the session is checked against the server to reconcile pending payments. Both bKash and Nagad integrations are abstracted behind a single PaymentGateway interface — swapping gateways requires no changes to domain logic.",
    architecture: {
      pattern: "Clean Architecture",
      description:
        "Payment gateway integrations are fully abstracted in the data layer. The domain layer only knows about a PaymentGateway interface — not bKash or Nagad specifically. This made adding Nagad after bKash a 2-day task.",
      layers: [
        { name: "Presentation", desc: "Customer app and Advisor app are separate Flutter projects sharing a common domain package." },
        { name: "Domain", desc: "Policy, Premium and PaymentGateway abstractions — the core business rules in pure Dart." },
        { name: "Data", desc: "bKash SDK, Nagad SDK and REST client all implement PaymentGateway. Session persistence via SharedPreferences." },
      ],
    },
    stateManagement: {
      solution: "Bloc (flutter_bloc)",
      reason:
        "Payment flows have strict state requirements — you must not allow double submission or UI interaction during a pending gateway redirect. Bloc's immutable states enforced this at compile time.",
    },
    stack: [
      { name: "Flutter", purpose: "Customer app and Advisor app from a shared codebase" },
      { name: "bKash", purpose: "Mobile financial services payment gateway" },
      { name: "Nagad", purpose: "Government-backed MFS payment gateway" },
      { name: "REST API", purpose: "Policy management, premium records and advisor portfolio" },
      { name: "SharedPreferences", purpose: "Payment session persistence for mid-transaction recovery" },
    ],
    highlights: [
      { title: "Dual-app Suite", desc: "Customer-facing and Advisor-facing apps sharing a single domain package." },
      { title: "bKash & Nagad", desc: "Both gateways abstracted behind one interface — adding Nagad after bKash took 2 days." },
      { title: "Payment Recovery", desc: "Session persisted locally before any redirect — reconciled on app resume." },
      { title: "Paperless Workflow", desc: "Replaced manual premium collection — field advisors now manage everything digitally." },
    ],
    images: [],
    results: [
      "Live in production, used by field advisors and policyholders.",
      "Manual premium collection workflows fully replaced.",
      "Both bKash and Nagad processing payments reliably.",
    ],
  },
  {
    slug: "distributor-management-system",
    name: "Distributor Management System",
    tag: "Enterprise",
    tagline: "A field force management app with real-time location tracking for distributors and sales reps.",
    company: "Synergy Interface Ltd.",
    period: "2023",
    status: "Production",
    accent: "from-accent to-primary",
    storeLink: false,
    overview:
      "An enterprise field force management platform for a distribution company. Distributors, Sales Representatives (SRs) and Territory Sales Officers (TSOs) each have a role-specific panel. Managers track field team locations in real time and monitor order performance by territory.",
    challenge:
      "Maintaining reliable real-time location tracking for large field teams without excessive battery drain, while keeping the app performant on mid-range Android devices commonly used by field staff.",
    solution:
      "Used a background location service with adaptive polling — updates are sent every 30s when stationary, every 5s when moving. The map uses clustering to handle many simultaneous agent pins without degrading render performance.",
    architecture: {
      pattern: "Clean Architecture",
      description:
        "Role panels (Distributor, SR, TSO) are feature modules that share a location and order domain. The background location service runs as an isolate to prevent UI jank.",
      layers: [
        { name: "Presentation", desc: "Role-specific dashboards and map views. Clustering logic lives in the widget layer." },
        { name: "Domain", desc: "Territory, Order and LocationUpdate entities with use cases for performance reporting." },
        { name: "Data", desc: "Background location service (isolate), Google Maps clustering and REST API client." },
      ],
    },
    stateManagement: {
      solution: "Bloc (flutter_bloc)",
      reason:
        "Order and location data arrive asynchronously from multiple sources. Bloc's stream-based architecture made it straightforward to merge location updates and order events into a single coherent map state.",
    },
    stack: [
      { name: "Flutter", purpose: "Cross-platform app for all field roles" },
      { name: "Google Maps", purpose: "Real-time agent location map with clustering" },
      { name: "REST API", purpose: "Order management, territory data and performance metrics" },
      { name: "Background Location", purpose: "Adaptive location tracking without excessive battery drain" },
    ],
    highlights: [
      { title: "Real-time Tracking", desc: "Live field team locations on a clustered map, adaptive poll rate by movement." },
      { title: "3 Role Panels", desc: "Distributor, SR and TSO each have tailored dashboards and data views." },
      { title: "Performance Monitoring", desc: "Territory-level order performance visible to TSOs and managers." },
      { title: "Background Service", desc: "Location runs in an isolate — zero UI jank even on low-end devices." },
    ],
    images: [],
    results: [
      "Deployed and used by active field teams in production.",
      "Background tracking running reliably on mid-range Android devices.",
      "Replaced manual check-in reporting for field staff.",
    ],
  },
  {
    slug: "edex-365",
    name: "Edex-365",
    tag: "EdTech",
    tagline: "An education platform for students and teachers with payments and real-time notifications.",
    company: "Synergy Interface Ltd.",
    period: "2023",
    status: "Production",
    accent: "from-primary to-accent",
    storeLink: false,
    overview:
      "Edex-365 is a digital learning platform serving students and teachers. Students access course content, submit assignments and pay for course enrolments. Teachers manage their courses, track student progress and receive push notifications for submissions and messages.",
    challenge:
      "Keeping the app responsive and content-rich while working with a backend API that had variable response times — content-heavy screens needed to feel fast even on slower connections.",
    solution:
      "Implemented aggressive local caching with Hive for course content and user progress. The feed uses pagination with prefetching so the next page loads before the user scrolls to it. Skeleton loaders replace blank states to maintain perceived performance.",
    architecture: {
      pattern: "Clean Architecture",
      description:
        "Course content, user progress and payments are separate features with their own Blocs and repositories. Caching is handled at the repository layer — the domain layer never knows whether data came from cache or network.",
      layers: [
        { name: "Presentation", desc: "Student and Teacher screens with skeleton loaders and paginated lists." },
        { name: "Domain", desc: "Course, Enrolment and Progress entities with use cases for content access control." },
        { name: "Data", desc: "Hive cache layer wrapping the REST API — stale-while-revalidate strategy for course lists." },
      ],
    },
    stateManagement: {
      solution: "Bloc (flutter_bloc)",
      reason:
        "Course enrolment involves a payment step followed by content unlock — a two-phase flow that needs clear state separation. Bloc kept these phases explicit and testable.",
    },
    stack: [
      { name: "Flutter", purpose: "Cross-platform app for students and teachers" },
      { name: "REST API", purpose: "Course content, enrolments and progress tracking" },
      { name: "Push Notifications", purpose: "Assignment reminders, submission alerts and announcements" },
      { name: "Hive", purpose: "Local content cache for offline access and fast load times" },
    ],
    highlights: [
      { title: "Dual Role", desc: "Student and Teacher experiences with appropriate content access controls per role." },
      { title: "Offline Cache", desc: "Hive-backed course content cache keeps content accessible on poor connections." },
      { title: "Payment Enrolment", desc: "Integrated course payment flow that unlocks content on successful confirmation." },
      { title: "Push Notifications", desc: "Real-time alerts for submissions, teacher feedback and course announcements." },
    ],
    images: [],
    results: [
      "Live in production with active student and teacher users.",
      "Local caching significantly improved perceived performance on slow connections.",
      "Push notification system delivering reliably across iOS and Android.",
    ],
  },
  {
    slug: "nursery-management-system",
    name: "Nursery Management System",
    tag: "GovTech",
    tagline: "A government operations app for streamlining nursery inventory and scheduling.",
    company: "Synergy Interface Ltd.",
    period: "2023",
    status: "Production",
    accent: "from-accent to-primary",
    storeLink: false,
    overview:
      "A government-commissioned mobile app for managing nursery operations including plant inventory, staff scheduling and reporting. Replaced a manual paper-based workflow used by government nursery staff across multiple locations.",
    challenge:
      "Working within strict government API constraints — slow, inconsistently documented endpoints with no staging environment. QA testing had to be done against production-like data without affecting live records.",
    solution:
      "Built a local mock layer in the data repository that could be toggled via a build flag. This allowed full UI and flow testing without hitting live government APIs. All API contracts were formalised in the domain layer first, then implemented against the real endpoints.",
    architecture: {
      pattern: "Clean Architecture",
      description:
        "Mock/real repository switching via build flags. The domain layer was defined before any API integration, allowing UI development to proceed in parallel with API availability.",
      layers: [
        { name: "Presentation", desc: "Inventory, scheduling and reporting screens with clean data tables and forms." },
        { name: "Domain", desc: "PlantInventory, Staff and Schedule entities with use cases for stock and shift management." },
        { name: "Data", desc: "Real API client and mock repository — switched by build configuration. No domain changes needed to swap." },
      ],
    },
    stateManagement: {
      solution: "Provider",
      reason:
        "The app's data flows are straightforward CRUD with list/detail patterns. Provider's simplicity was appropriate — using Bloc would have added unnecessary boilerplate for this use case.",
    },
    stack: [
      { name: "Flutter", purpose: "Mobile app for nursery staff and supervisors" },
      { name: "REST API", purpose: "Government-provided backend for inventory and scheduling data" },
      { name: "Push Notifications", purpose: "Staff scheduling reminders and inventory alerts" },
    ],
    highlights: [
      { title: "Mock/Real Toggle", desc: "Repository layer switchable between mock and real API via build flag — safe QA on live systems." },
      { title: "Inventory Management", desc: "Track plant stock levels, additions and disposals with audit logs." },
      { title: "Staff Scheduling", desc: "Shift management and assignment for nursery staff across locations." },
      { title: "Reporting", desc: "Summary reports for supervisors covering stock, activity and staff performance." },
    ],
    images: [],
    results: [
      "Delivered and accepted by government client.",
      "Replaced paper-based workflows across nursery locations.",
      "End-to-end QA completed without affecting live government data.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
