import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Page from 'App/Models/Page'
import { PagesSeedData } from '../../mock/seedData/pages'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Page.createMany(PagesSeedData)
  }
}
