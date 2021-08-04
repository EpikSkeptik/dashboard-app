import Header from './components/Header'
import Bottom from './components/Bottom'

function App() {
  return (
    <div className="container">
      <div className="overlay">
        <Header/>
        <Bottom/>
      </div>
    </div>
  );
}

export default App;
