export const GET_MATERIAL = 'SELECT * FROM material'

export const GET_ID_MATERIAL= 'SELECT * FROM material WHERE id = ?'

export const POST_MATERIAL = 'INSERT INTO material (cantidad_material,materiales, codigo,estado,administrador_id ) VALUES (?,?,?,?,?)'

export const UPDATE_MATERIAL= 'UPDATE material SET cantidad_material = IFNULL(?,null), materiales = IFNULL(?,NULL), codigo = IFNULL(?,NULL), estado(?,NULL) WHERE id = ?'

export const DELETE_MATERIAL = 'DELETE FROM material WHERE id = ?'