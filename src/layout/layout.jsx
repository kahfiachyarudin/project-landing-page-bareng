import Header from "../components/Header"
import Footer from "../components/Footer"

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#3A3A3A]">
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout