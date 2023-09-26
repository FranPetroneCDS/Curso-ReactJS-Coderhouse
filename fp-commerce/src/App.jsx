import { Navbar } from './components/layout/navbar/Navbar'
import { ItemListContainer } from './components/pages/itemListContainer/ItemListContainer'

function App() {
  const greeting = 'Hola Franco, ¿Cómo estás?'

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={greeting} />
    </div>
  )
}

export default App
