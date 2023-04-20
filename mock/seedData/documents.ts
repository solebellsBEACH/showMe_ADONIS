import { LanguageCodeEnum } from '../../interface/enums'
import { PageUuids } from './pages'
import { v4 } from 'uuid'

type DocumentsSeedDataType = {
  id: string
  page_id: string
  header: string
  primary_text: string
  secondary_text?: string
  language: LanguageCodeEnum
  has_effect?: boolean
  is_personal_bio?: boolean
  image_url: string
}
const perfilImage =
  'https://raw.githubusercontent.com/solebellsBEACH/showMeAssets/main/assets/perfilImage.jpg'
const documentModel = {
  page_id: PageUuids.home,
  header: 'Documento para testes em português',
  primary_text: 'Documento para testes em português',
  secondary_text: 'Documento para testes em português',
  image_url: perfilImage,
}
export const DocumentsSeedData: DocumentsSeedDataType[] = [
  {
    ...documentModel,
    id: v4(),
    language: LanguageCodeEnum.english,
  },
  {
    ...documentModel,
    id: v4(),
    language: LanguageCodeEnum.portuguese,
  },
  {
    ...documentModel,
    id: v4(),
    language: LanguageCodeEnum.english,
  },
  {
    ...documentModel,
    id: v4(),
    language: LanguageCodeEnum.portuguese,
  },
  {
    ...documentModel,
    id: v4(),
    language: LanguageCodeEnum.english,
  },
  {
    ...documentModel,
    id: v4(),
    language: LanguageCodeEnum.portuguese,
  },
  {
    ...documentModel,
    id: v4(),
    language: LanguageCodeEnum.english,
  },
  {
    ...documentModel,
    id: v4(),
    language: LanguageCodeEnum.portuguese,
    is_personal_bio: true,
  },
]
