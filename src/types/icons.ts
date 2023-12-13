import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";

export type Icon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
};