import './App.css'

function Header({ name, year }) {
  return (
    <header>
      <h1>Cafe {name}</h1>
      <p>Copywright {year}</p>
    </header>
  )
}

function App() {
  return (
    <div>
    <Header name="Mustafa" year={new Date().getFullYear}/>
    <main>
      <h2> We serve the most delicious coffee</h2>
      </main>
    </div>
  )
}

export default App
