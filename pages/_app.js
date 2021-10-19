import 'tailwindcss/tailwind.css'
import { UIContext, UIProvider } from '../contexts/UIContext'

function MyApp({ Component, pageProps }) {
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  )
}

export default MyApp
