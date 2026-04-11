import React, { useState } from 'react'
import SlotSelector from './SlotSelecter'
import BookingForm from './Booking'

const FormCounsalting = () => {
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString('en-CA')); // YYYY-MM-DD local format
    return (
        <>
            <SlotSelector
                selectedSlot={selectedSlot}
                setSelectedSlot={setSelectedSlot}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            <BookingForm selectedSlot={selectedSlot} selectedDate={selectedDate} />
        </>
    )
}

export default FormCounsalting