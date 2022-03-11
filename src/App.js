import React from 'react';
import ListOfProducts from './models/data.json';
import Product from './components/Product';
import ProductList  from './components/ProductList';
import { useState } from 'react';
import Basket from './components/Basket'
import BasketTotal from './components/BasketTotal';
import Header from './components/Header';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";


function App() {

 const datas = ListOfProducts;
 // eslint-disable-next-line
 const [input,setInput] = useState ("") ;

  console.log(datas);



  // const addToBasket = () => {


  //   <Basket/>

  // } 

  // const removeFromBasket = () => {
    
  //   <Basket/>

  // }


  const [itemCount, setItemCount] = React.useState(1);

  return (
    <div className="App">

      <div>

      <Header> </Header>

       <input id='search' name='search' type='search' placeholder='Search For Songs'  />
       
      </div>


      <div>

        <Basket>
          
        </Basket>



      </div>



        <ProductList color='orange'>


        <h1>My itunes </h1>
        

        </ProductList>
        {datas.map(dataItem => <Product datas={dataItem}/>)}

        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>

        <ButtonGroup>

          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}>

            <RemoveIcon fontSize="small" />

          </Button>


          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}>
          
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>

 
  )
} 

export default App;
