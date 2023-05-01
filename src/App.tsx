import { Content, Header } from "./components"
import { LoaderProvider } from "./contexts/Loader.context"

function App() {
  return (
    <LoaderProvider>
      <Header></Header>
      <Content></Content>
    </LoaderProvider>
  )
}

export default App
