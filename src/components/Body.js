import RestaurantCard, { withAvgRatingLabel } from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus"; 
import UserContext from "../utils/UserContext";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [visibleCount, setVisibleCount] = useState(12);

  const RestaurantCardAvgRating = withAvgRatingLabel(RestaurantCard);
  console.log(listOfRestaurants);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200 &&
        !isLoading
      ) {
        setPage((prevPage) => prevPage + 1); // Next page
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  const fetchData = async (pageNum = 1) => {
    setIsLoading(true);
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.341242905534777&lng=78.06842420250177&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      //console.log(json);
      // Safely find the correct card with the restaurants array
      const restaurants = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      // Extract the `info` object from each restaurant entry
      const formattedRestaurants = restaurants?.map((res) => res.info) || [];

      const allRestaurants = [...listOfRestaurants, ...formattedRestaurants];
      const uniqueRestaurantsMap = new Map();

      allRestaurants.forEach((restaurant) => {
        uniqueRestaurantsMap.set(restaurant.id, restaurant);
      });

      const uniqueRestaurants = Array.from(uniqueRestaurantsMap.values());

      setListOfRestaurant(uniqueRestaurants);
      setFilteredRestaurants(uniqueRestaurants); // Show full list initially
      setIsLoading(false);
      //  console.log(formattedRestaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // conditional rendering
  //  if (listOfRestaurants.length===0){
  //    return <Shimmer/>    }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1> your offline check internet</h1>;

  const handleSearch = (event) => {
    // Check if event is triggered by click or pressing Enter
    if (
      event.type === "click" ||
      (event.type === "keydown" && event.key === "Enter")
    ) {
      const filtered = listOfRestaurants.filter((res) => {
        const nameMatch = res.name
          .toLowerCase()
          .includes(searchText.toLowerCase());
        const cuisineMatch = res?.cuisines?.some((cuisine) =>
          cuisine.toLowerCase().includes(searchText.toLowerCase())
        );
        return nameMatch || cuisineMatch;
      });

      setFilteredRestaurants(filtered);
    }
  };

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex flex-wrap">
        <div className="search m-4 p-4 ">
          <input
            type="text "
            className="rounded-xs border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={handleSearch}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-green-100"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.avgRating > 4.4
              );
              setFilteredRestaurants(filteredList);
              //            console.log(listOfRestaurants);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName: </label>
          <input type="text"
            className=" border border-black rounded-xs"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap border-blue-100 border-s-black">
        {filteredRestaurants.slice(0, visibleCount).map((restaurants) => (
          <Link key={restaurants.id} to={"/restaurants/" + restaurants.id}>
            {restaurants.avgRating >= 4.5 ? (
              <RestaurantCardAvgRating resData={restaurants} />
            ) : (
              <RestaurantCard resData={restaurants} />
            )}
          </Link>
        ))}
      </div>

      {/* ✅ LOAD MORE BUTTON BELOW THE RESTAURANTS */}
      {visibleCount < filteredRestaurants.length && (
        <div className="text-center my-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + 10)}
            className="px-6 py-2 bg-blue-100 rounded-md hover:bg-blue-200 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Body;
