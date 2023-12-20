import News from './News';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>Новости крутые</h1>
      </header>
      <main>
        <News />
      </main>
      <footer className='footer'>
        <p>© 2023 права защищены </p>
      </footer>
    </div>
  );
}

export default App;