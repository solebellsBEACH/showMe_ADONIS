/* eslint-disable prettier/prettier */
import { Errors } from '../interface/enums'
import type { ResponseContract } from '@ioc:Adonis/Core/Response'


export const ErrorMessages = (response: ResponseContract, error:Errors) => {
    const errorConfigs = {
        permissionDenied: { message: "You don't have permission for this action", status: 403 },
    }
    response.status(errorConfigs[error].status).send(errorConfigs[error])
}
