import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/constant";
import { useState } from "react";

const Body = () => {

  const [restaurantsList, setRestaurantsList] = useState(restaurantList);
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const showTopRatedRestaurants = () => {
    const topRestaurantsList = restaurantsList.filter((i) => i.data.avgRating > 4);
    setRestaurantsList(topRestaurantsList);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value)
  }

  const handleSearch = () => {
    const searchResults = restaurantList.filter((i) => i.data.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if (searchResults.length === 0) {
      setRestaurantsList([]);
      setErrorMsg('No results found');
    }
    else {
      setRestaurantsList(searchResults);
    }
  }

  return (
    <div className="body">

      <div className="topRatedRestaurants">
        <button
          type="button"
          className="btn topRatedRestaurantsbtn"
          onClick={showTopRatedRestaurants}>
          Top Rated Restaurants
        </button>

        <div className="search">
          <input type="text" placeholder="Search.." name="search" value={searchTerm} onChange={handleChange} />
          <button type="submit" onClick={handleSearch}><i className="bi bi-search"></i></button>
        </div>
      </div>

      <div className="restaurant-container">
        {restaurantsList.length !== 0 ? restaurantsList?.map((restaurant) => (
          <RestaurantCard key={restaurant?.data?.id} {...restaurant?.data} />
        )) :
          <h4 className="errorMsg">{errorMsg}</h4>}
      </div>

    </div>
  );
};

export default Body;