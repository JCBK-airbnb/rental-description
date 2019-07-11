import React from 'react';
import style from './quickDetailHeader.css';


const quickDetailHeader = (props) => {

  let count = 0;
  let superHost = null

  if(props.RentalData.rentalData.quickDetail.superhost) {

    superHost = 
    <div>
      <div className={style.title}>{props.RentalData.rentalData.hostInfo.name} is a superHost</div>
      <div className={style.info}>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
    </div>
    
  }
  return (
    <div>
      <div>{superHost}</div>
      {/* // need to figure out how to make this render these dynamically rather then hard coding 
      each component in this section. I know the first thing I need to do is restructure my data base 
      so all these the state for this component is in one object. Right now hostInfo is in a seperate
      obj than therest of the state for this component. 

      // going to try and get all the merges completes first. then pull to update this file.
      // and then start from there. Reconfigueing the data base now will mess allllll sorts of stuff
     up */}

    </div>
  )
}

export default quickDetailHeader;