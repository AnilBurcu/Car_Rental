import { motion } from "framer-motion";
import { CarType } from "../../types";
import Button from "../Button";

interface CardProps {
  car: CarType;
}

const Card = ({ car }: CardProps) => {
  const translate = {
    rwd: "Arkadan İtişli",
    awd: "4 Çeker",
    fwd: "Önder Çekişli",
    "4wd": "4 Çeker",
  };
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      className="car-card mb-8 group "
    >
      {/* araba ismi */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>

      {/* arabanın fiyatı */}
      <div className="flex mt-6 text-[32px]">
        {Math.round(Math.random() * 7000) + 1500}
        <span className="text-[19px]">₺</span>
        <span className="self-end font-semibold text-[19px]">/gün</span>
      </div>
      {/* resim alanı */}
      <div className="relative w-full h-40 my-3">
        <img className="w-full h-full object-contain" src="./hero.png" alt="" />
      </div>
      {/* alt kısım */}
      <div className="w-full mt-2 flex">
        {/* ikonlar */}
        <div className=" group-hover:hidden flex w-full justify-between">
          <div className="flex-center flex-col">
            <img width={24} src="./steering-wheel.svg" alt="" />
            <p>{car.transmission === "a" ? "otomatik" : "manuel"}</p>
          </div>
          <div className="flex-center flex-col">
            <img width={24} src="./tire.svg" alt="" />
            <p>{translate[car.drive]}</p>
          </div>
          <div className="flex-center flex-col">
            <img width={24} src="./gas.svg" alt="" />
            <p>{car.fuel_type}</p>
          </div>
        </div>
        {/* buton */}
        <div className="group-hover:flex hidden w-full">
          <Button
            title="Daha Fazla"
            designs="w-full py-[16px]"
            icon="/right-arrow.svg"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
