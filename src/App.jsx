import {
  Nav,
  Hero,
  Popular,
  SuperQuality,
  Services,
  SpecialOffers,
  Customer,
  Subscribe,
  Footer,
} from "./sections";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <Popular />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="padding bg-pale-blue">
      <Customer />
    </section>
    <section className="padding">
      <Subscribe />
    </section>
    <section className="padding bg-black text-white padding-t padding-x pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
