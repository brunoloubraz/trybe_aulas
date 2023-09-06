import React from 'react'
import './App.css'
import Title from './Title'
import RandomNumber from './RendalNumber';
import Loading from './Loading';

class App extends React.Component {

  state = {
    course: `front-end`,
    dogImageUrl: '',
    finished: false,
    isLoading: true,
  };

  componentDidMount() {
      console.log('Componente foi montado'); 
      this.handleFetch();  
  }

  componentDidUpdate(): void {
    console.log('Componente foi atualizado');
}


  handleFetch = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    this.setState({isLoading: false, dogImageUrl: data.message})
  }

  render() {
    const { course, finished, dogImageUrl, isLoading } = this.state
    if (isLoading) return <Loading />
    return (
      <>
      <h1>{`Módulo ${course}`}</h1>
        <Title titleMessage='Hello titulo'/>
        <h1>Hello World!</h1>
        <button onClick={this.handleClick}>botao</button>
        <button disabled={finished} onClick={() => this.setState({ finished:true})}>Finalizar Curso</button>
        {finished && <h2>Curso finalizado</h2>}
        <RandomNumber
        max={ 5 }
        />
        <h1>Random Dog</h1>
        <img src={dogImageUrl} />
      </>
    )
  }
  handleClick = () => {
    alert(`hello world`)
  }
}

export default App
