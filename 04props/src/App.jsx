
import './App.css'
import Cards from './components/Cards'

function App() {
  

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind CSS</h1>
      <Cards username="Himanshu" btnTxt="click me"/>
      <Cards username="Prateek" btnTxt="visit me"/>
      {/* by default lega= yha click kro */}
      <Cards username="Prateek" /> 
    
    </>
  )
}

export default App
