import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ErrorMessages, responseMessages } from '../../../common/ErrorMessages'
import { Errors } from '../../../interface/enums'
import Stack from 'App/Models/Stack'
import { Stack as StackType } from '../../../interface'
import { v4 } from 'uuid'
export default class StacksController {
  public async index({ response }: HttpContextContract) {
    try {
      const list = await Stack.all()
      responseMessages(response, {
        data: list || [],
        status: 202,
        message: 'Success in stacks list',
      })
      return
    } catch (error) {
      ErrorMessages(response, Errors.unexpectedError)
    }
  }
  public async store({ request, response }: HttpContextContract) {
    try {
      const requestData: StackType[] = request.all().stacks
      const stacks = await Stack.createMany(
        requestData.map((e) => {
          return { ...e, id: v4() }
        })
      )

      responseMessages(response, {
        data: stacks,
        status: 202,
        message: 'Success in stacks create',
      })
      return
    } catch (error) {
      console.log(error)
      ErrorMessages(response, Errors.unexpectedError)
    }
  }
}

// [x] Index
// [x] Create
// [] delete
// [] update
