import { FaChevronRight, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaMapMarked, FaPhoneAlt, FaPinterest, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-16 bg-gray-800 text-white py-8">
      <div className="box-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="box">
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <Link to="/" className="flex flex-row text-md py-1 hover:pl-4 transition-all">
            <i className="mr-2 text-teal-500"><FaChevronRight /></i>Home
          </Link>
          <Link to="/about" className="flex flex-row text-md py-1 hover:pl-4 transition-all">
            <i className="mr-2 text-teal-500"><FaChevronRight /></i>About
          </Link>
          <Link to="/book" className="flex flex-row text-md py-1 hover:pl-4 transition-all">
            <i className="mr-2 text-teal-500"><FaChevronRight /></i>Trending
          </Link>
          <Link to="/blogs" className="flex flex-row text-md py-1 hover:pl-4 transition-all">
            <i className="mr-2 text-teal-500"><FaChevronRight /></i>Blogs
          </Link>
          <Link to="/blogs" className="flex flex-row text-md py-1 hover:pl-4 transition-all">
            <i className="mr-2 text-teal-500"><FaChevronRight /></i>Favourites
          </Link>
        </div>

        <div className="box">
          <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
          <Link to="tel:7676767676" className="flex flex-row text-md py-1 hover:pl-4 transition-all">
            <i className="mr-2 text-teal-500"><FaPhoneAlt /></i>7676767676
          </Link>
          <Link to="mailto:b@gmail.com" className="flex flex-row text-md py-1 hover:pl-4 transition-all">
            <i className="mr-2 text-teal-500"><FaEnvelope /></i>b@gmail.com
          </Link>
          <span className="flex flex-row text-md py-1 hover:pl-4 transition-all">
            <i className="mr-2 text-teal-500"><FaMapMarked /></i>Roorkee, India
          </span>
        </div>

        <div className="box">
          <h3 className="text-2xl font-semibold mb-4">Follow us</h3>
          <Link to="" className="flex flex-row text-md py-1 hover:pl-4 transition-all">
            <i className="mr-2 text-teal-500"><FaFacebookF /></i>Facebook
          </Link>
          <Link to="" className="flex flex-row text-md py-1 hover:pl-4 transition-all">
            <i className="mr-2 text-teal-500"><FaTwitter /></i>Twitter
          </Link>
          <Link to="" className="flex flex-row text-md py-1 hover:pl-4 transition-all">
            <i className="mr-2 text-teal-500"><FaInstagram /></i>Instagram
          </Link>
          <Link to="" className="flex flex-row text-md py-1 hover:pl-4 transition-all">
            <i className="mr-2 text-teal-500"><FaLinkedin /></i>Linkedin
          </Link>
          <Link to="" className="flex flex-row text-md py-1 hover:pl-4 transition-all">
            <i className="mr-2 text-teal-500"><FaPinterest /></i>Pinterest
          </Link>
        </div>

        <div className="box">
          <h3 className="text-2xl font-semibold mb-4">Sign Up for Newsletter</h3>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 mb-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="p-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="credit text-center mt-8 pt-4 border-t border-gray-600">
        <p className="text-xl">© 2024 MediMate | All Rights Reserved</p>
        <p className="text-xl">Developed by 
        <span className="text-teal-500">insane_22</span></p>
      </div>
    </div>
  );
};

export default Footer;
