import Link from 'next/link'

import type { FC } from 'react'

const Home: FC = () => {
  return (
    <div>
      <h1>Next + Cloudflare Pages</h1>
      <div>
        <Link href="/server">Server</Link>
      </div>
      <div>
        <Link href="/client">Client</Link>
      </div>
    </div>
  )
}

export default Home
