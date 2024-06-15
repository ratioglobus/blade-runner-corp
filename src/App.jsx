import cyberLogo from '/cyber-eye.png'
import Header from './Header';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div>
        <a href="https://www.warnerbros.com/movies/blade-runner" target="_blank">
          <img src={cyberLogo} className="logo" alt="Cyber logo" />
        </a>
      </div>

      <h1>Blade Runner Corp</h1>
      <p className="read-the-docs">
        We will organize the elimination of replicants that have gone out of control
      </p>
    </>
  )
}

export default App
