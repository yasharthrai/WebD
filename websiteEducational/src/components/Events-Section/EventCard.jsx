import React from "react";

const EventCard = (props) => {
    
    const { imgUrl, title} = props.item;

    return (
         <div className="single__events">
            <div className="events__img mb-5">
                <img src={imgUrl} className='w-100' alt="" />
            </div>

            <div className="events__details">
                <h6>{title}</h6>

                <div className="d-flex align-items-center gap-5">
                    <span className="events-footer d-flex align-items-center gap-2">
                        <i className="ri-map-pin-line"></i> 55 Main Street, New York
                    </span>
                </div>
            </div>
         </div>
    )
}

export default EventCard;