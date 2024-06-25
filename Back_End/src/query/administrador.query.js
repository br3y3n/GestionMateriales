export const GET_ADMISTRADOR = 'SELECT * FROM administrador'

export const GET_ID_ADMISTRADOR= 'SELECT * FROM administrador WHERE id = ?'

export const POST_ADMISTRADOR = 'INSERT INTO administrador (email, password, telefono) VALUES (?,?,?)'

export const UPDATE_ADMISTRADOR= 'UPDATE administrador SET email = IFNULL(?,null), password = IFNULL(?,NULL), telefono = IFNULL(?,NULL) WHERE id = ?'

export const DELETE_ADMISTRADOR = 'DELETE FROM administrador WHERE id = ?'