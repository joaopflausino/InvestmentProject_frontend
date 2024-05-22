import {  Container, Grid, Paper } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import CustomAccordion from "../../Components/Accordion";
import React from 'react'

interface Props  {}



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
            <Grid item >
              <Paper sx={{height: 240,backgroundColor: (theme) =>theme.palette.mode === 'dark' ? '#1A2027' : '#fff', }}>.
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