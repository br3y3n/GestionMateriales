export const GET_GESTIONADOR = 'SELECT * FROM gestionador'

export const GET_ID_GESTIONADOR= 'SELECT * FROM gestionador WHERE id = ?'

export const POST_GESTIONADOR = 'INSERT INTO gestionador (email,departamento, telefono,password, administrador_id ) VALUES (?,?,?,?,?)'

export const UPDATE_GESTIONADOR= 'UPDATE gestionador SET email = IFNULL(?,null), departamento = IFNULL(?,NULL), telefono = IFNULL(?,NULL), password(?,NULL) WHERE id = ?'

export const DELETE_GESTIONADOR = 'DELETE FROM gestionador WHERE id = ?'