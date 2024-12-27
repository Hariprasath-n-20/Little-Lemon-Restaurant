import Nav from './components/nav'
import Contact from './components/contact'
import Home from './pages/home'
import BookingMainLayout from './components/bookingMainLayout'
import BookingForm from './pages/bookings/BookingForm'
import BookingContactInfo from './pages/bookings/BookingContactInfo'
import BookingReview from './pages/bookings/BookingReview'
import BookingConfirmation from './pages/bookings/BookingConfirmation'
import Working from "./components/working";
import {
  Route,
  Routes
} from "react-router-dom"

function App() {

  return (
    <>
     <Nav />
     <Routes> 
      <Route path="/" exact element={<Home />}></Route>
      <Route path="booking" element={<BookingMainLayout />}>
          <Route index element={<BookingForm />}/>
          <Route path="bookingcontactinfo" element={<BookingContactInfo />}/>
          <Route path="bookingreview" element={<BookingReview />}/>
          <Route path="bookingconfirmation" element={<BookingConfirmation />}/>
        </Route>
        <Route path="/working" element={<Working />}/>
        <Route path="/working" element={<Working />}/>
        <Route path="*" element={<Working />} />
    </Routes>
     <Contact />
    </>
  )
}

export default App