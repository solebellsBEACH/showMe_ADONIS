import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Page from 'App/Models/Page'
import { Pages } from '../../interface/enums'
import { v4 } from 'uuid'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Page.createMany([
      {
        id: '1b671a64-40d5-491e-99b0-da01ff1f3341',
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
