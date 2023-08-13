'use client'
import React from 'react';
import '@/styles/_main.scss'

import { custom_fonts } from './fonts'
// component 
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function RootLayout({ children }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false)
  }, []);
  return (
    <html lang="en">
      <body className={`${custom_fonts}`}>
        {!loading ? <>
          <Navbar />
          {children}
          <Footer />
        </>
          : <p>Loading...</p>
        }
      </body>
    </html>
  )
}
