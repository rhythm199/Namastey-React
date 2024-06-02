const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating, costForTwo, deliveryTime }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo"
        alt="res-logo"
        src={cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h5 className="card-tags">{cuisines.join(", ")}</h5>
      <h5 className="card-rating">{avgRating} stars</h5>
      <h6>{costForTwo / 100} FOR TWO</h6>
      <h6>{deliveryTime} minutes</h6>
    </div>
  );
};

export default RestaurantCard;