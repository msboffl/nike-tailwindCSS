import CustomerCard from "../components/CustomerCard";

const Customer = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin font-bold text-4xl text-center">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text mt-4 max-w-lg text-center m-auto">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex max-lg:flex-col gap-14 flex-1 items-center justify-evenly">
        <CustomerCard />
      </div>
    </section>
  );
};

export default Customer;
