import { useState } from 'react'
import './App.css'

function App() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [lunch, setLunch] = useState('');

 




  //Pega a data
  const handleDateChange = (e) => {
    const dataString = e.target.value;

    const dataObj = new Date(dataString + 'T00:00:00-03:00'); //Fuso do Brasil
    const dateFormatoBR = dataObj.toLocaleDateString('pt-BR') 
    console.log(dateFormatoBR);
    setDate(dataString); //Deixa sem formatar pois o react formata automatico
    console.log("Data selecionada: ", dateFormatoBR);
  }

  const addHoursToTime = (timeString, hoursToAdd) => {
    // Converte "HH:MM" para minutos totais
  const [hours, minutes] = timeString.split(':').map(Number);
  // Divide a string "HH:MM" em duas partes usando ':' como separador
  // Exemplo: "12:30" → ["12", "30"] → [12, 30] (convertido para números)
  // hours = 12, minutes = 30

  const totalMinutes = (hours * 60) + minutes + (hoursToAdd * 60);
  // Converte tudo para minutos totais para facilitar os cálculos:
  // hours * 60 = 12 * 60 = 720 minutos
  // minutes = 30 minutos  
  // hoursToAdd * 60 = 3 * 60 = 180 minutos (se hoursToAdd for 3)
  // totalMinutes = 720 + 30 + 180 = 930 minutos totais

  // Calcula o horário de início do intervalo
  const intervalStartHours = Math.floor(totalMinutes / 60) % 24;
  const intervalStartMinutes = totalMinutes % 60;

  // Adiciona a duração do intervalo (1h05 = 65min)
  const intervalDurationMinutes = 65;
  const endTotalMinutes = totalMinutes + intervalDurationMinutes;

  // Calcula o horário final do intervalo
  const endHours = Math.floor(endTotalMinutes / 60) % 24;
  const endMinutes = endTotalMinutes % 60;

  const newHours = Math.floor(totalMinutes / 60) % 24;
  // Converte os minutos totais de volta para horas:
  // totalMinutes / 60 = 930 / 60 = 15.5 horas
  // Math.floor(15.5) = 15 (pega apenas a parte inteira)
  // % 24 = 15 % 24 = 15 horas (garante que não passe de 24h)
  // Se resultasse em 25 horas, ficaria 25 % 24 = 1 hora do próximo dia

  const newMinutes = totalMinutes % 60;
  // Pega o resto da divisão por 60 para obter os minutos:
  // 930 % 60 = 30 minutos (930 ÷ 60 = 15 com resto 30)
  // Isso nos dá os minutos que não completaram uma hora extra

  
  

  
    return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;
  
  }


  const handleTimeChange = (e) => {
    const timeValue = e.target.value;
    const lunchTime = addHoursToTime(timeValue, 3); //Soma 3 horas
    console.log(lunchTime)
    setTime(timeValue)
    setLunch(lunchTime);
  
  }

 
  return (
    <>
      <div className='bg-black-500 w-screen h-screen flex justify-center items-center'>
        <div className='space-x-4'>
          <h1 className='text-center' >Ponto</h1>
          {/* Data */}
          <label htmlFor="date-input">Data:</label>
          <input 
          id='date-input'
          className='bg-blue-950 text-gray-400 rounded-sm border-2 border-white'
          type="date" 
          value={date} 
          onChange={handleDateChange}/>

          {/* Horário de entrada */}
          <label htmlFor="time-input">Horário de Entrada:
          </label>
          <input
          id='time-input'
          className='bg-blue-950 text-gray-400 rounded-sm border-2 border-white'
          type="time" 
          value={time}
          onChange={handleTimeChange}
           />

          {/* Horário que pode começar o intervalo  */}
          <label htmlFor="time-interval">Intervalo mínimo</label>
          <input 
          className='bg-blue-950 text-gray-400 rounded-sm border-2 border-white'
          id='time-interval'
          type="time"
          value={lunch}
          />

          {/* Horário que pode terminar o intervalo */}
          <label htmlFor="time-end-interval">Intervalo Máximo</label>
          <input type="time" />


        </div>
      </div>
    </>
  )
}

export default App
