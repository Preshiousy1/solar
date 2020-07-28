import {useState} from 'react';
import Head from 'next/head'
import Nav from '../components/Nav/Nav'
import ManuDetails from '../components/ManuDetails/ManuDetails';
import Map from '../components/Map/Map';
import ModalForm from '../components/Modal';
import MainForm from '../components/MainForm/MainForm';
import './index.css';
import SideTable from '../components/MainForm/SideTable';
import { Button } from 'reactstrap';

export default function Home() {

  // constructor(props) {
  //   super(props);
  //   this.state = {date: new Date()};
  // }

  const [showGraph, setGraph] = useState(true);

  const changeChart = () => {
    if (showGraph){
      setGraph(false);
    }
    else {
      setGraph(true);
    }
      
  }

  return (
    <div >
      <Head>
        <title>Solar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <div className = "row mb-4 man-map"> 
        {/* <div className= "col-1"></div> */}
        <div className = "col-4">
          <ManuDetails/>
        </div>
          <div className= "col-3"></div>
        <div className = "col-5">
          <Map/>
        </div>

      </div>
      <main className="container-fluid">
        <div className = "m-4 container">
          <ModalForm buttonLabel = "Input Your Details" className = "modalform"/>
        </div>
        <hr/>
        <div className = "row mb-5">
          <div className = "col-6 ml-3">
           <MainForm />
          </div>
          <div className = "col-5 side-table">
            <div className = "mb-4">
              <button className = "btn btn-sm btn-success font-weight-bold" onClick = {changeChart}>{showGraph ? "Show table" : "Show Graph"}</button>
            </div>
            {showGraph ? <img src = "images/graph.jpg" alt = "graph" width = "500px"/> : <SideTable/>}
          </div>
        </div>
       
        
      </main>
    </div>
  )
}
