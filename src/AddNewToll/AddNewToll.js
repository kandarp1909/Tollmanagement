import React from 'react';
import "./AddNewToll.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'



function AddNewToll() {
   const navigate = useNavigate();

   const [formdata, setformdata] = useState();
   const handleChange = (e) => {
      setformdata({
         ...formdata,
         [e.target.name]: e.target.value,
      })
   }


   const createpost = async (e) => {




      await fetch("http://localhost:3000/toll", {
         method: 'POST',
         body: JSON.stringify(formdata),
         headers: { 'Content-Type': 'application/json' }
      }).then(() => {
         navigate("/");
      })

   }


   return (
      <div class="addnewtoll">
         <h1>Add New Toll</h1>
         <div style={{fontSize:20}}>
            Toll Name*
            <br />
            <br />
            <form>
               <input type="text" placeholder="Enter toll name" name="tollname" onChange={handleChange} />
            </form>
            <br />
            <br />
         </div>

         Vehicle fare details*
         <br />
         <br />

         <div class="entry">
            Car/jeep/van

            <form>
               <input type="number" placeholder="Single journey" name="carjeepvan" onChange={handleChange} />
               <input type="number" placeholder="Return journey" />
            </form>
         </div>

         <br />

         <div class="entry">
            LCV

            <form>
               <input type="number" placeholder="Single journey" name="lcv" onChange={handleChange} />
               <input type="number" placeholder="Return journey" />
            </form>

         </div>
         <br />
         <div class="entry">
            Truck/Bus

            <form>
               <input type="number" placeholder="Single journey" name="truckbus" onChange={handleChange} />
               <input type="number" placeholder="Return journey" />
            </form>

         </div>
         <br />
         <div class="entry">
            Heavy vehicle

            <form>
               <input type="number" placeholder="Single journey" name="heavyvehicle" onChange={handleChange} />
               <input type="number" placeholder="Return journey" />
            </form>

         </div>
         <br />
         <button onClick={(e) => { createpost() }}>Submit</button>
         <Link to='/'><button>Back</button></Link>

      </div>
   )
}

export default AddNewToll