import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import LocationModal from './LocationModal';
import Container from 'react-bootstrap/Container'
import "./Tab.css";

const MainTab = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className = "main-tab">
        <Container>
            <Row>
                <Col sm={3}>
                    <Nav tabs>
                        <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Solar Panels
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                        Battery
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            Location
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4'); }}
                        >
                            Time Calc
                        </NavLink>
                        </NavItem>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            {solarPanels()}
                        </TabPane>
                        <TabPane tabId="2">
                            {Battery()}
                        </TabPane>
                        <TabPane tabId="3">
                           { Location()}
                        </TabPane>
                        <TabPane tabId="4">
                            {timeCalc()}
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        </Container>
    </div>
  );

    function solarPanels(){
        return (
            <div>
                <div class="form-group">
                    <label for="s_voltage">Voltage</label>
                    <select  class="form-control" id="s_voltage">
                    <option>12v</option>
                    <option>24v</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="watts">Watts per Panel</label>
                    <input type = "number" value="0" class="form-control" id="watts"/>
                </div>
                <div class="form-group">
                    <label for="no_of_panels">Number of Panels</label>
                    <input type = "number" value="0" class="form-control"  id="no_of_panels"/>
                </div>
                <div class="form-group">
                    <label for="panel_loss">Panel Loss</label>
                    <select  class="form-control" id="panel_loss">
                        <option>10%</option>
                        <option>15%</option>
                        <option>20%</option>
                        <option>25%</option>
                        <option>30%</option>
                        <option>35%</option>
                        <option>40%</option>
                        <option>45%</option>
                        <option>50%</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="outdoor_temp" className = "display-block" >Out door temperature</label>
                    <input type ="number" value="25" class="form-control display-inline" id="outdoor_temp"/> <span> °C</span>
                </div>
                <div class="form-group">
                    <label for="temp_multiplier">Panel Temperature Multiplier</label>
                    <select  class="form-control " id="temp_multiplier">
                    <option>1.2</option>
                    <option>1.4</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="temp_co">Temperature Coefficient</label>
                    <select  class="form-control" id="temp_co">
                    <option>0.5</option>
                    <option>0.4</option>
                    <option>0.3</option>
                    <option>0.2</option>
                    </select>
                </div>
          
         </div>
        )
    }
    function Battery(){
    return (
        <div >
             <div class="form-group">
                    <label for="b_voltage">Voltage</label>
                    <select  class="form-control" id="b_voltage">
                        <option>2v</option>
                        <option>6v</option>
                        <option>12v</option>
                        <option>24v</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="no_of_batteries">Number of Batteries</label>
                    <input type = "number" value="0" class="form-control"  id="no_of_batteries"/>
                </div>
                <div class="form-group">
                    <label for="battery_size">Battery Size (Ah)</label>
                    <input type = "number" value="0" class="form-control" id="battery_size"/>
                </div>
                <div class="form-group">
                    <label for="panel_loss">Panel Loss</label>
                    <select  class="form-control" id="panel_loss">
                        <option>10%</option>
                        <option>20%</option>
                        <option>30%</option>
                        <option>40% - Chrome</option>
                        <option>50% - Gel&Sealed</option>
                        <option>60%</option>
                        <option>70%</option>
                        <option>80%</option>
                        <option>90% - Lithium</option>
                    </select>
                </div>
        </div>
    )
    }
    function Location(){
        return (
            <div>
                <div className = "mb-5">
                    <LocationModal buttonLabel = "Edit Location" className = "modalform"/>
                </div>
                <div>
                    <span className="left" >Location:</span>     <span className = "float-right"></span> <br/>
                    <span className="left">Latitude:</span>  <span className = "float-right">11.999025 </span> <br/>
                    <span className="left">Longitude: </span> <span className = "float-right">8.324890 </span> <br/>
                    <span className="left">Altitude: </span>  <span className = "float-right"></span> <br/>
                    <span className="left">Azimuth:</span>  <span className = "float-right"></span> <br/>               
                </div>
            </div>
        )
    }
    function timeCalc(){
        return (
            <div>
                <div>
                    <span className="left" >Solar Power:</span>     <span className = "float-right">Insufficient data W</span> <br/>
                    <span className="left">Battery Power:</span>  <span className = "float-right">11.999025 W</span> <br/>
                    <span className="left">Load Power: </span> <span className = "float-right">8.324890 W</span> <br/>
                    <span className="left">Fully Charged On : </span>  <span className = "float-right text-danger"> never</span> <br/>             
                </div>
                <hr/>
                <div>
                    <span className="left" >Installed Panel:</span>     <span className = "float-right">0 W</span> <br/>
                    <span className="left">Installed Battery Capacity:</span>  <span className = "float-right">11.999025 W</span> <br/>
                    <span className="left">Usable Battery Power (With 80% DOD): </span> <span className = "float-right">8.324890 W</span> <br/>              
                </div>
            </div>
        )
    }
}

export default MainTab;