import FindTable from "./FindTable";
import Title from "./Title";
import React, { useState, useReducer, } from 'react';

import Special from '../Special/Special'



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

    const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "21:30"]

    const initializeTimes = fetchAPI(times)

    function fetchAPI(data) {
        return data;
    }

    // console.log(initializeTimes)


    function submitAPI(formData) {
        return true;
    }
    const submitData = formData => {
        const response = submitAPI(formData);
        if (response) (console.log("dddddddddddddddd"));
    }

    const updateTimes = () => {

        return availableTimes;
    };



    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes);



    return (
        <div>
            <div style={{ backgroundColor: '#495E57' }}>
                <Title />
                <FindTable
                    formData={formData}
                    setFormData={setFormData}
                    seatingOptions={seatingOptions}
                    setAvailableTimes={setAvailableTimes}
                    initializeTimes={initializeTimes}
                    submition={submitData}
                />
            </div>
            <Special />

        </div>
    );
}

export default Main;


