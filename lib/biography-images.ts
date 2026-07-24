export interface BioImage {
  src: string
  alt: string
  caption?: string
}

/** One medium side portrait per chapter (floats beside the prose). */
export const chapterSideImages: Record<number, BioImage> = {
  1: {
    src: "/assets/images/14.webp",
    alt: "Family portrait with my mother, my sister, and me as a child",
    caption: "The family I was born into.",
  },
  2: {
    src: "/assets/images/26.webp",
    alt: "My childhood school portrait",
    caption: "the boy everyone wanted to hold.",
  },
  3: {
    src: "/assets/images/13.webp",
    alt: "Childhood photo with my sister",
    caption: "Stars on faces. Curiosity in the mind.",
  },
  4: {
    src: "/assets/images/20.webp",
    alt: "My hand-drawn car design for MITO SHIBA COMPANY, 2018",
    caption: "Design No. 1. A remote control car.",
  },
  5: {
    src: "/assets/images/32.webp",
    alt: "My formal school uniform portrait",
    caption: "Failing in one place, winning in every other.",
  },
  6: {
    src: "/assets/images/27.webp",
    alt: "Me speaking at the Government College University Lahore podium",
    caption: "Presenting at SUPARCO.",
  },
  7: {
    src: "/assets/images/2.webp",
    alt: "Portrait of me with biology and English textbooks behind me",
    caption: "I wanted computers. They wanted a doctor.",
  },
  8: {
    src: "/assets/images/6.webp",
    alt: "Mirror selfie from the lockdown years",
    caption: "Eight months. And a teacher who reshaped me.",
  },
  9: {
    src: "/assets/images/29.webp",
    alt: "Portrait of me holding a Palestinian flag",
    caption: "Never stop looking for the truth.",
  },
  10: {
    src: "/assets/images/1.webp",
    alt: "Portrait from a hard season of my life",
    caption: "I was the only hope for my family.",
  },
  11: {
    src: "/assets/images/25.webp",
    alt: "My coding workspace with monitors and an AI banner",
    caption: "A used ThinkPad, and stubbornness.",
  },
  12: {
    src: "/assets/images/5.webp",
    alt: "Formal portrait of me in a traditional waistcoat",
    caption: "Five hundred dollars. The first real win.",
  },
  13: {
    src: "/assets/images/project-cortex.webp",
    alt: "Project Cortex research",
    caption: "Project Cortex. Thirty-six pages.",
  },
  14: {
    src: "/assets/anya2.webp",
    alt: "Anya companion robot",
    caption: "Anya, inspired by Spy x Family.",
  },
  15: {
    src: "/assets/images/28.webp",
    alt: "Portrait of me in a university library",
    caption: "Histeeria. Still building.",
  },
  16: {
    src: "/assets/images/31.webp",
    alt: "Recent portrait of me. Still mid-build.",
    caption: "Still mid-build.",
  },
}

/**
 * Full archive for the end gallery.
 * Natural aspect ratios are preserved in layout; do not crop these in CSS.
 */
export const galleryImages: BioImage[] = [
  { src: "/assets/images/14.webp", alt: "Family portrait" },
  { src: "/assets/images/13.webp", alt: "With my sister in traditional dress" },
  { src: "/assets/images/26.webp", alt: "Childhood school portrait" },
  { src: "/assets/images/4.webp", alt: "Selfie with my younger sibling" },
  { src: "/assets/images/34.webp", alt: "Elementary school class photograph" },
  { src: "/assets/images/17.webp", alt: "On a balcony with my sister" },
  { src: "/assets/images/16.webp", alt: "Two young boys standing together" },
  { src: "/assets/images/33.webp", alt: "With my younger brother" },
  { src: "/assets/images/12.webp", alt: "Childhood portrait with my sister" },
  { src: "/assets/images/20.webp", alt: "Hand-drawn car design" },
  { src: "/assets/images/18.webp", alt: "Hand-drawn cargo drone concept" },
  { src: "/assets/images/22.webp", alt: "Hand-drawn hydraulic brake diagram" },
  { src: "/assets/images/23.webp", alt: "Hand-drawn house illustration" },
  { src: "/assets/images/28.webp", alt: "University library portrait" },
  { src: "/assets/images/32.webp", alt: "Formal school uniform portrait" },
  { src: "/assets/images/27.webp", alt: "Speaking at GCU Lahore" },
  { src: "/assets/images/10.webp", alt: "Formal portrait in a suit" },
  { src: "/assets/images/2.webp", alt: "With biology and English textbooks" },
  { src: "/assets/images/8.webp", alt: "Campus mirror selfie" },
  { src: "/assets/images/6.webp", alt: "Lockdown years mirror selfie" },
  { src: "/assets/images/7.webp", alt: "Selfie on public transit" },
  { src: "/assets/images/29.webp", alt: "Holding a Palestinian flag" },
  { src: "/assets/images/9.webp", alt: "Thoughtful portrait" },
  { src: "/assets/images/11.webp", alt: "Professional portrait in a suit" },
  { src: "/assets/images/1.webp", alt: "Portrait from a hard season" },
  { src: "/assets/images/31.webp", alt: "Recent portrait in a dark jacket" },
  { src: "/assets/images/25.webp", alt: "Coding workspace" },
  { src: "/assets/images/3.webp", alt: "Professional portrait in a blazer" },
  { src: "/assets/images/5.webp", alt: "Traditional waistcoat portrait" },
  { src: "/assets/images/30.webp", alt: "Portrait in a black blazer" },
  { src: "/assets/images/21.webp", alt: "Handwritten invention timeline" },
  { src: "/assets/images/19.webp", alt: "Drone remote control schematic" },
  { src: "/assets/images/24.webp", alt: "Early maker sketch" },
]

export const heroPortrait = "/assets/images/10.webp"
