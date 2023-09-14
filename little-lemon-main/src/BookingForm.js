import React, { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");

    if (FormData.guests < 1 || FormData.guests > 10) {
        return "Number of guests must be between 1 and 10";
      };


    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <div className="form-container">
            <header>
                    <h2>Book Your Reservation</h2>
                <section>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <div>
                                <label htmlFor="book-date">Choose Date:</label>
                                <input id="book-date" value={FormData.date} onChange={(e) => handleChange (e.target.value)}
                                type="date" required/>
                            </div>

                            <div>
                                <label htmlFor="book-time">Choose Time:</label>
                                <select id="book-time" value={FormData.times} onChange={(e) => setTimes (e.target.value)}>
                                    <option value="" required>Select a Time</option>
                                    {
                                        props.availableTimes.availableTimes.map(availableTimes => {return <option key=
                                            {availableTimes}>{availableTimes}</option>})
                                    }
                                </select>
                            </div>

                            <div>
                                <label htmlFor="book-guests">Number of Guests:</label>
                                <input id="book-guests" min='1' max='10' required value={FormData.guests} onChange={(e) => setGuest (e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="book-occasion">Occasion:</label>
                                <select id="book-occasion" key={occasion} value={FormData.occasion}
                                onChange={e => setOccasion(e.target.value)}>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div classname="btnReceive">
                                <input id="submit" aria-label="On Click" type="submit" value={"Make Your Reservation"} />
                            </div>

                        </fieldset>
                    </form>
                </section>
            </header>
        </div>
    );
};

export default BookingForm;