const runSchema = (schema) => async (unknown) => {
  const { error, value } = schema.validate(unknown)
  if (error) throw error
  return value
}

const throwNotFoundError = (message) => {
  const err = new Error(message);
  err.name = 'NotFoundError';
    throw err;
  }

  export {
    runSchema,
    throwNotFoundError
  }