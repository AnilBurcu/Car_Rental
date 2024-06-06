// buton bileşeninin aldığı propların tipi
export type ButtonProps = {
  title: string;
  designs?: string;
  type?: "submit" | "reset" | "button";
  icon?: string;
  disabled?: boolean;
};

// api'dan gelen araba verisi
export type CarType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "rwd" | "fwd" | "4wd" | "awd";
  fuel_type: "gas" | "diesel" | "electricity";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: "m" | "a";
  year: number;
};
