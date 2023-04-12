/* eslint-disable @typescript-eslint/naming-convention */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Document from 'App/Models/Document'
import { ErrorMessages } from '../../../common/ErrorMessages'
import { responseMessages } from '../../../common/ErrorMessages'
import { Errors } from '../../../interface/enums'
import Page from 'App/Models/Page'
import { DocumentCreateRequest } from 'interface'
import { v4 } from 'uuid'

export default class DocumentsController {
  public async index({ response, request }: HttpContextContract) {
    try {
      let pageId
      if (request.all()?.page) {
        const responsePage = await Page.findBy('name', request.all()?.page)
        if (!responsePage) {
          responseMessages(response, {
            status: 404,
            message: 'Page not Found',
          })
          return
        }
        pageId = responsePage?.id
      }
      console.log(pageId)
      const list = pageId ? await Document.query().where('page_id', pageId) : await Document.all()

      responseMessages(response, {
        data: list || [],
        status: 202,
        message: 'Success in documents list',
      })
    } catch (error) {
      ErrorMessages(response, Errors.unexpectedError)
    }
  }
  public async store({ response, request }: HttpContextContract) {
    try {
      const body = request.body() as DocumentCreateRequest
      const responsePage = await Page.findBy('name', body.page)
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const page_id = responsePage?.id
      if (!page_id)
        responseMessages(response, {
          status: 404,
          message: 'Page not found',
        })

      const { header, primary_text, secondary_text } = body
      const document = await Document.create({
        id: v4(),
        header,
        primary_text,
        secondary_text,
        page_id,
      })
      responseMessages(response, {
        data: document,
        status: 202,
        message: 'Success in documents create',
      })
    } catch (error) {
      responseMessages(response, {
        status: error.status,
        message: error.message,
      })
    }
  }
}
