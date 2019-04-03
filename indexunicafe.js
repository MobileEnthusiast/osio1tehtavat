
import ReactDOM from 'react-dom'
import React, { useState } from 'react'


const Header = (props) => {
    console.log(props)
    return (
    
        <>
        <h1>{props.header}</h1>
        </>
    )

}

const Valiotsikko = (props) => {
    console.log(props)
    return (
        <>
        <h2>{props.vali}</h2>
        </>
    )
}

{/*
const Content = (props) => {
    console.log(props)
    return (
        <>
        <p>{props.sisalto} {props.laskuri}</p>
        </>
    )
}  

const Total = (props) => {
    return (
        <>
        <p>{props.yht}{props.lasku}</p>
        </>
    )
}


const Keskiarvo = (props) => {
    return (
        <>
        <p>{props.keskiarvo}{props.ka}</p>
        </>
    
    )
}

const Positiivisia = (props) => {
    return (
        <>
        <p>{props.positiivisia}{props.pos}{props.merkki}</p>
        </>
    )
} */}


const Statistics = (props) => {
    console.log(props)
    const styles = {
        width: '40px',
        margin: '20px',
        textAlign: 'right'
        
      };
    
    if (props.allClicksLaskuri === 0) {
    return (
        <div>Ei yhtään palautetta annettu</div>
        
    )
}
    return(
        <>
        <table>
            <tbody>
        <tr > 
            <td>{props.sisalto}</td>
            <td style={styles}>{props.laskuri}</td>
        </tr>
        <tr>
            <td>{props.sisalto1}</td>
            <td style={styles}>{props.laskuri1}</td>
        </tr>
        <tr>
            <td>{props.sisalto2}</td>
            <td style={styles}>{props.laskuri2}</td>
        </tr>
        <tr>
            <td>{props.totalNimi}</td>
            <td style={styles}>{props.total}</td>
        </tr>
        <tr>
            <td>{props.keskiarvo}</td>
            <td style={styles}>{props.ka}</td>
        </tr>
        <tr>
            <td>{props.positiivisia}</td>
            <td style={styles}>{props.pos}</td>
            <td >{props.merkki}</td>
        </tr>
        </tbody>
        </table>
        {/*<p>{props.sisalto} {props.laskuri}</p>
        <p>{props.sisalto1} {props.laskuri1}</p>
        <p>{props.sisalto2} {props.laskuri2}</p>
        <p>{props.totalNimi} {props.total}</p>
        <p>{props.keskiarvo} {props.ka}</p>
    <p>{props.positiivisia} {props.pos} {props.merkki}</p> */}
        </>
    )

}

const Button = (props) => 
        <button onClick={props.handleClick}> {props.text}</button>




const App = () => {
    const name = 'anna palautetta'
    const hyva = 'Hyvä'
    const neutraali = 'Neutraali'
    const huono = 'Huono'
    const valiotsikko = 'statistiikka' 
    
    
    const [ counter, setCounter ] = useState(0)
    const [ counter1, setCounter1 ] = useState(0)
    const [ counter2, setCounter2 ] = useState(0)
    
    const [allClicks, setAll] = useState(0)
    const [onkoKlikattu, setKlikkaukset] = useState(0)
   
    const setToHyvaValue = (value) => setCounter(value)
    const setToNeutraaliValue =(value) => setCounter1(value)
    const setToHuonoValue = (value) => setCounter2(value)

    const handleHyvaClick =() => {
        setToHyvaValue(counter + 1)
        setAll(allClicks + 1)
        setKlikkaukset(onkoKlikattu+1)
        
    }
    const handleNeutraaliClick = () => {
        setToNeutraaliValue(counter1 + 1)
        setAll(allClicks + 0)
        setKlikkaukset(onkoKlikattu+1)
    }
    const handleHuonoClick = () => {
        setToHuonoValue(counter2 + 1)
        setAll(allClicks - 1)
        setKlikkaukset(onkoKlikattu+1)
    }
    
    
  return (
    <div>
        
        <Header header={name} />
        <Button handleClick={handleHyvaClick} text='hyvä'/>
        <Button handleClick={handleNeutraaliClick} text='neutraali'/>
        <Button handleClick={handleHuonoClick} text='huono'/>

        < Valiotsikko vali={valiotsikko} />

        <Statistics allClicksLaskuri={onkoKlikattu} sisalto={hyva} laskuri={counter}
        sisalto1={neutraali} laskuri1={counter1}
        sisalto2={huono} laskuri2={counter2}
        totalNimi='Yhteensä' total={counter + counter1 + counter2}
        keskiarvo='Keskiarvo' ka={allClicks / (counter + counter1 + counter2)}
        positiivisia='Positiivisia' pos={counter / (counter+counter1+counter2) * 100}
                                        merkki=' %' />


{/*
        <Statistics sisalto={hyva} laskuri={counter}/>
        <Statistics sisalto={neutraali} laskuri={counter1}/>
        <Statistics sisalto={huono} laskuri={counter2}/>
        <Statistics totalNimi='Yhteensä' total={counter + counter1 + counter2}/>
        <Statistics keskiarvo='Keskiarvo' ka={allClicks / (counter + counter1 + counter2)}/>
        <Statistics positiivisia='Positiivisia' 
                                    pos={counter / (counter+counter1+counter2) * 100}
                                    merkki=' %' />
        
    
        <div><Content sisalto={hyva} laskuri={counter} /></div>
        <div><Content sisalto={neutraali} laskuri={counter1}/></div>
    <div><Content sisalto={huono} laskuri={counter2}/></div> 

        <Total yht='Yhteensä ' lasku={counter + counter1 + counter2}/>
        <Keskiarvo keskiarvo='Keskiarvo ' ka={allClicks / (counter + counter1 + counter2)} />
        <Positiivisia positiivisia='Positiivisia ' pos=
                                    {counter / (counter+counter1+counter2) * 100}
                                    merkki='  %' />  */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));




