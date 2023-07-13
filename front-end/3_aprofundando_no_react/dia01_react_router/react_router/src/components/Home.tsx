import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/home')
  }

  return (
    <>
    <h1>Coffeteria</h1>
    <button onClick={ handleClick }>Entrar</button>
    <Link to="/coffees">
        <button>Conheça nossos produtos</button>
    </Link>
    </>
  )
}

export default Home;