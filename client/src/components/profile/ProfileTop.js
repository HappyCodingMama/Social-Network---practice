import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = (props) => {
  return (
    <div class='profile-top p-1'>
      <img
        class='round-img my-1'
        src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
        alt=''
      />
      <h1 class='large'>John Doe</h1>
      <p class='lead'>Developer at Microsoft</p>
      <p>Seattle, WA</p>
      <div class='icons my-1'>
        <a href='#'>
          <i class='fas fa-globe fa-lg'></i>
        </a>
        <a href='#'>
          <i class='fab fa-twitter fa-lg'></i>
        </a>
        <a href='#'>
          <i class='fab fa-facebook fa-lg'></i>
        </a>
        <a href='#'>
          <i class='fab fa-linkedin fa-lg'></i>
        </a>
        <a href='#'>
          <i class='fab fa-instagram fa-lg'></i>
        </a>
      </div>
    </div>
  );
};

ProfileTop.propTypes = {};

export default ProfileTop;
