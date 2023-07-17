import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import { fetchCoordinates } from './services/services';

type Coordinates = {
  latitude: number;
  longitude: number;
};


function App() {
  const [counter, setCounter] = useState(0)
  const [counter1, setCounter1] = useState(0)
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState(true);


  // useEffect(() => {
  //   console.log('dog');
  // })

  // só executa quando clico no counter, no counter1 ele nao imprime dog no console
  // useEffect(() => {
  //   console.log('dog');
  // }, [counter])

  // aqui só vai executar uma vez
  // useEffect(() => {
  //   console.log('dog');
  // }, [])

  // Limpeza de efeitos com função
  // useEffect(() => {
  //   console.log('dog');

  //   return () => {
  //     console.log('cat');
  //   }
  // }, [])

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCoordinates();
      setCoordinates({ latitude: data.latitude, longitude: data.longitude });
    setLoading(false)
    }
    fetchData();

    setInterval(() => {
      fetchData();
    }, 3000);

    return () => { // Essa é a função cleanup
      clearInterval(intervalId);
    };
  }, [counter]);

  
  if (loading) {
    return <h1>Loading...</h1>;
  }


  return (
    <>
      <Greeting name='Bruno' />
      <Greeting name='Karina' />
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <h3>{counter}</h3>
      <button onClick={() => setCounter1(counter1 + 1)}>+20</button>
      <h3>{counter1}</h3>
      <h1>International Space Station Location Tracker</h1>
    {coordinates && (
      <>
        <h2>{`Latitude: ${coordinates.latitude}`}</h2>
        <h2>{`Longitude: ${coordinates.longitude}`}</h2>
      </>
    )}
    </>
  )
}

export default App
