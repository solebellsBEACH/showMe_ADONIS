/* eslint-disable @typescript-eslint/naming-convention */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Document from 'App/Models/Document'
import { ErrorMessages } from '../../../common/ErrorMessages'
import { responseMessages } from '../../../common/ErrorMessages'
import { Errors } from '../../../interface/enums'
import Page from 'App/Models/Page'
import { DocumentCreateRequest, DocumentUpdateRequest } from 'interface'
import { v4 } from 'uuid'
import { havePermission } from '../../../helpers/havePermission'

export default class DocumentsController {
  public async index({ response, request }: HttpContextContract) {
    try {
      if (request.all()?.page) {
        const responsePage = await Page.findBy('name', request.all()?.page)
        if (!responsePage) {
          responseMessages(response, {
            status: 404,
            message: 'Page not Found',
          })
          return
        }
        const list = await Document.query().where('page_id', responsePage?.id)
        response.send({ list, responsePage })
        responseMessages(response, {
          data: list || [],
          status: 202,
          message: 'Success in documents list',
        })
        return
      }
      const list = await Document.all()

      responseMessages(response, {
        data: list || [],
        status: 202,
        message: 'Success in documents list',
      })
    } catch (error) {
      ErrorMessages(response, Errors.unexpectedError)
    }
  }
  public async store({ response, request, auth }: HttpContextContract) {
    if (!havePermission(auth)) {
      ErrorMessages(response, Errors.permissionDenied)
      return
    }
    try {
      const responsePage = await Page.all()
      const body = request.body() as DocumentCreateRequest
      const createManyData = body.documents.map((e) => {
        const { header, primary_text, secondary_text, language } = e
        const page_id = responsePage.find((page) => page.name === e.page)?.id
        return { header, primary_text, secondary_text, page_id, id: v4(), language }
      })

      response.send({ data: createManyData })
      const documents = await Document.createMany(createManyData)

      responseMessages(response, {
        data: documents,
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
  public async update({ response, request, auth }: HttpContextContract) {
    if (!havePermission(auth)) {
      ErrorMessages(response, Errors.permissionDenied)
      return
    }
    const { id } = request.params() as { id: string }
    try {
      const document = await Document.find(id)
      const data = request.body() as DocumentUpdateRequest

      if (!document) throw new Error('document not found')
      document.merge(data)
      const updatedDocument = await document.save()
      responseMessages(response, {
        data: updatedDocument,
        status: 202,
        message: 'Success in document update',
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
      const document = await Document.find(id)
      if (!document) throw new Error('document not found')

      await document.delete()
      responseMessages(response, {
        data: null,
        status: 202,
        message: 'Success in document delete',
      })
    } catch (error) {
      ErrorMessages(response, Errors.unexpectedError)
    }
  }
}
