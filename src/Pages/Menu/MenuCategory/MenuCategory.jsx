import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverTitle, img }) => {
  return (
    <section className="mx-10 mb-8">
      {coverTitle && <Cover img={img} coverTitle={coverTitle}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 mt-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to={`/order/${coverTitle}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-10 border-black text-black uppercase">
            Order Your Favorite Food
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MenuCategory;
