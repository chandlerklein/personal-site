import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

import type { AppProps } from 'next/app'
import Head from 'next/head'

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Chandler Klein - Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="icon" type="image/x-icon" href="/projects/personal-site-next/public/favicon.png"/>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
