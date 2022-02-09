import React, { useEffect, useState } from 'react';

function State(props) {
    const [records, setRecords] = useState([]);
    if (props.data[0] !== undefined) {
        if (records.length === 0) {
            setRecords(props.data[0].stateData);
        }
    }
    useEffect(() => {

    }, []);

    return (
        <div className='row'>
            {

                Object.keys(records).map((item) => {
                    return (

                        <div className="row col-sm-4" key={item} >
                            <div className="card bg-primary  text-white" style={{ maxWidth: '25rem' }}>
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
export default State;