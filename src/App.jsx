import { useState, useEffect } from "react"

export default function App() {

  const [input, setInput] = useState('')

  useEffect(() => {
    if(input === '') {
      document.title = 'Informe o titulo'
      return
    }
    document.title = input
  }, [input])  

  function text(e) {
    setInput(e.target.value)
  }
  return(
    <div>
      <h3>Altere o titulo da página!</h3>
      <input type="text" onChange={text} placeholder="Digite o titulo" maxLength={20}/>
      {input === 'ola' ? <h2>{input}</h2> : <h2>{}</h2>}
    </div>
  )
}