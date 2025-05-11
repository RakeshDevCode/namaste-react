import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useEffect, useState} from 'react';

const Body = () => { 
    let [listOfRestaurants, setListOfRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async ()=>{
        try {
        const info = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.341242905534777&lng=78.06842420250177&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json=await info.json();
        console.log(json);
        // Safely find the correct card with the restaurants array
        const restaurants = json?.data?.cards?.find(
            (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // Extract the `info` object from each restaurant entry
        const formattedRestaurants = restaurants?.map((res) => res.info) || [];

        setListOfRestaurant(formattedRestaurants);
        console.log(formattedRestaurants);
        } catch (error) {
        console.error("Error fetching data:", error);
    }
   };

    return (
        <div className="body">
            <div className="filter">
                <button 
                  className="filter-btn" 
                  onClick ={
                    ()=>{
                        const filteredList=listOfRestaurants.filter(
                            (res)=> res.avgRating > 4.5
                        );  
                        setListOfRestaurant(filteredList);                  
                    console.log(listOfRestaurants)
                }} >Top Rated Restaurant</button>
               
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurants) => (
                    <RestaurantCard key={restaurants.id} resData={restaurants} />
                ))}
            </div>
        </div>
    )
}

export default Body;
