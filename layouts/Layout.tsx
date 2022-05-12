import { NextPage } from 'next';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar'

type Props = {
  children: ReactNode
}

const Layout: NextPage<Props> = ( { children } ) => {

  return (
    <>
        <Head>
            <title>Hola</title>
        </Head>
        <ThemeProvider>
            <Navbar/>
            <main>
                { children }
            </main>
        </ThemeProvider>
    </>
  )
}

export default Layout