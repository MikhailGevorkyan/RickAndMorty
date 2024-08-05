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
import { IconButton, Stack } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const AdvancedFilters = () => {
  const [open, setOpen] = React.useState(false);
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

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

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        mt: 2,
        justifyContent: "center",
      }}
    >
      <Button
        onClick={handleClickOpen}
        sx={{
          width: "19.5rem",
          height: "3.5rem",
          backgroundColor: "rgba(227, 242, 253, 1)",
          color: "rgba(33, 150, 243, 1)",
        }}
        variant="contained"
        startIcon={<FilterListIcon />}
      >
        Advanced Filters
      </Button>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <DialogTitle>Filters</DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ mr: "1rem" }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>

        <DialogContent sx={{ width: "19.5rem" }}>
          <Stack component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Species</InputLabel>
              <Select
                native
                value={speciesFilter}
                // onChange={}
                input={<OutlinedInput label="Age" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Gender</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={genderFilter}
                // onChange={}
                input={<OutlinedInput label="Age" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Status</InputLabel>
              <Select
                value={statusFilter}
                // onChange={}
                input={<OutlinedInput label="Age" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              backgroundColor: "rgba(227, 242, 253, 1)",
              color: "rgba(33, 150, 243, 1)",
              m: "0 auto 0.5rem",
              width: "100%",
            }}
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdvancedFilters;
