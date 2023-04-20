import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { LanguageCodeEnum } from '../../interface/enums'

export default class extends BaseSchema {
  protected tableName = 'stacks'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table
        .enum('language', Object.values(LanguageCodeEnum))
        .defaultTo(LanguageCodeEnum.portuguese)
        .notNullable()
      table.string('image_url').notNullable()
      table.string('title').notNullable()
      table.string('description', 500).notNullable()
      table.string('my_xp', 500).notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
