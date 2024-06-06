import { motion } from "framer-motion";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="pt-36 padding-x flex-1 max-h-[920px]">
        <h1 className="hero__title">Özgürlüğü Hisset Yolculuğa Başla</h1>
        <p className="hero__subtitle">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
          kiralama deneyimini Altın Seçenekleri ile taçlandırarak her anını özel
          kılabilirsin.
        </p>
        <Button title="Arabaları keşfet" designs="mt-10" />
      </div>
      <div className="flex justify-center">
        <motion.img
          initial={{
            translateX: 200,
            scale: 0.6,
          }}
          animate={{
            translateX: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          src="/hero.png"
          alt="bmw"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
