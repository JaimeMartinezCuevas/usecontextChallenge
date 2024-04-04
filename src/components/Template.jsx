import Header from './Header.jsx'
import Footer from './Footer.jsx'
export function Template ({children}) {
  return (
    <>
    <Header />
      {children}
    <Footer />
    </>
  )

}