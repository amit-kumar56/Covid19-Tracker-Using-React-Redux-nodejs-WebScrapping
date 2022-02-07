import React, { useEffect, useState } from 'react';

const Slider = (props) => {
   //console.log(props.data);
    const [total, setTotal] = useState([]);
    const [totalD, setTotalD] = useState([]);
    const [totalDe, setTotalDe] = useState([]);
    useEffect(() => {
        getTotal();
    }, []);

    const getTotal = async () => {
        let result = await fetch('http://localhost:5000/total');

        //let result = await fetch('https://covid-19-tracker-state-wise.herokuapp.com/total',{mode: "no-cors"});
        result = await result.json();
        console.log(result[0])
        setTotal(result[0]);
        setTotalD(result[1]);
        setTotalDe(result[2]);
        //localStorage.setItem("user", JSON.stringify(result))
        
    };

    return (
        <div>
            <div className="card text-white bg-success mb-3" >
                            <div className="card-header">Total Cases :{total}</div>
                            <div className="card-body">
                                <h5 className="card-title">Total Discharge : {totalD}</h5>
                                <p className="card-text">Total Death : {totalDe}</p>
                            </div>
                        </div>
        </div >
    )

}
export default Slider;





