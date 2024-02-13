import '../styles/global.scss'
import { InputValueProvider } from '../contexts/InputValueContext'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from "../lib/gtag.js"
import WhatsappButton from '../components/WhatsappButton.js'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

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
      <Header/>
      <Component {...pageProps} />
      <Footer/>
      <WhatsappButton />
      <gtag.Analytics />
    </InputValueProvider>
  )
}

export default MyApp
