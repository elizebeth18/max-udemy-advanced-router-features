import EventForm from "../EventForm";
import { useRouteLoaderData } from "react-router-dom";

const EditEvent = () => {
    const data = useRouteLoaderData('event-detail');

    return(
        <>
            <h1>Edit Event</h1>
            <EventForm event={data.event} />
        </>
    )
}

export default EditEvent;