import headerCss from './Header.module.css';
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import logo  from './img_svg/Logo.svg';

const Header = () => {
  return (
    <div className='container'>
      <header className={headerCss.header}>
        <nav>
          <ul className={headerCss.nav_list}>
            <li><a href="#">Welcome</a></li>
            <li><a href="#">Our menu</a></li>
            <li><a href="#">Franchise</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div>
          <a href="index.html">
            <img src={logo} alt="Logo" width={100} height={100}/>
          </a>
        </div>
        <div>
          <ul className={headerCss.shop_list}>
            <li>
              <a href="#">
                <IconContext.Provider value={{ color: "white", size: 28 }}>
                  <FaCartShopping />
                </IconContext.Provider>
              </a>
            </li>
            <li>
              <a href="#">
                <IconContext.Provider value={{ color: "white", size: 28 }}>
                  <FaSearch />
                </IconContext.Provider>
              </a>
            </li>
            <li>
              <button type="button" className={headerCss.member_btn}>
                Become a member
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;