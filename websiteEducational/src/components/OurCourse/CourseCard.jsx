import React from "react";

const CourseCard = (props) => {
    
    const {imgUrl, title, lesson, students, rating} = props.item;

    return (
         <div className="single__course__item">
            <div className="course__img">
                <img src={imgUrl} className='w-100' alt="" />
            </div>

            <div className="course__details">
                <h6 className="course__title mb-4">
                    {title}
                </h6>

                <div className="lesson d-flex justify-content-between align-items-center">
                    <p className="lesson d-flex align-items-center gap-1">
                        <i className="ri-book-open-line"></i>
                        {lesson} Lessons
                    </p>

                    <p className="students d-flex align-items-center gap-1">
                        <i className="ri-user-line">
                            {students}K
                        </i>
                    </p>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <p className="rating d-flex align-items-center gap-1">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i><span>({rating})</span>
                    </p>
                </div>
            </div>
         </div>
    )
}

export default CourseCard;