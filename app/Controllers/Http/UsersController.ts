import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { ErrorMessages } from '../../../common/ErrorMessages'
import { UserCreateRequest } from '../../../interface'
import { Roles, Errors } from '../../../interface/enums'

export default class UsersController {
  public async index({ response, auth }: HttpContextContract) {
    // console.log(auth)
    try {
      const users = await User.all()
      if (auth.user?.role !== Roles.ADMIN) response.json(users)
      else ErrorMessages(response, Errors.permissionDenied)
    } catch (error) {
      response.status(500).send({
        error: 'Unexpected error while retrieving users',
      })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.body()
      const user = await User.create(data as UserCreateRequest)
      response.json(user)
    } catch (error) {
      console.log(error)
      response.status(500).send({
        error: 'Unexpected error while creating user',
      })
    }
  }

  public async show({ request, response }: HttpContextContract) {
    try {
      const id = request.input('id')
      const user = await User.find(id)
      response.json(user)
    } catch (error) {
      response.status(500).send({
        error: 'Unexpected error while retrieving user',
      })
    }
  }
  public async update({ request, response }: HttpContextContract) {
    try {
      const id = request.param('id')
      const user = await User.find(id)
      const data = {
        name: request.input('name'),
        email: request.input('email'),
        password: request.input('password'),
      }

      if (!user) throw new Error('User not found')

      user.merge(data)
      await user.save()
      response.json(user)
    } catch (error) {
      response.status(500).send({
        error: 'Unexpected error while updating user',
      })
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    try {
      const id = request.param('id')
      const user = await User.find(id)
      if (!user) throw new Error('User not found')
      await user.delete()
      response.json({
        message: 'User deleted',
      })
    } catch (error) {
      response.status(500).send({
        error: 'Unexpected error while deleting user',
      })
    }
  }
}
