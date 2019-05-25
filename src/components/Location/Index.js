import React from 'react';

const Location = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.372144088649!2d90.42406810099794!3d23.77638748189907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c791a77c0777%3A0x4f626ec2bd226b52!2zMjPCsDQ2JzM5LjIiTiA5MMKwMjUnMzAuMiJF!5e0!3m2!1sen!2sbd!4v1558823997641!5m2!1sen!2sbd" 
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen></iframe>
                <div className="location_tag">
                    <div>Location</div>
                </div>
        </div>
    );
};

export default Location;