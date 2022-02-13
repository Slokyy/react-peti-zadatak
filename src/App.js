import './App.css';
import { useState, useEffect } from 'react';
import TourItems from './components/TourItems/TourItems.js';



function App() {
  const url = "https://course-api.com/react-tours-project";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const handleDelete = (id) => {
    setData((prevState) => prevState.filter(tour => tour.id !== id ));
  }

  const fetchData = () => {
    fetch(url)
      .then((res) => {
        if(!res.ok) {
          setIsLoading(false);
          throw Error("Data error while fetching....");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`Error message: ${err}`)
      })
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <main>
      <section className="section menu">
        {isLoading && <div className="loading">Loading...</div>}
        {data.length > 0 && <h2>Our Tours</h2>}
        {data.length === 0 && !isLoading && <h2>No Tours Left</h2>}
        {data.length > 0 && 
          <TourItems data={data} handleDelete={handleDelete} />
        }
        {data.length === 0 && !isLoading &&
          <button className="refresh-btn" onClick={() => fetchData()}>Refresh</button>}
        
      </section>
    </main>
  );
}

export default App;
