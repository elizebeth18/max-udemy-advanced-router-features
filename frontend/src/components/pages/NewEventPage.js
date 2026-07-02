import EventForm from "../EventForm";
import { json, redirect } from "react-router-dom";
const NewEvent = () => {
    return (
        <>
            <h1>New Event</h1>
            <EventForm />
        </>
    )
}

export default NewEvent;

export const action = async ({ request, params }) => {

    const data = await request.formData();

    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    }

    const response = await fetch('http://localhost:8080/events', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(eventData)
    });

    if (!response.ok) {
        throw json({ message: 'Could not submit the form details' }, { status: 500 })
    }

    redirect('/events');
}