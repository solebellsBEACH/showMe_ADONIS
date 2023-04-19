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

export const DocumentsSeedData: DocumentsSeedDataType[] = [
  {
    id: v4(),
    page_id: PageUuids.home,
    header: 'Documento para testes em português',
    primary_text: 'Documento para testes em português',
    secondary_text: 'Documento para testes em português',
    language: LanguageCodeEnum.english,
    image_url: 'Documento para testes em português',
  },
  {
    id: v4(),
    page_id: PageUuids.home,
    header: 'Documento para testes em inglês',
    primary_text: 'Documento para testes em inglês',
    secondary_text: 'Documento para testes em inglês',
    language: LanguageCodeEnum.english,
    image_url: 'Documento para testes em inglês',
  },
]
