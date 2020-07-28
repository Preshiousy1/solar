import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {Button} from 'reactstrap';
import './Wizard.module.css';

//import Bootstrap from 'bootstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function FormWizard(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = props.steps;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      if(prevActiveStep+1 === steps.length){
        props.onWizardFinished();
        return 0;
      }
      return prevActiveStep + 1
    });
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <div>
          <div className = "content">
            {props.children[activeStep]}
          </div>
          <div className="float-right">
              <Button
                color="primary"
                disabled={activeStep === 0}
                onClick={handleBack}
                className = "mr-4"
              >
                Back
              </Button>
              <Button color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
}