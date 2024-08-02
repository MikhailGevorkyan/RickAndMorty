import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchFilterProps {
  placeholder: string;
  xsWidth: string;
  mdWidth: string;
}

const SearchFilter = ({ placeholder, xsWidth, mdWidth }: SearchFilterProps) => (
  <TextField
    placeholder={placeholder}
    sx={{
      width: { xs: xsWidth, md: mdWidth },
    }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
  />
);

export default SearchFilter;
