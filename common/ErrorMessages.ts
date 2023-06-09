/* eslint-disable prettier/prettier */
import { Errors } from '../interface/enums'
import type { ResponseContract } from '@ioc:Adonis/Core/Response'

export const ErrorMessages = (response: ResponseContract, error: Errors) => {
  const errorConfigs = {
    permissionDenied: { message: "You don't have permission for this action", status: 403 },
    unexpectedError: { message: 'Unexpected error', status: 500 },
    invalidAuth: { message: 'Invalid Auth', status: 400 },
  }
  response.status(errorConfigs[error].status).send(errorConfigs[error])
}

interface ResponsesCallbackOption {
  data?: any
  message?: string
  status: number
}
type ResponsesCallback = (response: ResponseContract, options: ResponsesCallbackOption) => void

export const responseMessages: ResponsesCallback = (response, options) =>
  response.status(options.status).send(options)
