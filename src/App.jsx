import About from './Components/About'
import FixedNavbar from './Components/FixedNavbar'
import Navbar from './Components/Navbar'
import Panel from './Components/Panel'
import PostMenu from './Components/PostMenu'
import PostPanel from './Components/PostPanel'
import PureCounts from './Components/PureCounts'
import TopBar from './Components/TopBar'
import './App.css'
import Staff from './Components/Staff'

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

      <Panel className='about'>
        <About />
        <PureCounts />
        <Staff />
      </Panel>
    </main>
  )
}

export default App