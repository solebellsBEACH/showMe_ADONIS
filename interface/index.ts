import { HowICanHelpYouIconsEnum, LanguageCodeEnum, Pages, Roles } from './enums'

export interface ListItems {
  title: string
  description: string
  myXP: string
  image: string
}
export interface Bio {
  header: string
  primary_text: string
  secondary_text: string
  image_url: string
  hasEffect?: boolean
}

export interface Document {
  page: Pages
  header: string
  primary_text: string
  secondary_text: string
  image_url: string
  hasEffect: boolean
  isPersonalBio: boolean
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
    hobbiesDescription: Hobbies[]
  }
}

export interface UserCreateRequest {
  username: string
  email: string
  password: string
  role: Roles
}
export interface DocumentCreateRequest {
  documents: {
    page: Pages
    header: string
    primary_text: string
    language: LanguageCodeEnum
    secondary_text?: string
  }[]
}

export interface DocumentUpdateRequest {
  page?: Pages
  header?: string
  primary_text?: string
  language?: LanguageCodeEnum
  secondary_text?: string
}
