import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { LanguageCodeEnum } from '../../interface/enums'

export default class Stack extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public language: LanguageCodeEnum

  @column()
  public image_url: string

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public my_xp: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
