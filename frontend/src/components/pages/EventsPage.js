import EventsList from '../EventsList';
import { useLoaderData, json } from "react-router-dom";

const Events = () => {
    const events = useLoaderData();
    return (
        <>
            <EventsList events={events} />
        </>
    )
}

export default Events;

export const loader = async () => {

    const response = await fetch(" http://localhost:8080/events");

    if (!response.ok) {
        // throw new Response(JSON.stringify({ message: 'Could not fetch events.'}), {status: 500,});

        json({message: 'Could not fetch events.'},
            {status: '500'});

    } else {
        const resData = await response.json();
        return resData.events;
    }

}