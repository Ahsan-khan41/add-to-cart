import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
} from "@mui/material";

// Relevance earch Component

export default function RelevanceSearch(props) {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.0 + ITEM_PADDING_TOP,
        width: 200,
      },
    },
  };

  const itemsArr = props.itemsArr; // array of items to be selected from

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: "25vw" }}>
        <InputLabel id="demo-multiple-chip-label">Sort by:</InputLabel>
        <Select
          sx={{
            maxHeight: "50px",
          }}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Sort by:" />}
          renderValue={(selected) => (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
                height: '38px',
                overFlow: "hidden"
              }}
            >
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {itemsArr.map((item) => (
            <MenuItem
              key={item}
              value={item}
              style={getStyles(item, personName, theme)}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}