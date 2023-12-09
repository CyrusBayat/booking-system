import React from 'react';
import BookingPage from './BookingPage ';
import resturant1 from '../../Assits/resturant1.png';
import resturant2 from '../../Assits/resturant2.png';

function FindTable(props) {
  return (
    <div>
      <h2 className="FindTable">Find A table for any occasion</h2>
      <div className="resturantPic">
        <img src={resturant1} alt="resturant " className="resturanrImage" />
        <img src={resturant2} alt="resturant " className="resturanrImage" />
      </div>
      <BookingPage {...props} />
    </div>
  );
}

export default FindTable;
