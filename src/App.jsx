import { Footer } from "./component/footer"
import { Header } from "./component/header"
import { Main } from "./component/main"
import { Nav } from "./component/nav"

function App() {


  return (
    <body>
      <nav>
      <Nav />
      <Header />
      </nav>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  

  )
}

export default App
