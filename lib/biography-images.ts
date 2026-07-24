export interface BioImage {
  src: string
  alt: string
  caption?: string
}

/** One medium side portrait per chapter (floats beside the prose). */
export const chapterSideImages: Record<number, BioImage> = {
  1: {
    src: "/assets/images/1jpeg",
    alt: "",
    caption: "",
  },
  2: {
    src: "/assets/images/26.jpeg",
    alt: "My childhood school portrait",
    caption: "the boy everyone wanted to hold.",
  },
  3: {
    src: "/assets/images/13.jpeg",
    alt: "Childhood photo with my sister",
    caption: "Stars on faces. Curiosity in the mind.",
  },
  4: {
    src: "/assets/images/21.jpeg",
    alt: "My hand-drawn car design for MITO SHIBA COMPANY, 2018",
    caption: "Design No. 1. A remote control car.",
  },
  5: {
    src: "/assets/images/1.jpeg",
    alt: "My formal school uniform portrait",
    caption: "Failing in one place, winning in every other.",
  },
  6: {
    src: "/assets/images/.jpeg",
    alt: "",
    caption: "",
  },
  7: {
    src: "/assets/images/32.jpeg",
    alt: "",
    caption: "I wanted computers. They wanted a doctor.",
  },
  8: {
    src: "/assets/images/6.jpeg",
    alt: "Mirror selfie from the lockdown years",
    caption: "Eight months. And a teacher who reshaped me.",
  },
  9: {
    src: "/assets/images/29.jpeg",
    alt: "Portrait of me holding a Palestinian flag",
    caption: "Never stop looking for the truth.",
  },
  10: {
    src: "/assets/images/.jpeg",
    alt: "",
    caption: "I was the only hope for my family.",
  },
  11: {
    src: "/assets/images/25.jpeg",
    alt: "My coding workspace with monitors and an AI banner",
    caption: "A used ThinkPad, and stubbornness.",
  },
  12: {
    src: "/assets/images/31.jpeg",
    alt: "Formal portrait of me in a traditional waistcoat",
    caption: "Five hundred dollars. The first real win.",
  },
  13: {
    src: "/assets/images/project-cortex.png",
    alt: "My handwritten invention timeline from idea to release",
    caption: "Project Cortex. Thirty-six pages.",
  },
  14: {
    src: "/assets/anya2.jpeg",
    alt: "A hand-drawn technical sketch from my early maker years",
    caption: "Anya, Inspired from Spy x Family.",
  },
  15: {
    src: "/assets/images/28.jpeg",
    alt: "Portrait of me in a university library",
    caption: "Histeeria. Still building.",
  },
  16: {
    src: "/assets/images/27.jpeg",
    alt: "Recent portrait of me. Still mid-build.",
    caption: "Still mid-build.",
  },
}

/**
 * Full archive for the end gallery.
 * Natural aspect ratios are preserved in layout; do not crop these in CSS.
 */
export const galleryImages: BioImage[] = [
  { src: "/assets/images/14.jpeg", alt: "Family portrait" },
  { src: "/assets/images/13.jpeg", alt: "With my sister in traditional dress" },
 
  { src: "/assets/images/26.jpeg", alt: "Childhood school portrait" },
  { src: "/assets/images/4.jpeg", alt: "Selfie with my younger sibling" },
  { src: "/assets/images/34.jpeg", alt: "Elementary school class photograph" },
  { src: "/assets/images/17.jpeg", alt: "On a balcony with my sister" },
  { src: "/assets/images/16.jpeg", alt: "Two young boys standing together" },
  { src: "/assets/images/33.jpeg", alt: "With my younger brother" },
  { src: "/assets/images/12.jpeg", alt: "Childhood portrait with my sister" },
  { src: "/assets/images/20.jpeg", alt: "Hand-drawn car design" },
  { src: "/assets/images/18.jpeg", alt: "Hand-drawn cargo drone concept" },
  { src: "/assets/images/22.jpeg", alt: "Hand-drawn hydraulic brake diagram" },
  { src: "/assets/images/23.jpeg", alt: "Hand-drawn house illustration" },
  { src: "/assets/images/28.jpeg", alt: "University library portrait" },
  { src: "/assets/images/32.jpeg", alt: "Formal school uniform portrait" },
  { src: "/assets/images/27.jpeg", alt: "Speaking at GCU Lahore" },
  { src: "/assets/images/10.jpeg", alt: "Formal portrait in a suit" },
  { src: "/assets/images/2.jpeg", alt: "With biology and English textbooks" },
  { src: "/assets/images/8.jpeg", alt: "Campus mirror selfie" },
  { src: "/assets/images/6.jpeg", alt: "Lockdown years mirror selfie" },
  { src: "/assets/images/7.jpeg", alt: "Selfie on public transit" },
  { src: "/assets/images/29.jpeg", alt: "Holding a Palestinian flag" },
  { src: "/assets/images/9.jpeg", alt: "Thoughtful portrait" },
  { src: "/assets/images/11.jpeg", alt: "Professional portrait in a suit" },
  { src: "/assets/images/1.jpeg", alt: "Portrait from a hard season" },
  { src: "/assets/images/31.jpeg", alt: "Recent portrait in a dark jacket" },
  { src: "/assets/images/25.jpeg", alt: "Coding workspace" },
  { src: "/assets/images/3.jpeg", alt: "Professional portrait in a blazer" },
  { src: "/assets/images/5.jpeg", alt: "Traditional waistcoat portrait" },
  { src: "/assets/images/30.jpeg", alt: "Portrait in a black blazer" },
  { src: "/assets/images/21.jpeg", alt: "Handwritten invention timeline" },
  { src: "/assets/images/19.jpeg", alt: "Drone remote control schematic" },
  { src: "/assets/images/24.jpeg", alt: "Early maker sketch" },
]

export const heroPortrait = "/assets/images/10.jpeg"
