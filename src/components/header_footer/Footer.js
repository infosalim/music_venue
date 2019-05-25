import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck-red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Music Venue</div>
                <div className="footer_copyright">
                    The Music Venue 2019. All Rights reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;