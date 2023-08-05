import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} coverTitle="Our Menu"></Cover>
      {/* menu cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* offer menu item */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu item */}
      <MenuCategory
        items={desserts}
        img={dessertImg}
        coverTitle="Desert"
      ></MenuCategory>
      {/* pizza menu item */}
      <MenuCategory
        items={pizza}
        img={pizzaImg}
        coverTitle="PIZZA"
      ></MenuCategory>
      {/* salad menu items */}
      <MenuCategory
        items={salad}
        img={saladImg}
        coverTitle="Salad"
      ></MenuCategory>
      {/* soup menu items */}
      <MenuCategory items={soup} img={soupImg} coverTitle="Soup"></MenuCategory>
    </div>
  );
};

export default Menu;
