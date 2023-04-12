import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Document extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public page_id: string

  @column()
  public header: string

  @column()
  public primary_text: string

  @column()
  public secondary_text?: string

  @column()
  public hasEffect: boolean

  @column()
  public isPersonalBio: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
