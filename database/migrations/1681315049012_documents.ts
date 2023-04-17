import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { LanguageCodeEnum } from '../../interface/enums'

export default class extends BaseSchema {
  protected tableName = 'documents'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.uuid('page_id').unsigned().references('id').inTable('pages').onDelete('CASCADE')
      table
        .enum('language', Object.values(LanguageCodeEnum))
        .defaultTo(LanguageCodeEnum.portuguese)
        .notNullable()
      table.string('header').notNullable()
      table.string('primary_text').notNullable()
      table.string('secondary_text')
      table.boolean('hasEffect').notNullable().defaultTo(false)
      table.boolean('isPersonalBio').notNullable().defaultTo(false)
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
