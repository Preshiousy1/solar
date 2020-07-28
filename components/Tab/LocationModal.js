
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';



const LocationModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  const toggle = () => setModal(!modal);
  const steps = ['User Details', 'Location', 'Load',  'Duration' ];

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
        <Button color="success text-sm btn-sm" onClick={toggle}>{buttonLabel}</Button>
      </Form>
      <Modal isOpen={modal} toggle={toggle} centered={true} size="l" className={className} backdrop={backdrop} keyboard={keyboard}>
        <ModalHeader toggle={toggle}>Edit Location</ModalHeader>
        <ModalBody>

        </ModalBody>
      </Modal>
    </div>
  );
}

export default LocationModal;