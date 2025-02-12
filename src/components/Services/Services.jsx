import ServiceCard from "./ServiceCard";

function Services() {
  const Services = [
    {
      id: 1,
      name: "Service 1",
      description: "This is service 1",
      img: "sadasd",
    },
    {
      id: 2,
      name: "Service 1",
      description: "This is service 1",
      img: "sadasd",
    },
    {
      id: 3,
      name: "Service 1",
      description: "This is service 1",
      img: "sadasd",
    },
    {
      id: 4,
      name: "Service 1",
      description: "This is service 1",
      img: "sadasd",
    },
  ];
  return (
    <section className="bg-secondary-light w-full ">
      <div className="container pt-14 pb-10 mx-auto">
        <h2 className="text-4xl text-center font-bold">Nuestros Servicios</h2>
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center">
        {Services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      </div>
    </section>
  );
}

export default Services;
