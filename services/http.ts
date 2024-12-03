import { env } from '@/lib/envs'

export const http = async <T>(url: string, options: RequestInit = {}) => {
  const fullUrl = `${env.NEXT_PUBLIC_BASE_URL}/api/${url}`

  const response = await fetch(fullUrl, {
    method: options.method || 'GET',
  })

  return response.json() as T
}
