import React, { createContext, useState } from 'react';


function VehicleData({ children }) {
    const [alldata, setdata] = useState([])
    const [tolllist, settolllist] = useState([])
    return (
        <AllData.Provider value={{ alldata, setdata, tolllist, settolllist }}>
            {children}
        </AllData.Provider>
    )
}

export default VehicleData
export const AllData = createContext(null);