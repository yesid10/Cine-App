import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const stylesInputs = {
    bgcolor: "white",
    minWidth: "200px",
   
}

export default function BasicSelect() {
    const [Ubicacion, setUbication] = useState('');
    const [Cines, setCines] = useState('');
    const [Fechas, setFechas] = useState('');

    const handleChangeUbication = (event) => {
        setUbication(event.target.value);
    };
    const handleChangeCines = (event) => {
        setCines(event.target.value);
    };
    const handleChangeFechas = (event) => {
        setFechas(event.target.value);
    };
    return (
        <Box sx={{ minWidth: 120, display: "flex", gap: "10px" }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Ubicación</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Ubicacion}
                    label="Ubicación"
                    onChange={handleChangeUbication}
                    sx={stylesInputs}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Cines Cercanos</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Cines}
                    label="Cines"
                    onChange={handleChangeCines}
                    sx={stylesInputs}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label"></InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Basic date picker" />
                    </DemoContainer>
                </LocalizationProvider> */}
                <InputLabel id="demo-simple-select-label">Fechas</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Fechas}
                    label="Fechas"
                    onChange={handleChangeFechas}
                    sx={stylesInputs}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}