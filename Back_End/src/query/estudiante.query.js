
export const GET_ESTUDIANTE = 'SELECT * FROM estudiante'

export const GET_ID_ESTUDIANTE= 'SELECT * FROM estudiante WHERE id = ?'

export const POST_ESTUDIANTE = 'INSERT INTO estudiante (email, password, telefono, carrera) VALUES (?,?,?,?)'

export const UPDATE_ESTUDIANTE= 'UPDATE estudiante SET email = IFNULL(?,NULL), password = IFNULL(?,NULL), telefono = IFNULL(?,NULL), carrera = IFNULL(?,NULL) WHERE id = ?'

export const DELETE_ESTUDIANTE = 'DELETE FROM estudiante WHERE id = ?'

export const GET_MATERIALES_ESTUDIANTE= 'SELECT e.id AS id_estudiante, e.email , e.telefono, m.id AS id_material, m.cantidad_material, m.materiales FROM estudiante e JOIN material_estudiante em ON e.id = em.estudiante_id JOIN material m ON em.material_id = m.id WHERE e.id = ?'