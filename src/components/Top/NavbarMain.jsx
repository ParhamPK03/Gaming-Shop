import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/Main/Logo.png";

import { IoIosSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";

import { useLikedProducts } from "../../Context/LikedProductsContext";
import { CartContext } from "../../Context/CartContext";
import { AuthContext } from "../../Context/AuthContext";

const NavbarMain = () => {
  const [placeholder, setPlaceholder] = useState("دنبال چه میگردید ؟");
  const { cart } = useContext(CartContext);
  const totalCartItems = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const { likedProducts } = useLikedProducts();
  const [likedCount, setLikedCount] = useState(0);

  useEffect(() => {
    setLikedCount(likedProducts.length);
  }, [likedProducts]);

  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="bg-[#222222] h-[50px] md:h-[80px] lg:h-[100px]">
      <div className="flex items-center pt-3 md:pt-7 justify-between md:justify-evenly">
        {/* Right */}
        <div className="flex gap-0 md:gap-20">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                className="xl:w-[160px] xl:h-[36px] w-[120px] h-[30px] cursor-pointer hidden md:flex"
                src={Logo}
                alt="Logo"
              />
            </Link>
          </div>

          <div>
            <FaBars
              className="flex md:hidden text-base md:text-xl text-white mr-8 cursor-pointer"
              onClick={toggleSidebar}
            />

            <div
              className={`fixed top-0 right-0 w-64 bg-black/70 backdrop-blur-md text-white h-full p-5 z-50 transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              } md:hidden`}
            >
              <FaTimes
                className="text-xl text-white cursor-pointer mb-4 mr-52"
                onClick={toggleSidebar}
              />

              <ul className="space-y-2 text-white">
                <li>
                  <a className="cursor-default text-xl">خانه</a>
                  <ul className="mr-1 text-sm">
                    <li
                      className="hover:bg-red-600 rounded-full duration-300 p-2"
                      onClick={() => {
                        const target = document.getElementById("TopProduct");
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      <a className="cursor-pointer">دسته بندی های برتر</a>
                    </li>
                    <li
                      className="hover:bg-red-600 rounded-full duration-300 p-2"
                      onClick={() => {
                        const target =
                          document.getElementById("MostSellProducts");
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      <a className="cursor-pointer">محصولات پرفروش</a>
                    </li>
                    <li
                      className="hover:bg-red-600 rounded-full duration-300 p-2"
                      onClick={() => {
                        const target = document.getElementById("ProductOff");
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      <a className="cursor-pointer">محصولات تخفیف دار</a>
                    </li>
                    <li
                      className="hover:bg-red-600 rounded-full duration-300 p-2"
                      onClick={() => {
                        const target =
                          document.getElementById("PopularProducts");
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      <a className="cursor-pointer">محصولات محبوب</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="cursor-default text-lg">فروشگاه</a>
                  <ul className="mr-1 space-y-2 font-iran text-sm mt-2">
                    <li>
                      <Link
                        to="/joystick"
                        className="hover:bg-red-600 rounded-full duration-300 p-2"
                      >
                        کنترلر گیمینگ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/monitor"
                        className="hover:bg-red-600 rounded-full duration-300 p-2"
                      >
                        مانیتور گیمینگ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/mouse"
                        className="hover:bg-red-600 rounded-full duration-300 p-2"
                      >
                        ماوس گیمینگ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/keyboards"
                        className="hover:bg-red-600 rounded-full duration-300 p-2"
                      >
                        کیبورد گیمینگ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/headset"
                        className="hover:bg-red-600 rounded-full duration-300 p-2"
                      >
                        هدست گیمینگ
                      </Link>
                    </li>
                  </ul>
                </li>
                <br />
                <li>
                  <Link
                    to="/aboutUs"
                    className="hover:text-red-600 cursor-pointer mt-2 text-xl"
                  >
                    درباره ما
                  </Link>
                </li>
                <li
                  className="hover:text-red-600 cursor-pointer mt-4 text-xl"
                  onClick={() => {
                    const target = document.getElementById("Footer");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  تماس با ما
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Center */}
        <div>
          <div className="lg:flex hidden relative items-center">
            <input
              className="lg:w-[240px] lg:h-[36px] xl:w-[360px] xl:h-[44px] 2xl:w-[510px] 2xl:h-[44px] rounded-md placeholder:pr-6 placeholder:text-[#888888] outline-none placeholder:text-[14px] placeholder:font-iran"
              type="search"
              placeholder={placeholder}
              onFocus={() => setPlaceholder("")}
              onBlur={() => setPlaceholder("دنبال چه میگردید ؟")}
            />
            <IoIosSearch className="absolute left-3 text-2xl cursor-pointer hover:bg-red-600 duration-500 hover:text-white rounded-full" />
          </div>
        </div>

        {/* Left */}
        <div className="flex gap-2 text-2xl text-white">
          <Link
            to={isAuthenticated ? "/profile" : "/signing"}
            className="md:flex hidden text-[27px]"
          >
            <FiUser className="hover:text-red-600 duration-300" />
          </Link>
          <Link
            to="/liked"
            className="flex text-xl md:text-3xl md:text-[27px] ml-7 md:ml-0 relative"
          >
            <span className="bg-[#DE3431] pr-1.5 text-white rounded-full w-4 h-4 absolute text-xs font-iran -mt-1 mr-4">
              {likedCount}
            </span>
            <FaRegHeart className="hover:text-red-600 duration-300" />
          </Link>
          <Link
            to="/shoppingCart"
            className="flex text-xl md:text-3xl md:text-[27px] ml-7 md:ml-0"
          >
            <span className="bg-[#DE3431] pr-1.5 text-white rounded-full w-4 h-4 absolute text-xs font-iran -mt-1 mr-4">
              {totalCartItems}
            </span>
            <LuShoppingCart className="hover:text-red-600 duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarMain;
