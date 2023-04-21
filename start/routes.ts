/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('user/login', 'SessionsController.create')

Route.get('document/all', 'DocumentsController.index')
Route.get('document/allHome', 'DocumentsController.indexHome')
Route.get('document/allStacks', 'DocumentsController.indexStacks')
Route.post('user/create', 'UsersController.store')

Route.get('stack/all', 'StacksController.index')
Route.get('project/all', 'ProjectsController.index')

Route.group(() => {
  // Document Routes
  Route.post('document/create', 'DocumentsController.store')
  Route.put('document/update/:id', 'DocumentsController.update')
  Route.delete('document/delete/:id', 'DocumentsController.delete')

  // Project Routes
  Route.post('project/create', 'ProjectsController.store')
  Route.put('project/update/:id', 'ProjectsController.update')
  Route.delete('project/delete/:id', 'ProjectsController.delete')

  // Stack Routes
  Route.post('stack/create', 'StacksController.store')
  Route.put('stack/update/:id', 'StacksController.update')
  Route.delete('stack/delete/:id', 'StacksController.delete')

  Route.get('user/all', 'UsersController.index')
}).middleware('auth')
