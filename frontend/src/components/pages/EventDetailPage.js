import { useParams } from "react-router-dom";

const EventDetail = () => {
    const params = useParams();
    return(
        <>
            <h1>Event Details : {params.eventId}</h1>
        </>
    )
}

export default EventDetail;