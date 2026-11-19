import { useState } from "react";
import Button from "@mui/material/Button";
import { ButtonList } from "../../../ui/ButtonList";
import { useWizzard } from "./Wizzard";

const shiftCountPresets = [
  { count: 1, label: "One Shift" },
  { count: 2, label: "2 Shifts" },
  { count: 3, label: "3 Shifts" },
  { count: 4, label: "4 Shifts" },
];

/** Work in progress, like the rest of the wizard: this step has no follow-up step yet. */
export function ChooseShifts() {
  const wizzard = useWizzard();
  const [shiftCount, setShiftCount] = useState(wizzard.selectedShiftCount);

  const setShiftCountTo = (count: number) => {
    wizzard.setShiftCount(count);
    setShiftCount(count);
  };

  const nextStep = () => {};

  return (
    <div>
      <h2>Assign Shifts</h2>

      <ButtonList>
        <Button variant="contained" onClick={nextStep}>
          Next
        </Button>
        {shiftCountPresets.map((preset) => (
          <Button key={preset.count} variant="contained" onClick={() => setShiftCountTo(preset.count)}>
            {preset.label}
          </Button>
        ))}
      </ButtonList>

      <div>
        <h2>Currently {shiftCount} Shifts</h2>
        {Array.from({ length: shiftCount }, (_unused, index) => (
          <div className="shift" key={index}>
            <h3 id={`shift_title_${index + 1}`}>{index + 1}</h3>
          </div>
        ))}
      </div>

      <Button variant="contained" onClick={nextStep}>
        Next
      </Button>
    </div>
  );
}
