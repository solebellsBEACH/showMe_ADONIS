import { AuthContract } from '@ioc:Adonis/Addons/Auth'
import { Roles } from '../interface/enums'

export const havePermission = (auth: AuthContract) => {
  return auth.user?.role !== Roles.ADMIN
}
