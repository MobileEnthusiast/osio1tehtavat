import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1>
                {props.name}
            </h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            {props.taulukko} {props.tehtavat}
        </div>
    )
}

const Total = (props) => {
    console.log(props)
    return (
        <div>
            <p>
            Yhteensä {props.lasku} tehtävää
            </p>
            
        </div>
    )
}

const App = () => {
    
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
          {
            name: 'Reactin perusteet',
            exercises: 10
          },
          {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
          },
          {
            name: 'Komponenttien tila',
            exercises: 14
          }
        ]
      }

  return (
    <div>

      <Header name={course.name}/>

      <Content taulukko={course.parts[0].name} tehtavat={course.parts[0].exercises}/>

      <Content taulukko={course.parts[1].name} tehtavat={course.parts[1].exercises}/>

      <Content taulukko={course.parts[2].name} tehtavat={course.parts[2].exercises}/>

      <Total lasku={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>

      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
