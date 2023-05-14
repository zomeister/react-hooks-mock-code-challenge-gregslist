import {useState} from "react";

function ListingCard ({id, description, image, location }) {
  const [favorite, setFavorite] = useState(false)
  function handleFavoriteClick () {
    setFavorite(true)
  }
  function handleUnfavoriteClick () {
    setFavorite(false)
  }
  function handleDeleteClick () {
    const baseUrl = "http://localhost:6001/listings/"
    fetch( `${baseUrl}${id}`, {
      method: "DELETE",
    })
    .then( r => r.json() )
    .then( () => console.log("DELETEd!") )
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0-5</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite 
        ? (<button
            className="emoji-button favorite active"
            onClick={handleUnfavoriteClick}>
            ★
          </button>)
        : (<button
            className="emoji-button favorite"
            onClick={handleFavoriteClick}>
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button
          className="emoji-button delete"
          onClick={handleDeleteClick}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
