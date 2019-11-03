import React from 'react'

   const Customers = ({ customerData }) => {
     return (
       <div>
         <h1>This is Customers.js speaking</h1>
           <div>
           <p> {customerData["_embedded"].customers[1].name}</p>
           </div>
       </div>
     )
   };

   export default Customers
