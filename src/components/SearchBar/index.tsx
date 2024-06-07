import Select from "react-select";
import { makes } from "../../constants";
import { OptionType } from "../../types";
import { useMemo, useState } from "react";

const Button = ({ designs }: { designs?: string }) => {
  return (
    <button className={`ml-3 x-10 ${designs}`}>
      <img src="/magnifying-glass.svg" width={40} height={40} alt="" />
    </button>
  );
};

const SearchBar = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const options: OptionType[] = useMemo(
    () =>
      makes.map((make) => ({
        label: make,
        value: make,
      })),
    []
  );

  return (
    <form className="searchbar gap-3">
      <div className="searchbar__item">
        <Select
          onChange={(e) => e && setMake(e?.value)}
          className="w-full text-black"
          options={options}
        />
        <Button designs="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <img width={25} className="absolute ml-4" src="/model-icon.png" />
        <input
          onChange={(e) => e && setModel(e?.target.value)}
          className="searchbar__input rounded text-black"
          placeholder="örn: Civic"
          type="text"
        />
        <Button designs="sm:hidden" />
      </div>
      <Button designs="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
