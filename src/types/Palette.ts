type PaletteColor = {
  name: string;
  hex: string;
  r: number;
  g: number;
  b: number;
};

export const PALETTE: PaletteColor[] = [
  { name: 'white', hex: '#fffff', r: 255, g: 255, b: 255 },
  { name: 'rosewater', hex: '#f5e0dc', r: 245, g: 224, b: 220 },
  { name: 'flamingo', hex: '#f2cdcd', r: 242, g: 205, b: 205 },
  { name: 'pink', hex: '#f5c2e7', r: 245, g: 194, b: 231 },
  { name: 'mauve', hex: '#cba6f7', r: 203, g: 166, b: 247 },
  { name: 'red', hex: '#f38ba8', r: 243, g: 139, b: 168 },
  { name: 'maroon', hex: '#eba0ac', r: 235, g: 160, b: 172 },
  { name: 'peach', hex: '#fab387', r: 250, g: 179, b: 135 },
  { name: 'yellow', hex: '#f9e2af', r: 249, g: 226, b: 175 },
  { name: 'green', hex: '#a6e3a1', r: 166, g: 227, b: 161 },
  { name: 'teal', hex: '#81c8be', r: 129, g: 200, b: 190 },
  { name: 'sky', hex: '#99d1db', r: 153, g: 209, b: 219 },
  { name: 'sapphire', hex: '#85c1dc', r: 133, g: 193, b: 220 },
  { name: 'blue', hex: '#8aadf4', r: 138, g: 173, b: 244 },
  { name: 'lavender', hex: '#b7bdf8', r: 183, g: 189, b: 248 },
  { name: 'text', hex: '#c9d1d9', r: 201, g: 209, b: 217 },
  { name: 'subtext1', hex: '#8b949e', r: 139, g: 148, b: 158 },
  { name: 'subtext0', hex: '#8b949e', r: 139, g: 148, b: 158 },
  { name: 'overlay2', hex: '#3b4252', r: 59, g: 66, b: 82 },
  { name: 'overlay1', hex: '#414868', r: 65, g: 72, b: 104 },
  { name: 'overlay0', hex: '#1e1e2e', r: 30, g: 30, b: 46 },
  { name: 'surface2', hex: '#3b4252', r: 59, g: 66, b: 82 },
  { name: 'surface1', hex: '#414868', r: 65, g: 72, b: 104 },
  { name: 'surface0', hex: '#1e1e2e', r: 30, g: 30, b: 46 },
  { name: 'base', hex: '#1e1e2e', r: 30, g: 30, b: 46 },
  { name: 'mantle', hex: '#181825', r: 24, g: 24, b: 37 },
  { name: 'crust', hex: '#11111b', r: 17, g: 17, b: 27 },
];
