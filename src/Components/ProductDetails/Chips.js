import React from "react";
import { MDCChipSet } from "@material/chips";
import { Stack, Paper, Button } from "@mui/material";

// const chipset = new MDCChipSet(
//   document.querySelector(".mdc-evolution-chip-set")
// );

const Chips = () => {
  return (
    <>
      <span
        className="mdc-evolution-chip mdc-evolution-chip--disabled"
        role="row"
        id="c1"
      >
        <span
          className="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary mdc-evolution-chip--filter"
          role="gridcell"
        >
          <button
            className="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
            type="button"
            tabIndex="-1"
            
          >
            <span className="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"></span>
            <span className="mdc-evolution-chip__text-label">Chip label</span>
          </button>
        </span>
      </span>
    </>
  );
};

export default Chips;
