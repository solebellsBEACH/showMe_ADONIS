import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { Roles } from '../../interface/enums'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('email', 255).notNullable().unique()
      table.string('username', 255).notNullable().unique()
      table.enum('role', Object.values(Roles)).defaultTo(Roles.VISITOR).notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
