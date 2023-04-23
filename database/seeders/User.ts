import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import { Roles } from '../../interface/enums'
import { v4 } from 'uuid'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        id: v4(),
        username: 'Usuário Root',
        email: 'lucassxxavier@gmail.com',
        password: 'root',
        role: Roles.ADMIN,
      },
    ])
  }
}
