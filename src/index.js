
      import  { useState,useEffect} from 'react';
      import React from 'react';
      import ReactDOM from 'react-dom';
      import './index.css';
      import { render } from "@testing-library/react";  

        function App(){
          let [count,setCount] = useState(0)
          const [countries,setcountries ] = useState("")
          const [inf,setInfo] = useState(null)
          
          useEffect(()=>{
           async function request(){
              let response = await fetch(`https://restcountries.eu/rest/v2/name/${countries}`)
              let json = await response.json()
              let data = json[0]
              setInfo(data)
            }
            if(countries.length>=3){
             request()
            }
          },[countries])
          function setCountries(e){
            setcountries(e.target.value)
          }
          return(
            <>
          <div className="container">
            <h2>Seja bem vindo</h2>
            <div className="row">
            <input onChange={(e)=> setCountries(e)} placeholder="Digite o nome do país" className="col s6" ></input>
            </div>   
            </div>

        <div className="container">
            <div className="row">
              <div className="col l4">
                <div className="card">
                  <div className="card-image">
          {inf ? <> <img src={inf.flag}></img>  <span className="card-title black-text">{inf.name}</span>  </>: null}
                  </div>
                </div>
            </div>

          {inf ? <>  <div style={{width:"100%"}} className="container left  "> 
                  <div className="row">
                    <div className="col 6"> <i  className="material-icons ">people</i> </div> 
                    < div className="col">População: {inf.population}</div> 
                      </div>
                      <div className="row">
                    <div className="col 6"> <i className="material-icons ">public</i> </div> 
                    < div className="col">Região: {inf.region}</div> 
                      </div>    
                      <div className="row">
          <div className="col 6"> <i className="material-icons ">terrain </i> </div>
                      <div className="row" >{inf.numericCode}</div> 
                      </div>
                        
                  </div>       
                </> : null}
              </div>
        </div>   
     </>
          ) 
        } 
        ReactDOM.render(
          <React.StrictMode>    
           <App/>
          </React.StrictMode>,
          document.getElementById('root')
        );

