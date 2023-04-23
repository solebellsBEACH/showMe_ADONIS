import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Project from 'App/Models/Project'
import { ProjectsSeedData } from '../../mock/seedData/projects'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Project.createMany(ProjectsSeedData)
  }
}
