import './App.css';
import Navbar from './Navbar'
import Header from './Header'
import AllJokes from './AllJokes'



function App() {
  const allJokes = fetch('https://shielded-sierra-55191.herokuapp.com/api/jokes')
    .then(response => {
      return response.json()
    })
    .then(data => {
      return JSON.stringify(data)
    })
  return (
    <div className="app">
      <Navbar />
      <Header />
      <AllJokes joke={allJokes[0].title}/>
      {/* Footer */}
    </div>
  );
}

export default App;
