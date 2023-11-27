import FindTable from "./FindTable";
import Title from "./Title";
import React, { useState, useReducer, } from 'react';





function Main() {

    const [formData, setFormData] = useState({
        date: '',
        time: '',
        numberOfGuests: '',
        partyName: '',
        seatOption: '',
    });

    const seatingOptions = [
        { label: 'Standard', value: 'standard' },
        { label: 'Outside', value: 'outside' },
    ];

    // console.log({ formData })

    const updateTimes = () => {

        return availableTimes;
    };
    const initializeTimes = () => {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "21:30"];
    };

    // const [availableTimes, setAvailableTimes] = useState(initializeTimes);

    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes);

  

    //   console.log(initializeTimes())
    // console.log({availableTimes})

    return (
        <div>
            <Title />
            <FindTable
                formData={formData}
                setFormData={setFormData}
                seatingOptions={seatingOptions}
                setAvailableTimes={setAvailableTimes}
                initializeTimes={initializeTimes()}
            />
        </div>
    );
}

export default Main;


