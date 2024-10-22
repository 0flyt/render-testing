import './App.css';

function App() {
  const url = 'https://render-testing-backend.onrender.com/';
  const data = fetch(url);
  return <>Testar att hämta från backend: {data}</>;
}

export default App;
