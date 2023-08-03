import backgroundImage from "../../../assets/home/chef-service.jpg";
const BistroBoss = () => {
  return (
    <section
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        width: "auto",
        height: "auto",
        backgroundPosition: "cover",
        backgroundSize: "auto",
      }}
      className="p-24 mt-20 mb-10 mx-10"
    >
      <div className="bg-white py-20 text-black text-center">
        <h3 className="text-4xl pb-3">Bistro Boss</h3>
        <p className="mx-44">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </section>
  );
};

export default BistroBoss;
