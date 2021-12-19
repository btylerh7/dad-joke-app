import './App.css';
import Navbar from './Navbar'
import Header from './Header'
import AllJokes from './AllJokes'

//Icorporate random joke from api
//move "all jokes" component into it's own page. Perhaps when you click "all jokes",
//change the text of the h1 to "Al jokes" and render the "all-jokes" div under it.
//Home ONLY has joke of the day.


function App() {
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
