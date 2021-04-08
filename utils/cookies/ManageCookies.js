export const setCookie = (name, value, days) => {
  let expires = ''
  const date = new Date()
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
  expires = '; expires=' + date.toUTCString()
  document.cookie = name + '=' + (value || '') + expires + '; path=/'
}

export const listCookies = () => {
  const cookiesArray = []
  document.cookie.split(';').reduce((cookies, cookie, index) => {
    const [timestamp, value] = cookie.split('=').map(c => c.trim())
    if (timestamp && value) cookiesArray.push({ timestamp: Number(timestamp), value })
  }, {})
  // if recent limit reached, delete first cookie
  if (cookiesArray.length > 10) {
    deleteCookie(cookiesArray[0].timestamp)
    cookiesArray.shift()
  }
  return cookiesArray
}

export const getCookie = (name) => {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

export const deleteCookie = (name) => {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}


