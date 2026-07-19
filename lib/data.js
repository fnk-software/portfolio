export const profile = {
  name: "Farrukh Niaz",
  shortName: "Farrukh Niaz",
  title: "Principal Software Engineer",
  tagline:
    "Building robust, scalable software for healthcare and enterprise — 13+ years turning complex requirements into clean, reliable solutions.",
  location: "Islamabad, Pakistan",
  email: "fnk_software@yahoo.com",
  phone: "+92 336 5232098",
  linkedin: "https://www.linkedin.com/in/farrukh-niaz-15755825/",
  summary:
    "Highly skilled and motivated Software Engineer with 13+ years of experience creating and executing innovative software solutions that enhance business productivity. Hands-on expertise across requirement gathering, database design and multi-tiered application architecture. A proactive, result-oriented and dedicated team-player with excellent problem-solving skills, experienced at coordinating cross-functional teams in fast-paced, deadline-driven environments.",
};

export const skillGroups = [
  {
    label: "Languages & Core",
    items: ["C#", "OOP", "JavaScript", "HTML", "CSS", "jQuery"],
  },
  {
    label: ".NET Stack",
    items: [
      ".NET Core",
      "ASP.NET MVC",
      "Web API",
      "WCF Services",
      "REST Services",
      "Windows Forms",
      "WPF",
      "Desktop Development",
    ],
  },
  {
    label: "Data & ORM",
    items: [
      "MS SQL Server",
      "Entity Framework",
      "LINQ",
      "ADO.NET",
      "Stored Procedures",
      "Database Design",
    ],
  },
  {
    label: "Reporting & UI",
    items: [
      "DevExpress",
      "XtraReport",
      "RDLC Reports",
      "Telerik Controls",
      "UI Automation",
    ],
  },
  {
    label: "Domain & Integrations",
    items: [
      "Smart on FHIR",
      "Athena EMR APIs",
      "EPIC EMR",
      "Healthcare Systems",
      "Chrome Extensions",
      "N-Layered Architecture",
    ],
  },
];

export const experience = [
  {
    company: "Wiseman Innovations / DataQ Health",
    role: "Principal Software Engineer",
    context: "US-based healthcare solution provider",
    points: [
      "Implemented N-layered application architecture to ensure separation of concerns and improve overall application quality.",
      "Translated client-specific needs into easy-to-understand software solutions and resolved client tickets on the company support portal.",
      "Built a .NET Core application that interacts with EPIC and Athena EMR systems using Smart on FHIR.",
      "Effectively utilized Athena APIs to retrieve and present data seamlessly within the application, including a patient-profile Windows Service.",
      "Led code reviews, release management, technical release notes, and scrum activities using Team Foundation Server (TFS).",
    ],
  },
  {
    company: "F3 Technologies",
    role: "Software Engineer",
    context: "Emergency & health-related systems",
    points: [
      "Actively participated in the development of emergency and health-related systems.",
      "Delivered client-side and server-side features including WCF Web/REST Services and stored procedures.",
      "Built scheduling, task-assignment and billing modules, plus advance transfer-schedule booking for hospital appointments.",
      "Developed an intelligent case-dispatch system for ambulances using C#, .NET and DevExpress controls.",
    ],
  },
  {
    company: "Software Base Solutions",
    role: "Customer Support / Software Developer",
    context: "IT solutions & outsourcing",
    points: [
      "Provided prompt solutions and proactive troubleshooting support for issues faced by clients.",
      "Developed a brand-new customer resolution management tool that imports large Excel sheets directly into SQL Server via the Entity Framework model.",
      "Maintained and improved the company point-of-sale system built in C# using a LINQ approach.",
    ],
  },
];

export const projects = [
  {
    name: "EMR Integration Platform",
    tags: ["Smart on FHIR", ".NET Core", "Athena", "EPIC"],
    description:
      "A .NET Core solution integrating with EPIC and Athena EMR systems via Smart on FHIR, with a Windows Service consuming Athena APIs to surface patient profiles inside the application.",
  },
  {
    name: "CAD — Computer Aided Dispatch",
    tags: ["C#", "DevExpress", "WCF", "SQL Server"],
    description:
      "A medical dispatch application with Call Taker, Dispatcher and Admin Console modules, including offline support when services or network are unavailable.",
  },
  {
    name: "Intelligent Ambulance Dispatch",
    tags: ["C#", ".NET", "WCF Services"],
    description:
      "An intelligent case-dispatch system for ambulances with scheduling, task assignment and billing modules for emergency healthcare operations.",
  },
  {
    name: "Store'em — Inventory Management",
    tags: ["WPF", "C#", "SQL Server", "Barcode"],
    description:
      "A barcode-based inventory management system handling stock, consumable/non-consumable inventories and over/short/damaged item tracking.",
  },
  {
    name: "Time'em — Workforce Tracking",
    tags: ["WPF", "Telerik", "LINQ"],
    description:
      "A WPF application to monitor employee daily progress, check-in/check-out times and task management under supervisory workflows.",
  },
  {
    name: "DSSMP — Decision Support System",
    tags: ["ASP.NET", "SQL Server", "Telerik Reporting"],
    description:
      "A Decision Support System for Medicine Prescription with modules for prescriptions, similar-case views, drug-reaction checks, patient profiles, lab tests and computerized receipts.",
  },
];

export const education = [
  {
    degree: "BS Software Engineering",
    school: "International Islamic University, Islamabad (IIUI)",
  },
  {
    degree: "F.Sc (Computer Science)",
    school: "Jinnah Jam-e School & College, Haripur",
  },
  {
    degree: "Matriculation",
    school: "Jinnah Jam-e School, Haripur",
  },
];

export const interests = ["Cricket", "Football", "Long Walks", "Movies"];
