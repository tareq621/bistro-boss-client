import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "../../../Pages/Home/Featured/Featured.css";

const Featured = () => {
  return (
    <section className="featured-item bg-fixed mb-10 text-white pt-8 my-20">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Check it Out"
      ></SectionTitle>
      <div className="md:flex justify-center bg-slate-500 bg-opacity-30 items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10">
          <h3 className="uppercase">March 20, 2023</h3>
          <h3 className="uppercase">WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            doloribus, expedita blanditiis asperiores accusantium numquam magni
            quaerat officia quasi deserunt aspernatur neque hic voluptates
            ratione ad libero quos explicabo tenetur?
          </p>
          <button className="btn btn-outline border-0 border-b-4 border-slate-200 text-white">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
