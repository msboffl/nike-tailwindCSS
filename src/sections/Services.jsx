import { services } from "../constants";
const Services = () => {
  return (
    <section className="max-container flex gap-9 flex-wrap">
      {services.map((service, index) => (
        <div key={index} className="flex-1 w-full sm:w-[350px] shadow-3xl px-10 py-16 rounded-[20px]">
          <div className="w-11 h-11 bg-coral-red rounded-full flex justify-center items-center">
            <img src={service.imgURL} alt="" width={24} height={24} />
          </div>
          <h2 className="mt-5 font-palanquin text-3xl font-bold leading-normal">{service.label}</h2>
          <p className="mt-3 font-montserrat text-lg text-slate-gray leading-normal">{service.subtext}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;
