export const GET_GESTIONADOR = 'SELECT * FROM gestionador'

export const GET_ID_GESTIONADOR= 'SELECT * FROM gestionador WHERE id = ?'

export const POST_GESTIONADOR = 'INSERT INTO gestionador (email,departamento, telefono,password, administrador_id ) VALUES (?,?,?,?,?)'

export const UPDATE_GESTIONADOR= 'UPDATE material SET cantidad_material = COALESCE(?, cantidad_material), materiales = COALESCE(?, materiales),codigo = COALESCE(?, codigo),estado = COALESCE(?, estado)WHERE id = ?;'

export const DELETE_GESTIONADOR = 'DELETE FROM gestionador WHERE id = ?'