// src/@types/tailwindcss.d.ts
declare module "tailwindcss/lib/util/flattenColorPalette" {
  import { Color } from "tailwindcss/types/config";
  function flattenColorPalette(colors: Color): Record<string, string>;
  export default flattenColorPalette;
}
