import "./searchBar.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { IoBedOutline, IoRestaurantSharp } from "react-icons/io5";
import { FaArrowsToDot } from "react-icons/fa6";
import { BsKey } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCategory } from "../features/searchCatergory/categorySlice";
import { setSearchData, setSearchText } from "../features/searchCatergory/searchData";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate()
  const categories = [
    {
      title: "Search All",
      icon: <BiHomeAlt2 />,
    },
    {
      title: "Hotels",
      icon: <IoBedOutline />,
    },
    {
      title: "Things To Do",
      icon: <FaArrowsToDot />,
    },
    {
      title: "Restaurants",
      icon: <IoRestaurantSharp />,
    },
  ];
  const activeCategory = useSelector((state) => state.category.category);
  const searchResult = useSelector((state) => state.searchData);

  console.log('activeCategory' + activeCategory )
  console.log(searchResult )
  const dispatch = useDispatch();
  const handleCategoryClick = (category) => {
    dispatch(setActiveCategory(category));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.searchText.value;
    dispatch(setSearchText(searchText))
    fetch(`http://localhost:5000/${activeCategory.toLowerCase() === "search all" ? "search-all" : activeCategory.toLowerCase()}/${searchText}`)
      .then((res) => res.json())
      .then((data) => dispatch(setSearchData(data)));
    console.log(searchText);
    e.target.reset();
    navigate("/searchResult")
  };

  return (
    <div className="w-full md:max-w-3xl mx-auto">
      <div>
        <div>
          <h1 className="text-center text-5xl font-bold hidden md:block">
            {activeCategory === "Hotels"
              ? "Stay somewhere great"
              : activeCategory === "Things To Do"
              ? "Do something fun"
              : activeCategory === "Restaurants"
              ? "Find places to eat"
              : activeCategory === "Vacation Rentals"
              ? "Explore places to rent"
              : "Where to?"}
          </h1>
          <ul className="flex overflow-x-auto w-full justify-center mx-auto my-5">
            {categories.map((category, i) => (
              <li
                key={i}
                className={`searchFilter mx-2 ${
                  activeCategory === category.title ? "searchActive" : ""
                }`}
                onClick={() => {
                  handleCategoryClick(category.title);
                }}
              >
                <span className="mr-1 text-xl">{category.icon}</span>
                {category.title}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSearch}>
          <div className="searchField rounded-xl md:rounded-full w-[90%] mx-auto md:w-full p-2 relative">
            <button className="absolute top-5">
              <AiOutlineSearch className="text-xl" />
            </button>
            <div>
              <input
                type="text"
                name="searchText"
                placeholder={
                  activeCategory === "Hotels"
                    ? "Hotel name or destination"
                    : activeCategory === "Things To Do"
                    ? "Attraction, activity or destination"
                    : activeCategory === "Restaurants"
                    ? "Restaurant or Destination"
                    : activeCategory === "Vacation Rentals"
                    ? "Destination"
                    : "Place to go, things to do, hotels..."
                }
                className="py-2 pl-7 block w-full md:rounded-full border-b-2 md:border-none focus:outline-0 text-md"
              />
            </div>
            <div className="w-full md:w-[120px] md:absolute md:bottom-2 md:right-2">
              <button className="bg-[#19a0c9] text-white  hover:bg-blue-600 transition duration-300 px-4 py-2 text-lg font-semibold rounded-full w-full mt-5">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
