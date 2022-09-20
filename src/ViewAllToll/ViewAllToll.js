import React from 'react'
import "./ViewAllToll.css";
import { Link } from 'react-router-dom';
import { AllData } from '../contextStore/AllData';
import { useContext, useState, useEffect } from 'react'


function ViewAllToll() {

    const { tolllist } = useContext(AllData)
    const { alldata } = useContext(AllData)
    const [searchdata, setsearchdata] = useState()







    function Deletepost(id) {
        fetch(`http://localhost:3000/toll/${id}`, {
            method: "DELETE"
        }).then(() => { alert("toll deleted succesfully") })
    }


    return (
        <div>
            <h1 class="tollpage">
                Toll Management Application
                <hr />
            </h1>

            <div class="tollpageheader">
                <div style={{ fontFamily: "Montserrat", fontSize: 20 }}>
                    Tollgate List
                </div>

                <div>
                    <input class="inputbar" type='search' placeholder='Search' onChange={(e) => { setsearchdata(e.target.value) }}></input>


                </div>



                <Link to="/AddVehicleEntry"><button class="button1">Add vehicle entry</button></Link>
                <Link to="/AddNewToll" ><button class="button2">Add new toll</button></Link>
                <Link to="/"><button class="button3">Back to vehicle logs</button></Link>



            </div>
            <br />
            <br />


            <table>

                <tbody>
                    <tr >
                        <th>
                            TOLL NAME
                        </th>
                        <th>
                            Car/Jeep/Van
                        </th>
                        <th>
                            LCV
                        </th>
                        <th>
                            Truck/Bus
                        </th>
                        <th>
                            Heavy vehicle
                        </th>
                    </tr>
                    {tolllist.filter((d) => {
                        if (searchdata == "" || searchdata == null || searchdata == undefined) {
                            return d
                        } else if (d.tollname.toLowerCase().includes(searchdata.toLowerCase())) {
                            return d
                        }
                    })
                        .map((d) => {
                            return (
                                <tr key={d.id}>
                                    <td>{d.tollname}</td>
                                    <td>{d.carjeepvan}</td>
                                    <td>{d.lcv}</td>
                                    <td>{d.truckbus}</td>
                                    <td>{d.heavyvehicle}</td>
                                    <td><button class="deletebutton" onClick={() => Deletepost(d.id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>






        </div>
    )
}

export default ViewAllToll