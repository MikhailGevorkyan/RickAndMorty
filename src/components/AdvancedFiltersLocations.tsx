import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useState } from 'react';
import { locationTypes, locationDimensions } from './constants/constants';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Stack } from '@mui/material';

const AdvancedFiltersLocations = ({
  setTypesFilter,
  setDimensionsFilter,
  setFiltersChanged,
}: {
  setTypesFilter: (type: string) => void;
  setDimensionsFilter: (dimension: string) => void;
  setFiltersChanged: (changed: boolean) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [tempTypesFilter, setTempTypesFilter] = useState<string>('');
  const [tempDimensionsFilter, setTempDimensionsFilter] = useState<string>('');

  const handleTypesChange = (event: SelectChangeEvent) => {
    setTempTypesFilter(event.target.value);
  };

  const handleDimensionsChange = (event: SelectChangeEvent) => {
    setTempDimensionsFilter(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent<unknown>,
    reason?: string,
  ) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleApply = () => {
    setTypesFilter(tempTypesFilter);
    setDimensionsFilter(tempDimensionsFilter);
    setFiltersChanged(true);
    setOpen(false);
  };

  return (
    <Box>
      <Button
        onClick={handleClickOpen}
        sx={{
          display: { xs: 'flex', md: 'none' },
          m: '1rem auto 0',
          width: { xs: '17.5rem', sm: '19.5rem' },
          height: '3.5rem',
          backgroundColor: 'rgba(227, 242, 253, 1)',
          color: 'rgba(33, 150, 243, 1)',
        }}
        startIcon={<FilterListIcon />}
      >
        Advanced Filters
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <Stack direction={'row'} justifyContent={'space-between'} pr={'1.5rem'}>
          <DialogTitle>Filters</DialogTitle>
          <IconButton aria-label="delete" size="small" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <DialogContent>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              width: '17rem',
            }}
          >
            <FormControl sx={{ mb: 2, minWidth: 120 }}>
              <InputLabel id="type">Type</InputLabel>
              <Select
                value={tempTypesFilter}
                onChange={handleTypesChange}
                input={<OutlinedInput label="Type" />}
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                {locationTypes.map((type) => (
                  <MenuItem key={type.id} value={type.name}>
                    {type.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ mb: 2, minWidth: 120 }}>
              <InputLabel id="dimension">Dimension</InputLabel>
              <Select
                value={tempDimensionsFilter}
                onChange={handleDimensionsChange}
                input={<OutlinedInput label="Dimension" />}
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                {locationDimensions.map((dimension) => (
                  <MenuItem key={dimension.id} value={dimension.name}>
                    {dimension.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleApply}
            sx={{
              bgcolor: 'rgba(227, 242, 253, 1)',
              color: 'rgba(33, 150, 243, 1)',
              width: '17.5rem',
              m: '0 auto 1rem',
            }}
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdvancedFiltersLocations;
