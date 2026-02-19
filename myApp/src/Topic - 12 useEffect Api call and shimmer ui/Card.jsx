const Card = (props) => {

  const { description, image, price, category, rating } = props

  description.length > 8 ? description.substring(0, 6) + "..." : description;

  return (
    <div className="card">
      <div className="profile">
        <img src={image[0]} alt="" />
      </div>
      <div className="info" >
        <h4>{category}</h4>
        <h4>{description}</h4>
        <h4>Price : ₹{price}.00</h4>
        <h5>Ratings : {rating}</h5>
      </div>
    </div>
  )
}

export default Card

/**
 *  <h4>Emp Id: {id}</h4>
        <h4>Username: {username}</h4>
        <h4>Email: {email}</h4>
      <h4>Mobile: {phone}</h4>
 */