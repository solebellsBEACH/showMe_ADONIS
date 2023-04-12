import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { Pages } from '../../interface/enums'

export default class Page extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public name: Pages

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
