import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Document from 'App/Models/Document'
import { LanguageCodeEnum } from '../../interface/enums'
import { v4 } from 'uuid'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Document.createMany([
      {
        id: v4(),
        page_id: '1b671a64-40d5-491e-99b0-da01ff1f3341',
        header: 'header-portuguese',
        primary_text: 'primary_text-portuguese',
        secondary_text: 'secondary_text-portuguese',
        language: LanguageCodeEnum.portuguese,
      },
      {
        id: v4(),
        page_id: '1b671a64-40d5-491e-99b0-da01ff1f3341',
        header: 'header-english-version',
        primary_text: 'primary_text-english-version',
        secondary_text: 'secondary_text-english-version',
        language: LanguageCodeEnum.english,
      },
    ])
  }
}
