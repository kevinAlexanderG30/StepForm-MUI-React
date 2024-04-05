import React, { FC } from "react";
import StepForm from "../step/step";
import Modal from '@mui/material/Modal';
import { Box, Card, CardContent, CardHeader, Divider } from "@mui/material";

interface Props {
    open: boolean;
    input: string; 
    age: string;
    setInput: (value: string) => void; 
    setAge: () => {};
    handleChangeSelected: () => {};
    handleClose: () => void;
}

const ModalStep: FC<Props> = ({handleChangeSelected, setAge, age, open, handleClose, input, setInput}) => {
    return (
        <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Card>
                  <CardHeader>
                    Hola
                  </CardHeader>
                  <Divider/> 
                  <CardContent>
                    <StepForm handleChangeSelected={handleChangeSelected} age={age} setAge={setAge} input={input} setInput={setInput} />
                  </CardContent>
                </Card>
              </Box>
            </Modal>
        </div>
    );
}

export default ModalStep;
