import "./ProductPage.css";
function Posts({ post, rating }) {
  const posts = post.map((post, index) => {
    return (
      <div key={index}>
        <div className="review__container">
          <div className="review_post"> 
                  <h1 className="productPage__right__rating">
                    <img
                      className="star"
                      src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/docomo/205/white-medium-star_2b50.png"
                      alt=""
                    /><span>{post.rate}</span>
                  </h1>
                  <h1 className="review__text">{post.text}</h1>
                  </div>
                  <div className="review__rate ">
                    <img
                      className="review__avatar"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8H1cJiq2N6D8u6lQMkP_-iPVu7d2XZbevhfUNM6obwXcUkeMDvJEsak3kTjvqAr67DDY&usqp=CAU"
                      alt=""
                    />{" "}
                    <h1>Pratyush | 7 Aug 2021 </h1>{" "}
                  </div>
                </div>
        </div>
      // </div>
    );
  });

  return <div>{posts}</div>
}

export default Posts;
