import { getEnv } from '@/utils'

const handler = (): Response => {
  const env = getEnv()
  return new Response(JSON.stringify(env), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  })
}

export default handler
