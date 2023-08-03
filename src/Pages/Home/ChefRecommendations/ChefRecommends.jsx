import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ChefRecommend from "./ChefRecommend";
import caeserSalad from "../../../assets/home/slide1.jpg";

const ChefRecommends = () => {
  const chefChoise = [
    {
      _id: 1,
      name: "Caeser Salad",
      desc: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      image: caeserSalad,
    },
    {
      _id: 2,
      name: "Caeser Salad",
      desc: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      image: caeserSalad,
    },
    {
      _id: 2,
      name: "Caeser Salad",
      desc: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      image: caeserSalad,
    },
  ];
  return (
    <section className="mb-8 mx-10">
      <SectionTitle
        heading="CHEF RECOMMENDS"
        subHeading="Should Try"
      ></SectionTitle>
      <div className="grid grid-cols-3 gap-7">
        {chefChoise.map((chef) => (
          <ChefRecommend key={chef._id} chef={chef}></ChefRecommend>
        ))}
      </div>
    </section>
  );
};

export default ChefRecommends;
