
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const ManuDetails = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <div className = "row">
          <div className = "col-12">
                <h4 className="font-weight-bold display-inline">John Doe </h4>  <small>lives in kano</small>
          </div>
          <div className = "col-12">
                <span><strong>Email :</strong> p@preshious.com</span>
          </div>
          <div className = "col-12">
                <span><strong>Phone Number :</strong> p@preshious.com</span>
          </div>
      </div>
    </div>
  );
}

export default ManuDetails;