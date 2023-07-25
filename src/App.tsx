import SideBar from "./components/SideBar"
import Home from './components/Home'
import { Container, GlobalStyle, } from "./components/styles/Global"

function App() {

  return (
    <Container>
    <GlobalStyle />
    <SideBar />
    <Home />
    </Container>
  )
}

export default App
