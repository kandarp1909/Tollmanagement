import React, { useEffect } from 'react'
import "./AddVehicleEntry.css";
import { useState, useContext } from 'react'
import { AllData } from '../contextStore/AllData';
import { useNavigate } from 'react-router-dom'

function AddVehicleEntry() {

  const navigate = useNavigate();
  const { tolllist } = useContext(AllData)
  const [formdata, setformdata] = useState();
  const [capturetollname, setcapturetollname] = useState();
  const [capturevehicletype, setcapturevehicletype] = useState();
  const [capturedtariff, setcapturedtariff] = useState();






  const predicttariff = () => {

    {
      tolllist.map((d) => {

        if (d.tollname == capturetollname) {

          let t = Object.keys(d)
          t.map((k) => {
            const enteredvehicletype = capturevehicletype.replaceAll('/', "").replace(' ', '')
            if (k == enteredvehicletype) {
              setcapturedtariff(d[k])
              setformdata({
                ...formdata,
                "Tariff": capturedtariff,
              })
              

            }

          })


        }
      })
    }

  }



  



  const settollnamef = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    })
    setcapturetollname(e.target.value)
  }



  const setvehicletypef = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    })

    setcapturevehicletype(e.target.value)
  }


  const date = new Date().toLocaleString();
  const setdate = () => {
    setformdata({
      ...formdata,
      DateTime: date,
    })

  };
  useEffect(() => { setdate() }, [])



  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    })
  }


  const createpost = async () => {

    await fetch("http://localhost:3000/allData", {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {
      navigate("/");
    })

  }


  return (


    <div class="addnewentry">

      <h1>Add new entry</h1>
      <br />

      <h4>Select toll name*</h4>



      <select onClick={settollnamef} name="tollname">
        {tolllist.map((d) => {
          return (
            <option key={d.id} >{d.tollname}</option>
          )
        })}


      </select>
      <h4>Select vehicle type*</h4>
      <select onClick={setvehicletypef} name="vehicletype">
        <option >car/jeep/van</option>
        <option >lcv</option>
        <option  >truck/bus</option>
        <option >heavy vehicle</option>
      </select>
      <h4>Vehicle Number*</h4>
      <input type="text" placeholder="Enter your vehicle number" name="vehiclenumber" onChange={handleChange}></input>
      <br />
      <h4>Tariff*</h4>
      <br />


      <br />

      <button onClick={predicttariff}>predict tariff</button>

      <button onClick={() => { createpost() }} >Submit</button>




      {/* {console.log(capturetollname, capturevehicletype,capturetariff)} */}




    </div>
  )
}

export default AddVehicleEntry