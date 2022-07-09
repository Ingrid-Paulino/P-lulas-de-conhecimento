import Joi from 'joi'
import todosModel from '../models/todoModel'
import { runSchema, throwNotFoundError } from './_services'

export const todosService = {
  validateParamsId: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
  })),

  validateBodyAdd: runSchema(Joi.object({
    description: Joi.string().required(),
    isDone: Joi.boolean().default(false),

  })),

  validateBodyEdit: runSchema(Joi.object({
    description: Joi.string(),
    isDone: Joi.boolean(),
  })),

  async checkExists(id) {
    const item = await todosModel.get(id);
    if (!item) throwNotFoundError('"todo" not found')
  },
  async get (id) {
    const item = await todosModel.get(id)
    return item
  },

  // async edit (id: Todo['id'], changes: EditTodo): Promise<void> {
  //   const exists = await todosModel.exists(id)
  //   if (!exists) throw new NotFoundError()
  //   await todosModel.edit(id, changes)
  // },

  // async remove (id: Todo['id']): Promise<void> {
  //   const exists = await todosModel.exists(id)
  //   if (!exists) throw new NotFoundError()
  //   await todosModel.remove(id)
  // },

  // async add (data: AddTodo): Promise<Todo['id']> {
  //   const result = await todosModel.add(data)
  //   return result
  // },

  async list () {
    const items = await todosModel.list()
    return items
  }
}

