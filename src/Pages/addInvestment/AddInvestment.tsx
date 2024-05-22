import { Container, Grid, Paper } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import React from 'react'

interface Props  {}



const AddInvestment = (props: Props) => {
  const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
  ];

  return (
    <Container>
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
    <Grid sx={{ flexGrow: 1 }} container pt={8}>
      <Grid item xs={12}>
        <Grid container direction="column" justifyContent="center" alignItems="stretch"  spacing={8}>
            <Grid item>
              <Paper sx={{height: 320,backgroundColor: (theme) =>theme.palette.mode === 'dark' ? '#1A2027' : '#fff', }}>.
              </Paper>
            </Grid>
            <Grid item >
              <Paper sx={{height: 240,backgroundColor: (theme) =>theme.palette.mode === 'dark' ? '#1A2027' : '#fff', }}>.
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
  )
}

export default AddInvestment