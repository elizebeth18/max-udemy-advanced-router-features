import { useLoaderData,useParams, json } from "react-router-dom";
import EventItem from "../EventItem";

const EventDetail = () => {
    const params = useParams();
    const data = useLoaderData()
    return (
        <>
            <h1>Event Details : {params.eventId}</h1>
            <EventItem event={data.event}/>
        </>
    )
}

export default EventDetail;

export const loader = async ({ request, params }) => {
    const eventId = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + eventId);

    if (!response.ok) {
        throw json({ message: 'Could not fetch the data for the selected event' }, { status: 500 });
    } else {
        return response;
    }
}