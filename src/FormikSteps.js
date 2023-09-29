import React, { useState } from 'react'
import { Button, Divider } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { motion } from "framer-motion";



const FormikSteps=({children,isSubmitting,validateField,errors,touched})=> {


    const childrenArr = React.Children.toArray(children);
    const [step,setStep]=useState(0);
    const [completed, setCompleted] = useState(false);
    // const name = childrenArr[1].props.Children[1].props.name;


    let fieldNames = [];

if (step === 0) {
  fieldNames = [
    childrenArr[step].props.children[2].props.children[0].props.name,
    childrenArr[step].props.children[2].props.children[1].props.name,
    childrenArr[step].props.children[2].props.children[2].props.name,
    childrenArr[step].props.children[2].props.children[3].props.name,
  ];
} else if(step === 1) {
  fieldNames = [childrenArr[step].props.children[2].props.name];
}else if(step === 2) {
    fieldNames = [childrenArr[step].props.children[2].props.name];
  }

const isError = fieldNames.map(name => errors[name]);
const isTouched = fieldNames.map(name => touched[name]);
const areAllFieldsValid = isError.every(error => !error) && isTouched.every(touch => touch);



function nextStep() {
    if (areAllFieldsValid) {
      setStep(step + 1);
    }
  }

    
    function isLastStep() {
      return step === childrenArr.length - 1;
    }

    // console.log(areAllFieldsValid);
    // console.log(errors[name]);
    // console.log(errors.name);

    // console.log(name);
    // console.log(isTouched);
    // console.log(childrenArr[1]);

    const customAnimations = [
      // Animation for step 0
      {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: {
          type: 'spring',
          stiffness: 260,
          damping: 20,
        },
      },
      // Animation for step 1
      {
        initial: { scale: 0 },
        animate: { rotate: -360, scale: 1 },
        transition: {
          type: 'spring',
          stiffness: 260,
          damping: 20,
        
        },
      },
      // Animation for step 2
      {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 0.5,
        },
      },
      // Animation for step 3
      {
        initial: { scale: 0 },
        animate: { rotate: -360, scale: 1 },
        transition: {
          type: 'spring',
          stiffness: 260,
          damping: 20,
        },
      },
      
      
    ];
    

  return (
    <>
    
    <motion.div className="container" {...customAnimations[step]}>
    {step < 4 && (
        <Stepper sx={{margin: '20px' }} alternativeLabel activeStep={step}>
            {childrenArr.map((child, index) => (
              <Step key={index} completed={step > index || completed}>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
        </Stepper>
          )
    }

  <Divider
  variant="middle"
  sx={{ display: step < 4 ? 'block' : 'none' }}
/>
    
  {childrenArr[step]}

  <Divider
   variant="middle"
  sx={{ display: step < 4 ? 'block' : 'none' }}
/>
<div style={{ marginTop: '20px' }}></div>

  {step > 0 && step < 4 ? (
  <Button 
  onClick={() => setStep(step - 1)} 
  disabled={isSubmitting}
  variant="outlined"
  disableElevation
  size="small"
  m={5}
  >
    Go Back
  </Button>
) : null}


    {step < childrenArr.length -2? (
        <Button 
        onClick={nextStep} 
        variant="contained"
        disableElevation
        size="small"
        sx={{marginLeft:35, }}
        
         >Next step</Button>) 
         : step === childrenArr.length - 2 ? (
        <Button 
        variant="contained" 
        type="submit" 
        disabled={isSubmitting} 
        onClick={nextStep}
        disableElevation
        size="small"
        sx={{marginLeft:35}}

        >
          Submit
        </Button>
      ) : null}
 
</motion.div>

    
    </>
  )
}
export default FormikSteps;
