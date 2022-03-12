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
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

// Relevance earch Component

export function RelevanceSearch(props) {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
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
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">
          Sort by: Relevance
        </InputLabel>
        <Select
          sx={{
            maxHeight: "50px",
          }}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Sort" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
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
    </div>
  );
}

// ProductCard Component

export const ProductCard = (props) => {
  const ratingsStar = [1, 2, 3, 4, 5];

  return (
    <>
      <Card sx={{ maxWidth: 240, marginRight: '10px', marginBottom: '10px' }} elevation={0}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="245"
            width="245"
            image={props.imageUrl}
            alt="Adidas Shoes"
          />
          <CardContent>
            <Typography variant="body2" gutterBottom component="div">
              {props.colors} colors
            </Typography>
            <Divider />
            <Typography
              gutterBottom
              variant="caption"
              component="div"
              sx={{ fontWeight: "bold", fontSize: "13px" }}
            >
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {props.price}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {ratingsStar.map((item, index) => (
                <StarIcon sx={{ fontSize: 17 }} />
              ))}
              <Typography variant="body2" display="inline">
              ({props.reviews})
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
