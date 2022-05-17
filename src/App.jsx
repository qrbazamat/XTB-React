import './App.css'
import FixedNavbar from './Components/FixedNavbar'
import Navbar from './Components/Navbar'
import Panel from './Components/Panel'
import TopBar from './Components/TopBar'

function App() {

  return (
    <main className="main-background">
      <Panel className={'top-bar-panel'} id={'top'}>
        <TopBar />
      </Panel>

      <Panel className={'navbar-panel'}>
        <Navbar />
      </Panel>

      <FixedNavbar />
    </main>
  )
}

export default App