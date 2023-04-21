import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ErrorMessages, responseMessages } from '../../../common/ErrorMessages'
import { Errors } from '../../../interface/enums'
import Project from 'App/Models/Project'
import { ProjectCreateRequestBody, ProjectUpdateRequest } from '../../../interface'
import { v4 } from 'uuid'
import { havePermission } from '../../../helpers/havePermission'
export default class ProjectsController {
  public async index({ response }: HttpContextContract) {
    try {
      const list = await Project.all()
      responseMessages(response, {
        data: list || [],
        status: 202,
        message: 'Success in projects list',
      })
      return
    } catch (error) {
      ErrorMessages(response, Errors.unexpectedError)
    }
  }
  public async store({ request, response }: HttpContextContract) {
    try {
      const requestData: ProjectCreateRequestBody[] = request.all().projects
      const projects = await Project.createMany(
        requestData.map((e) => {
          return { ...e, id: v4(), tecnologies: JSON.stringify(e.tecnologies) }
        })
      )

      responseMessages(response, {
        data: projects,
        status: 202,
        message: 'Success in projects create',
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
      const project = await Project.find(id)
      const data = request.body() as ProjectUpdateRequest

      if (!project) throw new Error('project not found')
      project.merge(data)
      const updatedProject = await project.save()
      responseMessages(response, {
        data: updatedProject,
        status: 202,
        message: 'Success in project update',
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
      const project = await Project.find(id)
      if (!project) throw new Error('project not found')

      await project.delete()
      responseMessages(response, {
        data: null,
        status: 202,
        message: 'Success in project delete',
      })
    } catch (error) {
      ErrorMessages(response, Errors.unexpectedError)
    }
  }
}
