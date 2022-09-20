import React, { useState, useEffect, useContext } from "react";
import './Home.css';
import { json, Link, useFetcher } from "react-router-dom";
import AddVehicleEntry from '../AddVehicleEntry/AddVehicleEntry';
import { AllData } from "../contextStore/AllData";



function Home() {
  const { setdata } = useContext(AllData)
  const { alldata } = useContext(AllData)
  const { settolllist } = useContext(AllData)
  const { tolllist } = useContext(AllData)
  const [filterword, setfilterword] = useState();
  const [searchterm, setsearchterm] = useState();






  useEffect(() => {
    fetch("http://localhost:3000/allData").then((res) => { return res.json() }).then((d) => { setdata(d) })
  }, [])

  useEffect(() => { fetch("http://localhost:3000/toll").then((res) => { return res.json() }).then((d) => { settolllist(d) }) }, [])




  return (
    <div>
      <h1 class="heading">
        Toll Management Application
        <hr />
      </h1>
      <div class="header">
        <div style={{ fontFamily: "Montserrat", fontSize: 20 }}>
          Toll entries / Vehicle entries
        </div>


        <div class="filter">
          Filter
          <span>
            <select onClick={(e) => { setfilterword(e.target.value) }}>

              {tolllist.map((d) => {
                return (
                  <option key={d.id} >{d.tollname}</option>
                )
              })}
            </select>
          </span>

        </div>



        <div>
          <input class="inputbar" type='search' placeholder='Search' onChange={(e) => { setsearchterm(e.target.value) }}></input>


        </div>



        <Link to="/AddVehicleEntry"><button class="button1">Add vehicle entry</button></Link>
        <Link to="/AddNewToll" ><button class="button2">Add new toll</button></Link>
        <Link to="/ViewAllToll"><button class="button3">View all tolls</button></Link>



      </div>
      <br /><br /><br />


      <table>

        <tbody>
          <tr class="tablerow">
            <th>
              VEHICLE TYPE
            </th>
            <th>
              VEHICLE NUMBER
            </th>
            <th>
              DATE/TIME
            </th>
            <th>
              TOLL NAME
            </th>
            <th>
              TARIFF
            </th>
          </tr>
          {alldata.filter((d) => {
            if ((searchterm == "" || searchterm == null || searchterm == undefined) && (filterword == undefined)) {
              return d
            } else if (d.vehiclenumber.toLowerCase().includes(searchterm.toLowerCase()) && filterword == undefined) {
              return d
            }
            else if (d.tollname.includes(filterword) && (searchterm == "" || searchterm == null || searchterm == undefined)) {
              return d
            }
            else if (d.tollname.includes(filterword) && d.vehiclenumber.toLowerCase().includes(searchterm.toLowerCase())) {
              return d
            }


          })
            .map((d) => {
              return (
                <tr key={d.id}>
                  <td>{d.vehicletype}</td>
                  <td>{d.vehiclenumber}</td>
                  <td>{d.DateTime}</td>
                  <td>{d.tollname}</td>
                  <td>{d.Tariff}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
      {console.log(filterword)}


    </div>


  )
}

export default Home