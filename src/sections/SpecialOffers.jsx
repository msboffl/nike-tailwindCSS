import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="max-container flex items-center gap-10 max-xl:flex-col-reverse">
      <div className="flex-1">
        <img src={offer} alt="Special Offer" />
      </div>
      <div className="flex-1 flex flex-col">
        <h2 className="font-palanquin font-bold text-4xl capitalize lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-5">
          <Button label="Learn More" iconURL={arrowRight} />
          <Button label="Shop Now" iconURL={arrowRight} />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
