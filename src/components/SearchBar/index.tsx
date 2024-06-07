import Select from "react-select";
import { makes } from "../../constants";
import { OptionType } from "../../types";
import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Button = ({ designs }: { designs?: string }) => {
  return (
    <button className={`ml-3 x-10 ${designs}`}>
      <img src="/magnifying-glass.svg" width={40} height={40} alt="" />
    </button>
  );
};

const SearchBar = () => {
  const [params, setParams] = useSearchParams();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  // markalar dizisindeki elemanları react-select'in istediği veri formatına getir
  // her render sırasında tekrar hesaplamayı önlemek için useMemo kullan
  const options: OptionType[] = useMemo(
    () =>
      makes.map((make) => ({
        label: make,
        value: make,
      })),
    []
  );

  // form gönderilince seçilen marka ve modeli url'e parametre olarak ekle
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setParams({ make, model });
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
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
