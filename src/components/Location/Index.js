import React from 'react';

const Location = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d58418.452177889056!2d90.38967023695122!3d23.777556151340338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!3e0!4m0!4m4!2s23.77755278008592%2C+90.42505798390259!3m2!1d23.7775528!2d90.42505799999999!5e0!3m2!1sen!2sbd!4v1558826049815!5m2!1sen!2sbd" 
                width="100%"
                height="500px"
                frameBorder="0"
                title="myMap"
                allowFullScreen></iframe>
                <div className="location_tag">
                    <div>Location</div>
                </div>
        </div>
    );
};

export default Location;