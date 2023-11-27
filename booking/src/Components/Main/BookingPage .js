

function BookingPage(props) {



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



    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // console.log(props.initializeTimes)

    return (
        <form className="tableReservation" onSubmit={handleSubmit}>

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


            <div style={{ textAlign: 'center' }}>
                <button type="submit" className="submitButton">
                    Let's go
                </button>
            </div>

        </form>
    );
}

export default BookingPage;
