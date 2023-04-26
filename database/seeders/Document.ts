import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Document from 'App/Models/Document'
import { DocumentsSeedData } from '../../mock/seedData/documents'
export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Document.createMany(DocumentsSeedData)
  }
}
