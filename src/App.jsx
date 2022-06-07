import './App.css'
import FixedNavbar from './Components/FixedNavbar'
import Navbar from './Components/Navbar'
import Panel from './Components/Panel'
import PostMenu from './Components/PostMenu'
import PostPanel from './Components/PostPanel'
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

      <Panel>
        <PostMenu />
      </Panel>

      <Panel>
        <PostPanel />
      </Panel>
    </main>
  )
}

export default App