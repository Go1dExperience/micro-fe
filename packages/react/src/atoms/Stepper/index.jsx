import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Box from "@mui/material/Box";
import { Step, StepLabel, Typography, Button } from "@mui/material";

const steps = ["Enter/Upload IP Details", "Confirm and Save"];
const StepperCustom = () => {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => setActiveStep(step => step + 1);
  const handleBack = () => setActiveStep(step => step - 1);
  return (
    <Box height={500} width={500} mt={10}>
      <Stepper activeStep={activeStep}>
        {steps.map(label => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>{" "}
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};
export default StepperCustom;
