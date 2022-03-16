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
    <div>
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
    </div>
  );
}

// ProductCard Component

export const ProductCard = (props) => {
  const ratingsStar = [1, 2, 3, 4, 5];

  return (
    <>
      <Card
        sx={{ marginRight: "1vw", marginBottom: "15px", minWidth: "10vw", minHeight: "35vh" }}
        elevation={0}
        onClick={props.onClick}
      >
        <CardActionArea
          sx={{ maxWidth: "200vw" }}
        >
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
                <StarIcon key={index} sx={{ fontSize: 17 }} />
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
