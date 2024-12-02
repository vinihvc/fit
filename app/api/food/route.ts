import { TACO } from '@/content/TACO'

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)

  const id = Number(searchParams.get('id'))

  if (!id) {
    return Response.json(
      {
        error: 'ID is required',
      },
      { status: 400 },
    )
  }

  const data = TACO.find((item) => item.id === id)

  if (!data) {
    return Response.json(
      {
        error: 'Not found',
      },
      { status: 404 },
    )
  }

  return Response.json({ data })
}
