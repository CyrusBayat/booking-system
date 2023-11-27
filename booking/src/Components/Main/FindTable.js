import resturant1 from '../../Assits/resturant1.png'
import resturant2 from '../../Assits/resturant2.png'
import BookingPage  from './BookingPage ';

function FindTable(props) {
    return (
        <div>
            {/* <p>{props.form.date}</p> */}
            <p className="FindTable">Find A table for any occasion</p>

            <div className='resturantPic'>
                <img src={resturant1} alt="resturant " className='resturanrImage' />
                <img src={resturant2} alt="resturant " className='resturanrImage' />
            </div>
            <BookingPage 
                formData={props.formData}
                setFormData={props.setFormData}
                seatingOptions={props.seatingOptions}
                setAvailableTimes={props.setAvailableTimes}
                initializeTimes={props.initializeTimes}
            />
        </div>
    )
}

export default FindTable;


