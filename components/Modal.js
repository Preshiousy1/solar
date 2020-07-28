
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import Wizard from '../components/Wizard/Wizard';
import Load from './WizardComponents/Load';
import Location from './WizardComponents/Location';
import Duration from './WizardComponents/Duration';
import UserDetails from './WizardComponents/UserDetails';


const ModalForm = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  const toggle = () => setModal(!modal);
  const steps = ['User Details', 'Location', 'Load',  'Duration' ];

  const onWizardFinished = () => {
    alert("Wizard has finished");
  }

  const changeBackdrop = e => {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    setBackdrop(value);
  }

  const changeKeyboard = e => {
    setKeyboard(e.currentTarget.checked);
  }

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        {/* <FormGroup>
          <Label for="backdrop">Backdrop value</Label>{' '}
          <Input type="select" name="backdrop" id="backdrop" onChange={changeBackdrop}>
            <option value="true">true</option>
            <option value="false">false</option>
            <option value="static">"static"</option>
          </Input>
        </FormGroup>
        <FormGroup className="mx-2" check>
          <Label check>
            <Input type="checkbox" checked={keyboard} onChange={changeKeyboard} /> Keyboard
          </Label>
        </FormGroup> */}
        {' '}
        <Button size="sm" color="danger" className = "font-weight-bold" onClick={toggle}>{buttonLabel}</Button>
      </Form>
      <Modal isOpen={modal} toggle={toggle} centered={true} size="xl" className={className} backdrop={backdrop} keyboard={keyboard}>
        <ModalHeader toggle={toggle}>Form Wizard</ModalHeader>
        <ModalBody>
            <Wizard onWizardFinished={onWizardFinished} steps={steps}>
            <UserDetails/>
            <Location/>
            <Load/>    
            <Duration/>  
            </Wizard>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalForm;