export const GET_MATERIALE_ESTUDIANTES = 'SELECT * FROM material_estudiante'

export const GET_ID_MATERIALE_ESTUDIANTES= 'SELECT * FROM material_estudiante WHERE id = ?'

export const POST_MATERIALE_ESTUDIANTES = 'INSERT INTO material_estudiante (estudiante_id,material_id) VALUES (?,?)'

export const UPDATE_MATERIALE_ESTUDIANTES= 'UPDATE material_estudiante SET estudiante_id = IFNULL(?,null), material_id = IFNULL(?,NULL) WHERE id = ?'

export const DELETE_MATERIALE_ESTUDIANTES = 'DELETE FROM material_estudiante WHERE id = ?'