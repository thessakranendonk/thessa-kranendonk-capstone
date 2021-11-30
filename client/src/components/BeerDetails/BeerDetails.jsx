import "./BeerDetails.scss";

const BeerDetails = ({beer}) => {
  console.log({beer});
  return (
    <div className="beer-details">
     <img className="beer-details__image" src={beer.image} alt={beer.beerName}/>
      <h4 className="beer-details__beer-name">{beer.beerName}</h4>
      <p className="beer-details__brewery-info">by {beer.breweryName}, {beer.cityState}, {beer.country}</p>
      <p className="beer-details__beer-type">{beer.beerType}</p>

      <div className="beer-details__wrapper">
          <div className="beer-details__description-wrap">
              <p className="beer-details__description">{beer.description}</p>
          </div>
          <div className="beer-details__details-wrap">
            <p className="beer-details__category">Category{beer.beerType}</p>
            <p className="beer-details__season">Season{beer.season}</p>
            <p className="beer-details__flavor">Flavor{beer.flavor}</p>
            <p className="beer-details__abv">ABV{beer.ABV}</p>
            <p className="beer-details__rating">Rating{beer.rating}</p>

          </div>

      </div>
  
    </div>
  );
};

export default BeerDetails;
