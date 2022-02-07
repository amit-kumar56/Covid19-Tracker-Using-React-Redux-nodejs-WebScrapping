import React, { useEffect, useState } from 'react';
import Slider from './Slider';

const Tracker = () => {
    const [records, setRecords] = useState([]);
    const [total, setTotal] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        //let result = await fetch('http://localhost:5000/statedata',{method: 'GET',});

        let result = await fetch('https://covid-19-tracker-state-wise.herokuapp.com/statedata');
        result = await result.json();
        setRecords(result);
        //localStorage.setItem("user", JSON.stringify(result))
        
    };


    return (
        <div className='row'>
            {
                Object.keys(records).map((item) => {
                    return (
                        
                        <div className="row col-sm-4" key={item} >
                        <div className="card bg-primary  text-white" style={{maxWidth: '25rem'}}>
                            <div className="card-header">{records[item][0]}. {records[item][1]}</div>
                            <div className="card-body bg-ligh">
                                <p className="card-title">Total Active : {records[item][2]}</p>
                                <p className="card-text">Total Death : {records[item][6]}</p>
                                <p className="card-text">Total Discharge : {records[item][4]}</p>
                            </div>
                        </div>
                        </div>
                    
                    )
                   
                })
            }

        </div >
    )

}
export default Tracker;