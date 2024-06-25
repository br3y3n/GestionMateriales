
export const GET_ESTUDIANTE = 'SELECT * FROM estudiante'

export const GET_ID_ESTUDIANTE= 'SELECT * FROM estudiante WHERE id = ?'

export const POST_ESTUDIANTE = 'INSERT INTO estudiante (email, password, telefono, carrera) VALUES (?,?,?,?)'

export const UPDATE_ESTUDIANTE= 'UPDATE estudiante SET email = IFNULL(?,NULL), password = IFNULL(?,NULL), telefono = IFNULL(?,NULL), carrera = IFNULL(?,NULL) WHERE id = ?'

export const DELETE_ESTUDIANTE = 'DELETE FROM estudiante WHERE id = ?'