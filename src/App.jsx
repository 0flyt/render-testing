import './App.css';

function App() {
  const url = 'https://render-testing-backend.onrender.com/';
  const data = fetch(url);
  return (
    <>
      <p>Testar att hämta från backend: {data}</p>
    </>
  );
}

export default App;
