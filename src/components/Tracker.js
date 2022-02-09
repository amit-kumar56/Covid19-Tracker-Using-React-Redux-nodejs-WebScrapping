import React, { useEffect, useState } from 'react';
import StateContainers from '../containers/StateContainer';

function Tracker(props) {
    const [total, setTotal] = useState([]);

    useEffect(() => {

        getProducts();

    }, []);


    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/statedata', { method: 'GET', });

        //let result = await fetch('https://covid-19-tracker-state-wise.herokuapp.com/statedata',{mode: "no-cors"});
        result = await result.json();

        setTotal(result);
    };

    return (
        <div className='row'  >
            <button onClick={() => { props.addToRedux(total) }}>Get State-wise Data</button>
        </div >
    )

}
export default Tracker;