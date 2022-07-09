import todosService from '../service/todoService'

export const todosController = {
  // Estou trabalhando com metodos assincronos
    // Preciso testar os comportamentos das minha função

  async get (req, res) {
    // pode dar err ou passar
    const { id } = await todosService.validateParamsId(req.params);
    // pode dar err ou passar
    await todosService.checkExists(id)
    // pode dar err ou passar
    const item = await todosService.get(id)
    //ok --> não preciso testar o methodo json pois ele faz parte da biblioteca, e nos não testamos nada que faz parte da biblioteca
    return res.json(item)
  }, 

  // async list (): Promise<Todo[]> {
  //   const result = await todosService.list()
  //   return result
  // },

  async add (req, res) {
    const data = await todoService.validateBodyAdd(req.body)
    const id = await todosService.add(data)
    const item = await todosService.get(id)
    return res.status(201).json(item)
  },

  async edit (req, res) {
    const [{ id }, changes] = await Promise.all([
      // err / ok
      todosService.validateParamsId(req.params),
      // err / ok
      todosService.validateBodyEdit(req.body)
    ])
      // err / ok
    await todosService.checkExists(id)
      // err / ok
    await todosService.edit(id, changes)
      // err / ok
    const item = await todosService.get(id)
      // err / ok
    return res.json(item)
  },

  // async remove (req, res): Promise<void> {
  //   const { id } = await todosValidator.paramsId(params)
  //   await todosService.remove(id)
  // },
}