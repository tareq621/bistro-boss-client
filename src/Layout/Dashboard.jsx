import {
  FaHome,
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaShopify,
} from "react-icons/fa";
import { ImSpoonKnife, ImMenu } from "react-icons/im";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#D1A054]">
          {/* Sidebar content here */}
          <li>
            <NavLink to="/dashboard/userhome">
              <FaHome></FaHome>ADMIN HOME{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendarAlt></FaCalendarAlt>Reservation{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet></FaWallet>Payment History{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <FaShoppingCart></FaShoppingCart>My Cart
              <span className="badge badge-primary">+{cart?.length || 0}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/item">
              <ImSpoonKnife></ImSpoonKnife>Add Item{" "}
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>HOME{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <ImMenu></ImMenu>MENU{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShopify></FaShopify>ORDER{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
