/**
 * Objeto que contiene la respuesta del endpoint de forma estandar
 */
const apiResponseData = {
    content: [],
    status: 0,
    mensaje: ''
}

/**
 * @param {* Respuesta del endpoint en express} response 
 * @param {* HTTP request status code} status 
 * @param {* Texto que indica si la operación fue exitosa o fallo} mensaje 
 */
function apiResponse(response, status, mensaje) {
    return { ...apiResponseData, content: [...apiResponseData.content, response], mensaje, status }
}

module.exports = apiResponse