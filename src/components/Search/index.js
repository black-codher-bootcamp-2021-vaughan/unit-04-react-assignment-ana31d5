import React from 'react';
function Search () {

    return (

        <form id="searchAPI">

        <div>

          <label>UserName</label>
   
      <input id='term' name='search' type='text' placeholder='Enter Your Username' onChange={(e) => previewSearch(e)}/>

      <button> Submit </button>

       </div>

       
       <div>

          <label>Password</label>

      <input id='search' name='search' type='text' placeholder='Enter Your Password' onChange={(e) => previewSearch(e)}/>

         </div>
      
      </form>



    )





}

export default Search;