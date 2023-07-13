import { useNavigate } from "react-router-dom";

function CoffeeList() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <>
      <h1>CoffeeList page</h1>
      <button onClick={ handleClick }>Voltar</button>
    </>
  )
}

export default CoffeeList;