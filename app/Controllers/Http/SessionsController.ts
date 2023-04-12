// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { ErrorMessages } from '../../../common/ErrorMessages'
import { Errors } from '../../../interface/enums'

export default class SessionsController {
  public async create({ response, request, auth }) {
    try {
      const { email, password } = request.all()

      const token = await auth.attempt(email, password)

      return token
    } catch (error) {
      ErrorMessages(response, Errors.invalidAuth)
    }
  }
}
