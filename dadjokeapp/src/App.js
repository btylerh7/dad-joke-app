import './App.css';
import Navbar from './Navbar'
import Header from './Header'
import AllJokes from './AllJokes'



function App() {
  const allJokes = fetch('https://shielded-sierra-55191.herokuapp.com/api/jokes')
    .then(result => {
      console.log(result)
    })
    .catch(err => {console.log(err)})
  return (
    <div className="app">
      <Navbar />
      <Header />
      <AllJokes />
      {/* Footer */}
    </div>
  );
}

export default App;
