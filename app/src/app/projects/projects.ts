export interface Project {
  id: number;
  name: string;
  description: string;
}

export const projects = [
  {
    id: 0,
    name: "Huffman Encoding",
    description: "Lossless data compression in C"
  },
  {
    id: 1,
    name: "Big Integer",
    description: "Big Integer arithmetic in C++"
  },
  {
    id: 3,
    name: "UCSC Clearance Badge Generator",
    description: "Scannable clearance badge generator"
  },
  {
    id: 4,
    name: "nano",
    description: "Haskell subset interpreter"
  },
  {
    id: 5,
    name: "website",
    description: "This website"
  }
];