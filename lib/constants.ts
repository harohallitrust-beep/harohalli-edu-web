export const NAV_LINKS = [
  { key: "home", href: "#home" },
  {
    key: "about_group",
    children: [
      { key: "about", href: "#about" },
      { key: "vision", href: "#vision" },
    ]
  },
  {
    key: "campus_group",
    children: [
      { key: "facilities", href: "#facilities" },
      { key: "activities", href: "#activities" },
      { key: "gallery", href: "#gallery" },
    ]
  },
  {
    key: "admissions_group",
    children: [
      { key: "registration", href: "#registration" },
      { key: "toppers", href: "#toppers" },
    ]
  },
  { key: "contact", href: "#contact" },
];

export const SCHOOLS_DATA = [
  {
    id: "school1",
    nameKey: "schools.central",
    descKey: "schools.central_desc",
    staff: [
      { name: "Smt. Roopa A P", roleKey: "roles.principal", image: "/images/staff/placeholder-staff.jpg" },
      { name: "Smt. Kavitha N", roleKey: "roles.coordinator", image: "/images/staff/placeholder-staff.jpg" },
    ]
  },
  {
    id: "school2",
    nameKey: "schools.high",
    descKey: "schools.high_desc",
    staff: [
      { name: "Smt. Roopa A P", roleKey: "roles.principal", image: "/images/staff/placeholder-staff.jpg" },
      { name: "Smt. Sunanda M M", roleKey: "roles.coordinator", image: "/images/staff/placeholder-staff.jpg" },
    ]
  },
  {
    id: "school3",
    nameKey: "schools.kg",
    descKey: "schools.kg_desc",
    staff: [
      { name: "Smt. Lavanya", roleKey: "roles.principal", image: "/images/staff/placeholder-staff.jpg" },
      { name: "Smt. Shwetha", roleKey: "roles.coordinator", image: "/images/staff/placeholder-staff.jpg" },
    ]
  },
  {
    id: "puc",
    isPUC: true,
    nameKey: "title", // from PUCollege namespace
    descKey: "history_desc", // from PUCollege namespace
    staff: [
      { name: "Sri. Puttegowda M C", roleKey: "staff.puttegowda.role", image: "/images/staff/puttegowda-m-c.jpg" },
      { name: "Smt. Swarnagowri S.", roleKey: "staff.swarnagowri.role", image: "/images/staff/swarnagowri-s.jpg" },
      { name: "Smt. Anitha H B", roleKey: "staff.anitha.role", image: "/images/staff/anitha-h-b.jpg" },
      { name: "Smt. Radha M.M.", roleKey: "staff.radha.role", image: "/images/staff/radha-m-m.jpeg" },
      { name: "Sri. Nagendraswamy G.", roleKey: "staff.nagendraswamy.role", image: "/images/staff/nagendraswamy-j.jpg" },
      { name: "Kum. Harshitha R.", roleKey: "staff.harshitha.role", image: "/images/staff/harshitha-r.jpg" },
      { name: "Smt. Rathnamma", roleKey: "staff.rathnamma.role", image: "/images/staff/placeholder-staff.jpg" },
      { name: "Sri. Raju C.K.", roleKey: "staff.raju.role", image: "/images/staff/placeholder-staff.jpg" },
      { name: "Sri. Naveen Kumar", roleKey: "staff.naveen.role", image: "/images/staff/placeholder-staff.jpg" },
      { name: "Smt. M. Begum", roleKey: "staff.begum.role", image: "/images/staff/placeholder-staff.jpg" },
    ]
  }
];

export const GALLERY_DATA = [
  { id: 4, school: "PU College", type: "image", src: "/images/gallery/pu-college/pu-college-1.jpeg", titleKey: "pu_college_event" },
  { id: 5, school: "PU College", type: "image", src: "/images/gallery/pu-college/pu-college-2.jpeg", titleKey: "pu_college_campus" },
];

export const TOPPERS_DATA = [
  { name: "Prathap H.S.", marks: "SSLC Topper", class: "SSLC", school: "Harohalli Central", image: "/images/staff/placeholder-staff.jpg" },
  { name: "Sneha Patil", marks: "97.5%", class: "SSLC", school: "Harohalli Central", image: "/images/staff/placeholder-staff.jpg" },
];

export const ACTIVITIES_DATA = [
  { key: "science", image: "/images/gallery/pu-college/pu-college-1.jpeg" },
  { key: "cultural", image: "/images/gallery/pu-college/pu-college-6.jpeg" },
  { key: "tours", image: "/images/gallery/pu-college/pu-college-16.jpeg" },
];

export const HERO_IMAGES = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg"
];

export const FACILITIES_DATA = [
  { key: "library" },
  { key: "comp_lab" },
  { key: "transport" },
  { key: "canteen" },
  { key: "art_music" },
  { key: "sports" },
];

export const FOOTER_RESOURCES = [
  { nameKey: "admission_req", href: "#registration" },
  { nameKey: "school_calendar", href: "#" },
  { nameKey: "academic_toppers", href: "#toppers" },
  { nameKey: "gallery", href: "#gallery" },
];
