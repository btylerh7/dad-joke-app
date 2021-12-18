import './App.css';
import Navbar from './Navbar'
import Header from './Header'
import AllJokes from './AllJokes'



async function App() {
  const response = await fetch('https://shielded-sierra-55191.herokuapp.com/api/jokes')
  console.log(response)
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
