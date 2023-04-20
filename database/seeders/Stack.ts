import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { StacksSeedData } from '../../mock/seedData/stacks'
import Stack from 'App/Models/Stack'
export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Stack.createMany(StacksSeedData)
  }
}
