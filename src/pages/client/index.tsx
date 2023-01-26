'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import type { FC } from 'react'

const Client: FC = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    void fetch('/api/hello').then(async (result) => {
      const text = await result.text()
      setText(text)
    })
  }, [])

  return (
    <div>
      <h1>Client</h1>
      <div>result</div>
      <code>
        <pre>{text}</pre>
      </code>
      <Link href="/">Home</Link>
    </div>
  )
}

export default Client
