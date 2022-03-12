import { SpaceBarRounded } from '@material-ui/icons';
import React from 'react';

function Header (props) {

    return (

        <header className="Row-block-centre">
            <span id="homelink">
                <a href="#/">

                    <h1> Home </h1>

                </a>

             </span>

             <span id="aboutlink">
                 <a href="/about">
                     <h1> About </h1>
                 </a>

             </span>

             <span id="basketlink" style = {{ color: "yellow"}}>
                 <a href="/basket">
                   <h1> Basket {props.itemCount}</h1>
                 </a>

             </span>

            
</header>

    )


};

export default Header ;



{/* <Link to="/" id="homelink"> Home </Link> |
<Link to="/about" id="aboutlink"> About </Link> |
<Link to="/basket" id="basketlink"> Basket ({props.itemCount})</Link> */}
