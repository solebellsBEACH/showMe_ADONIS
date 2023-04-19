import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { LanguageCodeEnum } from '../../interface/enums'

export default class Document extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public page_id: string

  @column()
  public header: string

  @column()
  public language: LanguageCodeEnum

  @column()
  public primary_text: string

  @column()
  public secondary_text?: string

  @column()
  public has_effect: boolean

  @column()
  public is_personal_bio: boolean

  @column()
  public image_url: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
