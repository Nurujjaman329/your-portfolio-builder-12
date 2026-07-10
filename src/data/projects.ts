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
    images: [
      "/projects/ride-sharing-app/driver-home.png",
      "/projects/ride-sharing-app/driver-active-orders.png",
      "/projects/ride-sharing-app/driver-trip-details.png",
      "/projects/ride-sharing-app/driver-trip-details-scheduled.png",
      "/projects/ride-sharing-app/driver-passengers.png",
      "/projects/ride-sharing-app/driver-ride-plan-details.png",
      "/projects/ride-sharing-app/driver-recent-orders.png",
      "/projects/ride-sharing-app/driver-create-ride-location.png",
      "/projects/ride-sharing-app/driver-create-ride-pickup.png",
      "/projects/ride-sharing-app/driver-create-ride-dropoff-map.png",
      "/projects/ride-sharing-app/driver-create-ride-dropoff-route.png",
      "/projects/ride-sharing-app/driver-create-ride-city.png",
      "/projects/ride-sharing-app/user-location-permission.png",
      "/projects/ride-sharing-app/user-notifications.png",
      "/projects/ride-sharing-app/inbox.png",
      "/projects/ride-sharing-app/chats.png",
    ],
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
    images: [
      "/projects/mykrishi/homepage.png",
      "/projects/mykrishi/projects.png",
      "/projects/mykrishi/my-projects.png",
      "/projects/mykrishi/project-details.png",
      "/projects/mykrishi/field-activity.png",
    ],
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
      "An enterprise distribution management platform built for Synergy Interface Ltd. Distributors manage orders, product approvals, retail sales and field schedules from a tile-based dashboard. Sales Representatives (SRs) post attendance with location and photo proof, view their schedules and are tracked live on a map — giving managers full visibility across the distribution network.",
    challenge:
      "Coordinating distributor workflows — orders, purchase approvals, IMEI-based secondary sales, returns and SR scheduling — in one app while keeping separate role experiences for distributors and field reps, with reliable map tracking and scanner support on mid-range Android devices.",
    solution:
      "Built role-specific dashboards with a shared order and location domain. Distributors access order, retail, schedule and return modules from navigation tiles; SRs get a dedicated panel for attendance and schedule views. IMEI scanning supports both barcode scanner and manual entry; SR locations render on Google Maps for real-time field visit tracking.",
    architecture: {
      pattern: "Clean Architecture",
      description:
        "Role panels (Distributor, SR) are feature modules sharing order, schedule and location domains. Scanner, map and background location services are isolated to keep the UI responsive on field devices.",
      layers: [
        { name: "Presentation", desc: "Role-specific dashboards, order flows, map views and scanner screens." },
        { name: "Domain", desc: "Order, Schedule, Retailer, Return and LocationUpdate entities with role-scoped use cases." },
        { name: "Data", desc: "REST API client, Google Maps integration, IMEI scanner and background location service." },
      ],
    },
    stateManagement: {
      solution: "Bloc (flutter_bloc)",
      reason:
        "Order, schedule and location data arrive asynchronously from multiple sources. Bloc made it straightforward to manage multi-step flows like order creation, purchase approval and scanner-based sales.",
    },
    stack: [
      { name: "Flutter", purpose: "Cross-platform app for distributor and SR roles" },
      { name: "Google Maps", purpose: "Live SR location tracking and field visit map" },
      { name: "REST API", purpose: "Orders, schedules, retailers, returns and attendance" },
      { name: "Barcode/IMEI Scanner", purpose: "Secondary sales and ST1 returns via scan or manual entry" },
      { name: "Background Location", purpose: "SR attendance and map tracking in the field" },
    ],
    highlights: [
      { title: "Login & Dashboard", desc: "Email/password login with a tile-based dashboard surfacing every distributor feature in one place." },
      { title: "Order List & Create Order", desc: "View all orders from the dashboard and place new orders through a dedicated create-order flow." },
      { title: "Daily Purchase Approval", desc: "Product receive module lets distributors review and approve daily purchase requests." },
      { title: "Retail List & Secondary Sales", desc: "Browse retailers and complete secondary sales with IMEI scanner or manual entry — supports multiple sales in one session." },
      { title: "Schedule Management", desc: "Create, edit and delete SR schedules with name-based search to find reps quickly." },
      { title: "ST1 Return Apply", desc: "Process ST1 returns using barcode scanner or manual IMEI entry from the distributor dashboard." },
      { title: "Track SR on Map", desc: "Live map view showing where each sales rep has visited across their territory." },
      { title: "SR Attendance", desc: "SRs post daily attendance with GPS location, retailer selection and photo proof." },
      { title: "SR Schedule List", desc: "SRs view their assigned schedules and filter by specific days." },
    ],
    images: [
      "/projects/distributor-management-system/login.jpg",
      "/projects/distributor-management-system/dashboard.jpg",
      "/projects/distributor-management-system/order-list.jpg",
      "/projects/distributor-management-system/create-order.jpg",
      "/projects/distributor-management-system/daily-purchase-approve.jpg",
      "/projects/distributor-management-system/retail-list.jpg",
      "/projects/distributor-management-system/scan-imei.jpg",
      "/projects/distributor-management-system/schedule-list.jpg",
      "/projects/distributor-management-system/st1-return-apply.jpg",
      "/projects/distributor-management-system/track-sr-map.jpg",
      "/projects/distributor-management-system/attendance.jpg",
      "/projects/distributor-management-system/sr-schedule-list.jpg",
    ],
    results: [
      "Deployed and used by active distributor and SR field teams in production.",
      "End-to-end order, retail, schedule and return workflows in a single app.",
      "Live SR map tracking replaced manual field visit reporting.",
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
      "Edex-365 is a problem-solving education platform built for Synergy Interface Ltd. Students post academic problems by subject and class, track solved and pending items from a chart-based homepage, and pay via an integrated wallet and payment gateway. Teachers manage their skills, view problem analytics and update profiles — with admin approval on skill changes.",
    challenge:
      "Building a dual-role EdTech app where students submit structured problems and pay from a wallet, while teachers manage skills and view aggregated problem stats — all with a smooth checkout flow and secure password management across both roles.",
    solution:
      "Implemented separate student and teacher home dashboards with chart-driven problem summaries. Students post problems through a structured form (version, subject, class, details), pay from wallet balance or recharge via the payment gateway, and manage profile and transactions. Teachers update skills through an admin-approval workflow and change passwords securely from their profile.",
    architecture: {
      pattern: "Clean Architecture",
      description:
        "Problem submission, wallet/payments, profile and skill management are isolated features sharing user and problem domain entities. Payment gateway integration lives in the data layer with server-confirmed transactions.",
      layers: [
        { name: "Presentation", desc: "Student and teacher dashboards, problem forms, charts, checkout and profile screens." },
        { name: "Domain", desc: "Problem, Wallet, Transaction and Skill entities with role-scoped use cases." },
        { name: "Data", desc: "REST API client, payment gateway SDK and local session cache for user profile." },
      ],
    },
    stateManagement: {
      solution: "Bloc (flutter_bloc)",
      reason:
        "Problem submission and wallet checkout are multi-step flows with async payment confirmation. Bloc kept form state, wallet balance and payment status explicit and testable across both roles.",
    },
    stack: [
      { name: "Flutter", purpose: "Cross-platform app for students and teachers" },
      { name: "REST API", purpose: "Problems, user profiles, skills and transaction history" },
      { name: "Payment Gateway", purpose: "Wallet recharge and checkout for problem submissions" },
      { name: "Charts", purpose: "Homepage analytics — total, pending and solved problems" },
    ],
    highlights: [
      { title: "Login", desc: "Email and password authentication for students and teachers." },
      { title: "Homepage Dashboard", desc: "Chart view of total, pending and solved problems — tap each card to open the detailed problem list." },
      { title: "Post Problem", desc: "Students submit problems by selecting version, subject, class and entering problem details." },
      { title: "User Profile", desc: "View wallet balance, access transaction history and logout from a dedicated profile screen." },
      { title: "Checkout", desc: "Use wallet balance for payments when submitting or solving problems." },
      { title: "Payment Gateway", desc: "Recharge wallet through the integrated payment gateway when balance is insufficient." },
      { title: "Change Password", desc: "Students and teachers securely update their account password from settings." },
      { title: "Update Skill", desc: "Teachers modify their skills and subjects — changes require admin approval before going live." },
    ],
    images: [
      "/projects/edex-365/login.png",
      "/projects/edex-365/homepage.png",
      "/projects/edex-365/post-problem.png",
      "/projects/edex-365/user-profile.png",
      "/projects/edex-365/checkout.png",
      "/projects/edex-365/payment.png",
      "/projects/edex-365/change-password.png",
      "/projects/edex-365/update-skill.png",
    ],
    results: [
      "Live in production with active student and teacher users.",
      "Wallet and payment gateway processing problem-related transactions reliably.",
      "Chart-based homepage giving instant visibility into problem status.",
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
      "Nursery Management System (NMS) is a government operations app built for Synergy Interface Ltd. Forest officers — from Beat and Range level up to ACF and DFO — manage nursery raising and sales, track category-wise and seedling-wise stock, submit entries for approval and review rejection comments. A financial-year filter drives all dashboard analytics.",
    challenge:
      "Digitising a multi-level approval workflow where Beat/Range officers submit raising and sale entries, ACF and DFO reviewers approve or reject with comments, and dashboard stock metrics must stay accurate across financial years — all within strict government API constraints.",
    solution:
      "Built role-aware dashboards with financial-year filtering for stock analytics. Officers submit sale/raising entries via structured forms; ACF and DFO reviewers act through a dedicated comment section. List and detail views show approval status and rejection feedback, with recent seed collection history and profile access from the app drawer.",
    architecture: {
      pattern: "Clean Architecture",
      description:
        "Raising/sale submission, approval workflow and stock analytics are separate feature modules sharing inventory and officer domain entities. Mock/real API switching supports safe QA against government endpoints.",
      layers: [
        { name: "Presentation", desc: "Dashboard charts, sale/raising lists, detail views, approval comments, forms and navigation drawer." },
        { name: "Domain", desc: "Raising, Sale, Stock, SeedCollection and Officer entities with approval-state use cases." },
        { name: "Data", desc: "Government REST API client with optional mock repository for staging-free QA." },
      ],
    },
    stateManagement: {
      solution: "Provider",
      reason:
        "The app follows straightforward list/detail and form submission patterns with CRUD data flows. Provider kept the codebase lean for government officers using the app in the field.",
    },
    stack: [
      { name: "Flutter", purpose: "Mobile app for Beat, Range, ACF and DFO officers" },
      { name: "REST API", purpose: "Government backend for raising, sales, stock and approvals" },
      { name: "Charts", purpose: "Dashboard analytics — raising, sales and category-wise stock" },
    ],
    highlights: [
      { title: "Login", desc: "Officers authenticate with email and password to access their role-specific panel." },
      { title: "Dashboard", desc: "View total raising, sales, category-wise stock, sales-wise stock and seedling-wise running-year stock — filterable by financial year." },
      { title: "Sale/Raising List", desc: "Browse the complete list of raisings or sales, check approval status and read rejection comments." },
      { title: "Sale/Raising Details", desc: "Open any entry to view full raising or sale details in a dedicated detail screen." },
      { title: "Comment Section", desc: "ACF and DFO officers approve or reject requests and attach comments with their decision." },
      { title: "Sale/Raising Form", desc: "Beat and Range officers submit new sale or raising entries through a structured form." },
      { title: "Recent-Year Seed Collection", desc: "Officers view their list of recent seed collections from the dashboard." },
      { title: "Navigation Drawer", desc: "Access profile information and logout from the app drawer menu." },
    ],
    images: [
      "/projects/nursery-management-system/login.png",
      "/projects/nursery-management-system/dashboard.png",
      "/projects/nursery-management-system/sale-raising-list.png",
      "/projects/nursery-management-system/sale-raising-details.png",
      "/projects/nursery-management-system/comment-section.png",
      "/projects/nursery-management-system/sale-raising-form.png",
      "/projects/nursery-management-system/recent-year-seed.png",
      "/projects/nursery-management-system/drawer.png",
    ],
    results: [
      "Delivered and accepted by government client.",
      "Multi-level approval workflow replacing paper-based raising and sale reporting.",
      "Financial-year dashboard giving supervisors instant stock visibility.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
