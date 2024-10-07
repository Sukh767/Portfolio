import React from 'react';
import './Qualification.css';
import Card from '@mui/material/Card';

const Qualification = () => {
  return (
    <>
      <Card
        sx={{
          maxWidth: '800px', // Wider card for better alignment
          width: '100%',
          mx: 'auto',
          padding: '1.5rem',
          boxShadow: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        className="flex"
      >
        <section className="qualification section">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">My personal journey</span>

          <div className="qualification__container">
            <div className="qualification__tabs">
              <div className="qualification__button qualification__active button--flex">
                <i className="uil uil-graduation-cap qualification__icon">Education</i>
              </div>
            </div>

            <div className="qualification__sections">
              <div className="qualification__data">
                <h3 className="qualification__title">Secondary</h3>
                <span className="qualification__subtitle">Nayaput Sudhir Kr. High School</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2019 - Passout</i>
                </div>
              </div>

              <div className="qualification__data">
                <h3 className="qualification__title">Higher Secondary</h3>
                <span className="qualification__subtitle">Nayaput Sudhir Kr. High School</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2021 - Passout</i>
                </div>
              </div>

              <div className="qualification__data">
                <h3 className="qualification__title">Bachelor's Degree</h3>
                <span className="qualification__subtitle">Information Technology</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2021 - Passout</i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Card>
    </>
  );
};

export default Qualification;
