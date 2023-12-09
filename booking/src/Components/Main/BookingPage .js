import React, { useState } from 'react';



const CustomAlert = ({ message, color }) => (
    <div style={{ backgroundColor: color, padding: '10px', textAlign: 'center', color: 'white', fontSize:"25px" }}>
        {message}
    </div>
);

function BookingPage(props) {

    const [errors, setErrors] = useState({
        date: '',
        time: '',
        numberOfGuests: '',
        partyName: '',
        seatOption: '',
    });

    const populateFutureDates = () => {
        const currentDate = new Date();
        const futureDates = [];

        for (let i = 0; i < 10; i++) {
            const futureDate = new Date(currentDate);
            futureDate.setDate(currentDate.getDate() + i);

            futureDates.push({
                value: futureDate.toISOString().split('T')[0],
                label: futureDate.toDateString(),
            });
        }

        return futureDates;
    };




    const handleChange = (e) => {
        props.setFormData({
            ...props.formData,
            [e.target.name]: e.target.value,
        });
    };



    const handleSeatOptionChange = (value) => {
        props.setFormData({
            ...props.formData,
            seatOption: value,
        });
    };

    const [alert, setAlert] = useState({
        message: '',
        color: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!props.formData.date) {
            newErrors.date = 'Please select a date';
        }

        if (!props.formData.time) {
            newErrors.time = 'Please select a time';
        }

        if (!props.formData.numberOfGuests) {
            newErrors.numberOfGuests = 'Please select the number of diners';
        }

        if (!props.formData.partyName) {
            newErrors.partyName = 'Please select an occasion';
        }

        if (!props.formData.seatOption) {
            newErrors.seatOption = 'Please select a seating option';
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
            return;
        }


        props.submition();

        setAlert({
            message: 'Your Table is successfully reserved for ' + props.formData.date + " at " + props.formData.time,
            color: 'green',
        });
        props.setFormData({
            date: '',
            time: '',
            numberOfGuests: '',
            partyName: '',
            seatOption: '',
        });



    };


    return (
        <form className="tableReservation" onSubmit={handleSubmit}>
            {alert.message && <CustomAlert message={alert.message} color={alert.color} />}
            <div style={{ textAlign: 'center' }}>
                <select className="inputDate" name="date" value={props.formData.date} onChange={handleChange}>
                    <option value="" disabled>Select a Date</option>
                    {populateFutureDates().map((date) => (
                        <option key={date.value} value={date.value}>
                            {date.label}
                        </option>
                    ))}
                </select>

                <select className="inputDate" name="time" value={props.formData.time} onChange={handleChange}>
                    <option value="">Select Time</option>
                    {/* {props.availableTimes.map((time) => ( */}
                    {props.initializeTimes.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </div>


            <div style={{ textAlign: 'center' }}>
                <select name="numberOfGuests" value={props.formData.numberOfGuests} onChange={handleChange}>
                    <option value="">Number of Diners</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="more">more</option>
                </select>
            </div>


            <div style={{ textAlign: 'center' }}>
                <select name="partyName" value={props.formData.partyName} onChange={handleChange}>
                    <option value="">Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>


            <div className="SeatingOption">
                <p className="Seating">Seating option</p>
                {props.seatingOptions.map((option) => (
                    <div key={option.value}>
                        <label>{option.label}</label>
                        <input
                            type="radio"
                            value={option.value}
                            checked={props.formData.seatOption === option.value}
                            onChange={() => handleSeatOptionChange(option.value)}
                            name="seatOption"
                        />
                    </div>
                ))}
            </div>
            <div style={{ color: 'orange', textAlign: 'center', fontSize: "20px" }}>
                {errors.date && <p >{errors.date}</p>}
                {errors.time && <p >{errors.time}</p>}
                {errors.numberOfGuests && <p >{errors.numberOfGuests}</p>}
                {errors.partyName && <p >{errors.partyName}</p>}
                {errors.seatOption && <p >{errors.seatOption}</p>}

            </div>


            <div style={{ textAlign: 'center' }}>
                <button type="submit" className="submitButton" disabled={!!alert.message}>
                    Let's go
                </button>
            </div>

            {/* <p>{props.formData.seatOption}</p> */}

        </form>
    );
}

export default BookingPage;
