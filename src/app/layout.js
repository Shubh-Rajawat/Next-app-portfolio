
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter( { subsets: [ 'latin' ] } )

export const metadata = {
  title: 'Shubh Rajawat',
  description: 'A Web Dev',
}

export default function RootLayout( { children } ) {
  return (
    <html lang="en">
      <body >{ children }</body>
    </html>
  )
}
