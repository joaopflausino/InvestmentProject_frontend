import {  Button, Container, Grid, Paper, Stack,Box, Select, MenuItem,Typography, SelectChangeEvent } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import CustomAccordion from "../../Components/AccordionComponent";
import React, { useState } from 'react'
import {yellow,purple} from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import CustomModal from '../../Components/CustomModal';

interface Props  {}

const theme = createTheme({
  palette: {
    primary: yellow,
    secondary: purple,
  },
});

const AddInvestment = (props: Props) => {
  const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
  ];

  const accordionItems = [
    {
      title: 'Accordion 1',
      rows: [
        { id: 1, name: 'Item 1', value: 'Value 1' },
        { id: 2, name: 'Item 2', value: 'Value 2' },
      ],
    },
    {
      title: 'Accordion 2',
      rows: [
        { id: 3, name: 'Item 3', value: 'Value 3' },
        { id: 4, name: 'Item 4', value: 'Value 4' },
      ],
    },
    {
      title: 'Accordion 3',
      rows: [
        { id: 5, name: 'Item 5', value: 'Value 5' },
        { id: 6, name: 'Item 6', value: 'Value 6' },
      ],
    },
  ];

  function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
        <Button onClick={handleOpen}>Open Child Modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id="child-modal-title">Text in a child modal</h2>
            <p id="child-modal-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <Button onClick={handleClose}>Close Child Modal</Button>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [selectedLayout, setSelectedLayout] = useState<string>('default');

  const handleSelectChange = (event: SelectChangeEvent) => {
    setSelectedLayout(event.target.value as string);
  };
  

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <Container>
    <Grid sx={{ flexGrow: 1 }} container pt={8}>
      <Grid item xs={12}>
        <Grid container direction="column" justifyContent="center" alignItems="stretch"  spacing={8}>
            <Grid item>
              <Paper sx={{height: 320,backgroundColor: (theme) =>theme.palette.mode === 'dark' ? '#1A2027' : '#fff', }}>.
                <PieChart
                  series={[
                    {
                      data,
                      highlightScope: { faded: 'global', highlighted: 'item' },
                      faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    },
                  ]}
                  height={200}
                />
              </Paper>
            </Grid>
            <Stack direction="row" justifyContent="right" spacing={8} sx={{marginTop: 4}}>
              <Button variant="contained" onClick={handleOpen} sx={{color: theme.palette.getContrastText(yellow[500]),
                backgroundColor: yellow[500],
                '&:hover': {
                  backgroundColor: yellow[700],
                }}}>
                Success
              </Button>
              <CustomModal
                open={open}
                onClose={() => setOpen(false)}/>
            </Stack>
            <Grid item >
              <Paper sx={{minHeight: 240,backgroundColor: (theme) =>theme.palette.mode === 'dark' ? '#1A2027' : '#fff', }}>.
                <CustomAccordion items={accordionItems} />
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
  )
}

export default AddInvestment