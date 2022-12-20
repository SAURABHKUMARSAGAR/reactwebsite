import React from 'react';

const Footers =()=>{
   const year = new Date().getFullYear(); 
   return(
    <>
      <footer className='w-100 bg-light text-center'>
        <p>Copyright © {year} All Rights Reserved | Terms and Conditions</p>
      </footer>
    </>
   )
}
export default Footers;