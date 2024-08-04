import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/kontakt');
  };

  return (
    <div className="cta-inner-area bg_image ptb--120">
      <div className="container-full">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-style-center">
              <div className="pre-title-area">
                <img src='/assets/images/about/02.png' alt="about" />
                <span className="pre-title">Pracujte s námi</span>
              </div>
              <h2 className="title">
                Mate zájem o mou práci? <br />
                Neváhejte nás kontaktovat.
              </h2>
              <button
                onClick={handleNavigate}
                className="rts-btn btn-border radious-3 mt--50  m-auto"
                style={{color: '#1E1F22'}}
                
              >
               <span style={{paddingRight: "10px"}}> Pojďme tvořit  </span><FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
