export const IMPORT_SOCKETS_UPDATE = 'server/import_master_update'
export const EXPORT_SOCKETS_UPDATE = 'server/export_master_update'
export const UPDATE_PIXEL_VALUE = 'update_pixel_value'
export const SET_ACTIVE_COLOR = 'set_active_color'
export const INPUT_PASSWORD = 'input_password'

export function inputPassword(password){
  const data = {"password":password}
  console.log(JSON.stringify(data));
  const auth=()=>{
    const url = "https://constellation.herokuapp.com/auth/"
    const format = new Request(url, {
      method: 'POST',
      body:JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
    return fetch(format)
      .then((res)=>{
        return res.json()
      }).then(res=>{
        console.log(res);
        localStorage.auth = res.message
      })
  }
  return {
    type:INPUT_PASSWORD,
    payload: auth()
  }

}

export function exportSocketsUpdate(data){
  return {
    type:EXPORT_SOCKETS_UPDATE,
    payload: data
  }
}

export function importSocketsUpdate(data){
  return {
    type:IMPORT_SOCKETS_UPDATE,
    payload: data
  }
}

export function updatePixelValue(index, newRGB){
  return {
    type:UPDATE_PIXEL_VALUE,
    payload: [index, newRGB]
  }
}

export function setActiveColor(color){
  return {
    type:SET_ACTIVE_COLOR,
    payload: color
  }
}
