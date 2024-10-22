import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://render-testing-backend.onrender.com/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div>
      <h1>Data från backend</h1>
      <pre>{data && JSON.stringify(data)}</pre>
    </div>
  );
}

export default App;
