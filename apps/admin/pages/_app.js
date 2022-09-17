import '../styles.css'
import { Toaster } from 'react-hot-toast'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster/>
    </>
  )
}