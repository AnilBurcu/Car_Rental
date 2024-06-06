import { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import Hero from "../../components/Hero";
import SearchBar from "../../components/SearchBar";
import { fetchCars } from "../../components/utils/fetchCars";
import { CarType } from "../../types";

const MainPage = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    // fetchCars metodunda return edilen değerin tipi tanımlı olduğu için then içerisindeki data'nın tipi otomatik olarak CarType dizisi geldi
    fetchCars().then((data) => setCars(data));
  }, []);

  return (
    <div className="mb-40">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Katoloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <Filter />
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
