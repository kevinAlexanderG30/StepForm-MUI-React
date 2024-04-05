import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid, TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';

interface Props {
  input: string;
  age: string;
  setAge: () => {};
  setInput: (value: string) => void;
  handleChangeSelected: () => {};
}

const StepForm: FC<Props> = ({age, setInput, input, handleChangeSelected }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isInputFilled, setIsInputFilled] = useState(false); 
  const [isInputTouched, setIsInputTouched] = useState(false); 


  const steps = ["Paso 1", "Paso 2", "Paso 3", "Paso 4"];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setIsInputTouched(true);
    setIsInputFilled(e.target.value.trim() !== ""); 
  };

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <Grid
            container
            spacing={2}
            sx={{
              marginY: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} md={6}>
            <TextField
                required
                id="outlined-required"
                label="Required"
                value={input}
                onChange={handleInputChange}
                error={!isInputFilled && isInputTouched}
              />
            </Grid>
            <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChangeSelected}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
          </FormControl>
            </Grid>
          </Grid>
        );
     
      default:
        return "Paso desconocido";
    }
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper sx={{ width: "80%", margin: "0 auto" }} activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <div>
            <Typography>Todos los pasos completados</Typography>
            <Button onClick={handleBack}>Volver al Inicio</Button>
          </div>
        ) : (
          <Box>
            <Container maxWidth="sm">
              <Typography>{getStepContent(activeStep)}</Typography>
            </Container>
            <Grid item container sx={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Grid item xs={6}>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Atrás
                </Button>
              </Grid>
              <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={!isInputFilled} 
                >
                  {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
};

export default StepForm;
