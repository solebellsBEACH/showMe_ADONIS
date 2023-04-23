import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ErrorMessages, responseMessages } from '../../../common/ErrorMessages'
import { Errors, LanguageCodeEnum } from '../../../interface/enums'
import Stack from 'App/Models/Stack'
import { Stack as StackType, StackUpdateRequest } from '../../../interface'
import { v4 } from 'uuid'
import { havePermission } from '../../../helpers/havePermission'
export default class StacksController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const { language = LanguageCodeEnum.english } = request.all() as {
        language: LanguageCodeEnum
      }
      const list = await Stack.query().where('language', language)
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

  public async update({ request, response, auth }: HttpContextContract) {
    if (!havePermission(auth)) {
      ErrorMessages(response, Errors.permissionDenied)
      return
    }
    const { id } = request.params() as { id: string }
    try {
      const stack = await Stack.find(id)
      const data = request.body() as StackUpdateRequest

      if (!stack) throw new Error('stack not found')
      stack.merge(data)
      const updatedStack = await stack.save()
      responseMessages(response, {
        data: updatedStack,
        status: 202,
        message: 'Success in stack update',
      })
    } catch (error) {
      ErrorMessages(response, Errors.unexpectedError)
    }
  }
  public async delete({ response, request, auth }: HttpContextContract) {
    if (!havePermission(auth)) {
      ErrorMessages(response, Errors.permissionDenied)
      return
    }
    const { id } = request.params() as { id: string }
    try {
      const stack = await Stack.find(id)
      if (!stack) throw new Error('stack not found')

      await stack.delete()
      responseMessages(response, {
        data: null,
        status: 202,
        message: 'Success in stack delete',
      })
    } catch (error) {
      ErrorMessages(response, Errors.unexpectedError)
    }
  }
}
