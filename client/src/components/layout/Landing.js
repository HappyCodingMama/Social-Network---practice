import React from 'react';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h2 className='x-large'>Dev to Dev</h2>
          <p className='lead'>
            Create developer portfolio, share posts and get help from other
            developers
          </p>
          <div className='buttons'>
            <a href='register.html' className='btn btn-primary'>
              Sign Up
            </a>
            <a href='login.html' className='btn btn'>
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
