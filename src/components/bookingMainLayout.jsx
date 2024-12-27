import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { createContext, useReducer, useState, useEffect } from 'react'
import { fetchAPI, submitAPI } from '../api'
import "./bookingForm.css";

const inputsInfoData = [
  {
    id: "fname",
    testId: "firstName",
    labelText: "First Name *",
    labelId: "label-fname",
    htmlFor: "fname",
    name: "fname",
    type: "text",
    placeholder: "Enter your Name",
    required: true,
  },
  {
    id: "lname",
    testId: "lastName",
    labelText: "Last Name *",
    labelId: "label-lname",
    htmlFor: "lname",
    name: "lname",
    type: "text",
    placeholder: "Enter your Last Name",
    required: true,
  },
  {
    id: "email",
    testId: "emailAddress",
    labelText: "Email *",
    labelId: "label-email",
    htmlFor: "email",
    name: "email",
    type: "email",
    placeholder: 'example@example.com',
    required: true,
  },
  {
    id: "phone",
    testId: "phoneNumber",
    labelText: "Phone *",
    labelId: "label-phone",
    htmlFor: "phone",
    name: "phone",
    type: "tel",
    placeholder:'000 000 00 00',
    required: true,
  },

];

const checkboxData = [
  {
    id: "email-option",
    labelText: "Email",
    labelId: "label-email-option",
    htmlFor: "email-option",
    name: "emailOption",
    type: "checkbox",
    value: 'Email',
    // required: true,
  },
  {
    id: "text-option",
    labelText: "Text",
    labelId: "label-text-option",
    htmlFor: "text-option",
    name: "textOption",
    type: "checkbox",
    value: 'Text',
    // required: true,
  }
];



export const FormContext = createContext()

const BookingMainLayout = () => {
  const initialDate = new Date().toLocaleDateString('en-us')
  // const availableTimes = ["17:00", "17:30", "18:00", "18:30"]
  const numberDiners = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const tablesType = ["No preference", "Inside", "Outside"]
  const occasions = ["No special occasion", "Birthday", "Anniversary", "Engagement"]
  const minDate = new Date().toISOString().split('T')[0];


  const [errorM, setErrorM] = useState({})
  const [confOptions, setConfOptions] = useState({emailOption: "Email"})

  const navigate = useNavigate()

 
  const initializeTimes = initialAvailableTimes => 
  [...initialAvailableTimes, ...fetchAPI(new Date())];
  
  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes; 
  };
  
  const [ availableTimes, dispatch ] = useReducer(updateTimes, [], initializeTimes);

  const initialFormData = {
    date: "",
    time: availableTimes[0],
    diners: "1",
    tableLocation: "No preference",
    occasion: "No special occasion",
    fname: '',
    lname: '',
    email: '',
    phone: '',
    specialRequest: '',
    emailOption: true,
    textOption: false
    
  }

  
  useEffect(() => {
    localStorage.setItem("myFormData", JSON.stringify(initialFormData))
  },[])
  
  function localSaves () {
    //Gets from localstorage the stored values of myFormData
    const saved = localStorage.getItem('myFormData')
    const initialValues = JSON.parse(saved)
    return initialValues || "";
  }

  const [myFormData, setMyFormData] = useState(localSaves())

  useEffect(() => {
    setMyFormData({...myFormData, date: new Date()})
  
  }, [])

useEffect(() => {
  localStorage.setItem("myFormData", JSON.stringify(myFormData))

},[myFormData])
    


const isValidDate = (selectedDate) => {
  const today = new Date()
  return selectedDate > today
}


const handleDateChange = date => {
  if (isValidDate(date)) {
    setMyFormData({...myFormData, date: date})
    dispatch(date);
  }
};


  // The submitForm function, handles the submision of the information of the forms in BookingForm and BookingContactInfo components
  // to a fake API that returns true as response, then the localstorage is initialized after that user navigates to 
  // the BookingConfirmation component

    const submitForm = (e) => {
      e.preventDefault()
       const res = submitAPI(myFormData);
      if (res) {
        console.log("Form submitted")
        console.log(myFormData)
        localStorage.clear(myFormData)
        localStorage.setItem("myFormData", JSON.stringify(initialFormData))
       return navigate("/booking/bookingconfirmation")
      }
      }


   return (
    <section className='reserve-section'>
        <FormContext.Provider value={{initialFormData, myFormData, setMyFormData, submitForm, availableTimes, numberDiners, tablesType, occasions, handleDateChange, inputsInfoData, checkboxData, errorM, setErrorM, confOptions, setConfOptions}}>
          <Outlet />
        </FormContext.Provider>

    </section>
  )
}

export default BookingMainLayout
