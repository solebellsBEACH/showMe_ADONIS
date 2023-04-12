import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Page from 'App/Models/Page'
import { Pages } from '../../interface/enums'
import { v4 } from 'uuid'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Page.createMany([
      {
        id: v4(),
        name: Pages.home,
      },
      {
        id: v4(),
        name: Pages.stacks,
      },
      {
        id: v4(),
        name: Pages.hobbies,
      },
    ])
  }
}
