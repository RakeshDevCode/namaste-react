import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.341242905534777&lng=78.06842420250177&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json);
      // Safely find the correct card with the restaurants array
      const restaurants = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      // Extract the `info` object from each restaurant entry
      const formattedRestaurants = restaurants?.map((res) => res.info) || [];

      setListOfRestaurant(formattedRestaurants);
      setFilteredRestaurants(formattedRestaurants); // Show full list initially
      console.log(formattedRestaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // conditional rendering
  //  if (listOfRestaurants.length===0){
  //    return <Shimmer/>    }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1> your offline check internet</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              console.log(listOfRestaurants);
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                const nameMatch = res.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
                const cuisinesMatch = res?.cuisines?.some((cuisine) =>
                  cuisine.toLowerCase().includes(searchText.toLowerCase())
                );

                return nameMatch || cuisinesMatch;
              });
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4.4
            );
            setFilteredRestaurants(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurants) => (
          <Link key={restaurants.id} to={"/restaurants/" + restaurants.id}>
            {" "}
            <RestaurantCard resData={restaurants} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
