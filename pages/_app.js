import '../styles/global.scss'
import { InputValueProvider } from '../contexts/InputValueContext'

function MyApp({ Component, pageProps }) {
  return (
    <InputValueProvider>
      <Component {...pageProps} />
      </InputValueProvider>
  )
}

export default MyApp
