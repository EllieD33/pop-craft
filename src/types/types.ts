import type { HTMLAttributes } from "astro/types";

export interface IconProps extends HTMLAttributes<"svg"> {
  size: number;
  colour: string;
}
