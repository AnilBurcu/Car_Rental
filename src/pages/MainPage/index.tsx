import { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import Hero from "../../components/Hero";
import SearchBar from "../../components/SearchBar";
import { fetchCars } from "../../components/utils/fetchCars";
import { CarType } from "../../types";
import Card from "../../components/Card";

const MainPage = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    // fetchCars metodunda return edilen değerin tipi tanımlı olduğu için then içerisindeki data'nın tipi otomatik olarak CarType dizisi geldi
    fetchCars()
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, []);

  return (
    <div className="mb-40">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width ">
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
        {/* 
        * Araba listesi
         1) Veri null ise > henüz api'dan cevap gelmemiştir
         2) isError true ise > api'dan veri alınırken hata olmuştur
         3) Veri boş dizi ise > Aranan kriterlere uygun veri bulunamamıştır
         4) Veri dolu ise > api'dan veriler gelmiştir
        */}
        {!cars ? (
          <div className="warn-container">
            <h2>Yükleniyor...</h2>
          </div>
        ) : isError ? (
          <div className="warn-container">
            <h2>Üzgünüz, verileri alırken bir hata oluştu...</h2>
          </div>
        ) : cars.length < 1 ? (
          <div className="warn-container">
            <h2>Aranılan kriterlere uygun sonuç bulunamadı...</h2>
          </div>
        ) : (
          <section className="home__cars-wrapper">
            <div>
              {cars.map((car, i) => (
                <div>
                  <Card key={i} car={car} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
