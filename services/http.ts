const BASE_URL = 'http://localhost:3000/api'

export const http = async (url: string, options: RequestInit = {}) => {
  const fullUrl = `${BASE_URL}/${url}`

  const response = await fetch(fullUrl, {
    method: options.method || 'GET',
  })

  return response.json()
}
