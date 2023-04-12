import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Document from 'App/Models/Document'
import { v4 } from 'uuid'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Document.createMany([
      {
        id: v4(),
        page_id: '1b671a64-40d5-491e-99b0-da01ff1f3341',
        header: 'header',
        primary_text: 'primary_text',
        secondary_text: 'secondary_text',
      },
    ])
  }
}
