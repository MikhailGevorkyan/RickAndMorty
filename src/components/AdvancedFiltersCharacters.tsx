import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import species from "./filterData/species";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Stack } from "@mui/material";

const AdvancedFiltersCharacters = ({
  setSpeciesFilter,
  setGenderFilter,
  setStatusFilter,
  setFiltersChanged,
}: {
  setSpeciesFilter: (species: string) => void;
  setGenderFilter: (gender: string) => void;
  setStatusFilter: (status: string) => void;
  setFiltersChanged: (changed: boolean) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [tempSpeciesFilter, setTempSpeciesFilter] = useState<string>("");
  const [tempGenderFilter, setTempGenderFilter] = useState<string>("");
  const [tempStatusFilter, setTempStatusFilter] = useState<string>("");

  const handleSpeciesChange = (event: SelectChangeEvent) => {
    setTempSpeciesFilter(event.target.value);
  };

  const handleGenderChange = (event: SelectChangeEvent) => {
    setTempGenderFilter(event.target.value);
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    setTempStatusFilter(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent<unknown>,
    reason?: string
  ) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const handleApply = () => {
    setSpeciesFilter(tempSpeciesFilter);
    setGenderFilter(tempGenderFilter);
    setStatusFilter(tempStatusFilter);
    setFiltersChanged(true);
    setOpen(false);
  };

  return (
    <Box>
      <Button
        onClick={handleClickOpen}
        sx={{
          display: { xs: "flex", md: "none" },
          m: "1rem auto 0",
          width: "19.5rem",
          height: "3.5rem",
          backgroundColor: "rgba(227, 242, 253, 1)",
          color: "rgba(33, 150, 243, 1)",
        }}
        startIcon={<FilterListIcon />}
      >
        Advanced Filters
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <Stack direction={"row"} justifyContent={"space-between"} pr={"1.5rem"}>
          <DialogTitle>Filters</DialogTitle>
          <IconButton aria-label="delete" size="small" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <DialogContent>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              width: "17rem",
            }}
          >
            <FormControl sx={{ mb: 2, minWidth: 120 }}>
              <InputLabel id="species">Species</InputLabel>
              <Select
                value={tempSpeciesFilter}
                onChange={handleSpeciesChange}
                input={<OutlinedInput label="Species" />}
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                {species.map((specie) => (
                  <MenuItem key={specie.id} value={specie.name}>
                    {specie.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ mb: 2, minWidth: 120 }}>
              <InputLabel id="gender">Gender</InputLabel>
              <Select
                value={tempGenderFilter}
                onChange={handleGenderChange}
                input={<OutlinedInput label="Gender" />}
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="genderless">Genderless</MenuItem>
                <MenuItem value="genderless">Unknown</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ mb: 2, minWidth: 120 }}>
              <InputLabel id="status">Status</InputLabel>
              <Select
                value={tempStatusFilter}
                onChange={handleStatusChange}
                input={<OutlinedInput label="Status" />}
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                <MenuItem value="alive">Alive</MenuItem>
                <MenuItem value="dead">Dead</MenuItem>
                <MenuItem value="unknown">Unknown</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleApply}
            sx={{
              bgcolor: "rgba(227, 242, 253, 1)",
              color: "rgba(33, 150, 243, 1)",
              width: "17.5rem",
              m: "0 auto 1rem",
            }}
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdvancedFiltersCharacters;
