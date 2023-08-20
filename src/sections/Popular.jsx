import { products } from "../constants";
import { star } from "../assets/icons";
const Popular = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 padding">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-1 flex-col w-full max-sm:w-full"
          >
            <img
              src={product.imgURL}
              alt={product.name}
              width={280}
              height={280}
            />
            <div className="mt-8 flex justify-start gap-2.5">
              <img src={star} alt="star" width={24} height={24} />
              <p className="text-xl leading-normal font-montserrat text-slate-gray">
                ({product.rating})
              </p>
            </div>
            <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold">
              {product.name}
            </h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Popular;
