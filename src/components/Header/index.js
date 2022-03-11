

function Header (props) {

    return (

        <header className="Row-block-centre">
            <div id="homelink">
                <a href="#/">
                    <h1> Home </h1>


                </a>

             </div>

             <div id="aboutlink">
                 <a href="/about">
                     <h1> About </h1>
                 </a>

             </div>

             <div id="basketlink">
                 <a href="/basket">
                   <h1> Basket {props.itemCount}</h1>
                 </a>


             </div>

            
</header>

    )


};

export default Header ;



{/* <Link to="/" id="homelink"> Home </Link> |
<Link to="/about" id="aboutlink"> About </Link> |
<Link to="/basket" id="basketlink"> Basket ({props.itemCount})</Link> */}
