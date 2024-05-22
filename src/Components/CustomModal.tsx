import React, { useState } from 'react';
import { Modal, Select, MenuItem, Grid, Typography, SelectChangeEvent, Box } from '@mui/material';
import BasicDatePicker from './DateTimePickerViewRenderers';

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ open,onClose }) => {

    const [selectedLayout, setSelectedLayout] = useState<string>('default');
    
    const handleSelectChange = (event: SelectChangeEvent) => {
      setSelectedLayout(event.target.value as string);
    };

    const handleClose = () => {
        // Call onClose when the modal is closed
        onClose();
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
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description">       
    <Box sx={{ ...style, width: 400 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Select value={selectedLayout} onChange={handleSelectChange}>
            <MenuItem value="default">Default Layout</MenuItem>
            <MenuItem value="alternative">Alternative Layout</MenuItem>
            <MenuItem value="alternative">Alternative Layout</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          {selectedLayout === 'default' && (
            <><Typography>This is the default layout</Typography><BasicDatePicker /></>
          )}
          {selectedLayout === 'alternative' && (
            <Typography>This is the alternative layout</Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  </Modal>
  );
};

export default CustomModal;

