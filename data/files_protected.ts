import pdf1 from "../assets/arquivos/INSTRUÇÃO NORMATIVA No 73, DE 5 DE AGOSTO DE 2020.pdf";
interface File {
  key: number;
  name: string;
  data: string;
  size: string;
  link: string;
}

const files: File[] = [
  {
    key: 1,
    name: "INSTRUÇÃO NORMATIVA No 73, DE 5 DE AGOSTO DE 2020",
    size: "127kb",
    link: pdf1,
    data: "06/08/2020",
  },
];

export { files };
