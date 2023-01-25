import type { FC, PropsWithChildren } from 'react'
import './globals.css'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ja">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
