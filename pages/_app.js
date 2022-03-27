import '../styles/global.scss'
import { InputValueProvider } from '../contexts/InputValueContext'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from "../lib/gtag.js"

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <InputValueProvider>
      <Component {...pageProps} />
      <gtag.Analytics />
    </InputValueProvider>
  )
}

export default MyApp
