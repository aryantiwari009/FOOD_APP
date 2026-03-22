const Cards = (props) => {

    const {cloudinaryImageId, name, cuisines, avgRating, areaName, costForTwo} = props.resData.info

  return (
    <div className="res-card">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="" />
        <h3>{name}</h3>  
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}⭐</h4>
        <h4>{areaName}</h4>  
        <h4>{costForTwo}</h4>   

    </div>
  )
}

export default Cards