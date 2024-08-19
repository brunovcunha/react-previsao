
import { useRef, useState } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/WeatherInformations/WeatherInformations';

function App() {

  const [weather, setWeather] = useState(0);

  const inputRef = useRef();

  async function searchCity(){
    console.log(inputRef.current.value)

    const city = inputRef.current.value;
    const key = '64b3fc9c5cb8f5f07836f95e7606b516'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)

    setWeather(apiInfo.data)


  }

  return (
    <div>
      <h1>Previsão do Tempo</h1>
      

      <input ref={inputRef} type="text" placeholder='Nome da cidade'/>
      <button onClick={searchCity}>Buscar</button>
      <WeatherInformations weather={weather}/>
    </div>
  )
}

export default App
