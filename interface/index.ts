import { HowICanHelpYouIconsEnum } from './enums'

export interface ListItems {
  title: string
  description: string
  myXP: string
  image: string
}
export interface Bio {
  header: string
  primaryText: string
  secondaryText: string
  image_url: string
  hasEffect?: boolean
}

export interface Document {
  header: string
  primaryText: string
  secondaryText: string
  image_url: string
  hasEffect: boolean
  isPersonalBio?: boolean
}

export interface Project extends Document {
  tecnologies?: string[]
}

export interface Hobbies extends Document {
  subject: string
}
export interface LanguageJSON {
  homePage: {
    bios: Document[]
    bio: Document
    howIHelpYou: {
      context: { header: string; text: string; icon: HowICanHelpYouIconsEnum }[]
    }
  }
  stacks: {
    bio: Document[]
    projects: Project[]
    stacksDescription: ListItems[]
  }
  hobbies: {
    header: string
    hobbiesDescription: Hobbies[]
  }
}
