import React from 'react'
import { useContext } from 'react';
import { FormContext } from '../../components/bookingMainLayout';
import { NavLink } from 'react-router-dom'


const BookingReview = () => {

  const { myFormData, confOptions, submitForm } = useContext(FormContext);


  return (
    <section className='reserve-section'>

        <div className='form-section'>
          <div className='form-container-review'>
          <h2>Your are almost done...</h2>
              <form>
            <div className='form-body-review'>
              <p className='p-review'>Please review the information below</p>
                <h4>Reserved Date</h4>
                <p>{new Date(myFormData.date).toLocaleDateString('en-us')}</p>
                <h4>Reserved Time</h4>
                <p>{myFormData.time}</p>
                <h4>Number of Guests</h4>
                <p>{myFormData.diners}</p>
                <h4>Table Location</h4>
                <p>{myFormData.tableLocation}</p>
                <h4>Special Occasion</h4>
                <p>{myFormData.occasion}</p>
                <h4>Name</h4>
                <p>{myFormData.fname}</p>
                <h4>Last Name</h4>
                <p>{myFormData.lname}</p>
                <h4>Email</h4>
                <p>{myFormData.email}</p>
                <h4>Phone</h4>
                <p>{myFormData.phone}</p>
                {myFormData.specialRequest ?
                <><h4>Special Request</h4> <p>{myFormData.specialRequest}</p></> : null}

                {confOptions !== undefined && Object.keys(confOptions).length > 0 ? <><h4>Send Confirmation via</h4><p>{confOptions.emailOption && confOptions.textOption ? `${confOptions.emailOption} and ${confOptions.textOption}`: 
                confOptions.emailOption ? confOptions.emailOption : confOptions.textOption ? confOptions.textOption : null}</p></> : null}

                <div className='btns-container-review'>
                  <button  onClick={submitForm} className='btn-continue review'>Reserve</button>
                  <NavLink to="/bookings/bookingcontactinfo" className="btn-continue back" >Back</NavLink>
                </div>
            </div>
              </form>
          </div>
        </div>

    </section>
  )
}

export default BookingReview
