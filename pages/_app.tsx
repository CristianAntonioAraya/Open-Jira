import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { UIProvider } from '../context/ui'
import { EntriesProvider } from '../context/entries'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </EntriesProvider>
  )
  
}

export default MyApp
