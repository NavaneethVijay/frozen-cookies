const defaults = {
  path: '/',
  expiryDays: 1,
}

function setCookieExpiryDays(days: any) {
  days = days ? days : defaults.expiryDays
  let date = new Date()
  let nextDay = date.setDate(date.getDate() + days)
  return new Date(nextDay).toUTCString()
}

const Cookies = {
  set(key: any, value: any, isJson?: Boolean, expires?: Number) {
    if (isJson === true) value = JSON.stringify(value)
    try {
      document.cookie = `${key}=${value}; expires=${setCookieExpiryDays(
        expires
      )}; path=${defaults.path}`
      return true
    } catch (e) {
      return false
    }
  },

  get(cookieName: any) {
    let currentCookies: any
    try {
      currentCookies = document ? document.cookie : ''
    } catch (e) {}
    if (currentCookies) {
      let cookies: any = currentCookies.split(';')
      cookies = cookies.map((item: any) => {
        item = item.split('=')
        let cookieValuePair = {
          name: item[0].trim(),
          value: item[1].trim(),
        }
        return cookieValuePair
      })
      return cookies.find((item: any) => {
        return item.name === cookieName
      })
    } else {
      return false
    }
  },
}

export default Cookies;