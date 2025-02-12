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
    </body>
  

  )
}

export default App
