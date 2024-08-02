import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchFilterProps {
  placeholder: string;
  xsWidth: string;
  mdWidth: string;
  setSearch: (value: string) => void;
}

const SearchFilter = ({
  placeholder,
  xsWidth,
  mdWidth,
  setSearch,
}: SearchFilterProps) => {
  const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <TextField
      placeholder={placeholder}
      sx={{
        width: { xs: xsWidth, md: mdWidth },
      }}
      onChange={searchHandle}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchFilter;
