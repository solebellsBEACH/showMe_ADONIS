import { LanguageCodeEnum, Pages, Roles } from './enums'

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
  has_effect?: boolean
}

export type Document = {
  page: Pages
  header: string
  primary_text: string
  secondary_text?: string
  image_url: string
  has_effect?: boolean
  is_personal_bio?: boolean
  subtitle?: string
}

export type HomePageData = {
  bios: Document[]
  bio: Document
}

export interface Project {
  tecnologies: string
  header: string
  primary_text: string
  secondary_text: string
  image_url: string
  has_effect?: boolean
  is_personal_bio?: boolean
}

export interface Hobbies extends Document {
  subject: string
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
    subtitle?: string
  }[]
}

export interface DocumentUpdateRequest {
  page?: Pages
  header?: string
  primary_text?: string
  language?: LanguageCodeEnum
  secondary_text?: string
  subtitle?: string
}

export type Stack = {
  id: string
  title: string
  description: string
  myXP: string
  image: string
}
export interface StackUpdateRequest {
  page?: Pages
  header?: string
  primary_text?: string
  language?: LanguageCodeEnum
  secondary_text?: string
}
export interface ProjectCreateRequestBody extends Document {
  tecnologies: string[]
}
export interface ProjectUpdateRequest extends Project {}
