import '../styles/globals.css'

import { Inter } from '@next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }) {
  return(
    <main className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>)
}
