import Link from 'next/link'

import type { GetServerSideProps } from 'next'
import type { FC } from 'react'

interface Props {
  text: string
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const result = await fetch('http://localhost:3000/api/hello')
  const text = await result.text()
  return {
    props: {
      text,
    },
  }
}

const Server: FC<Props> = ({ text }) => {
  return (
    <div>
      <h1>Server</h1>
      <div>result</div>
      <code>
        <pre>{text}</pre>
      </code>
      <Link href="/">Home</Link>
    </div>
  )
}

export default Server
