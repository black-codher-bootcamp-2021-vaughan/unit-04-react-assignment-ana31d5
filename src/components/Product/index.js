import PropTypes from 'prop-types';

const Product = ({datas}) => {

    /*const {

    kind:kind,
    id:{trackId},
    name:trackName,
    thumbnail:artworkUrl100,
    price:trackPrice,
    addToBasket:addToBasket,
    removeFromBasket:removeFromBasket
    } = props.datas; */

return (

    <section>

      <img src={datas.artworkUrl100} alt="thumbnail"/>
 
          {/* <h2 id={trackId}>{trackId}</h2> */}
               <p>
                by {datas.artistName ? datas.artistName : "No Artist Listed"}
               </p>
               

               <div> £{datas.trackPrice} </div>
               <div> {datas.addToBasket} </div>
               <div> {datas.removeFromBasket}</div>
  
</section> 



);

};



Product.propTypes = {
    kind: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number.isRequired
   };
   Product.defaultProps = { kind: "No genre"};


export default Product;