import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike } from '../../actions/post';

const PostItem = ({
  addLike,
  removeLike,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => (
  <Fragment>
    <div class='post p-1 my-1'>
      <div>
        <a href='profile.html'>
          <img src={avatar} class='square-img' alt='profile-img' />
          <h3>{name}</h3>
        </a>
      </div>
      <div>
        <p class='my-1'>{text}</p>
        <p className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
        <button
          onClick={(e) => addLike(_id)}
          type='button'
          class='btn btn-primary'
        >
          <i class='fas fa-thumbs-up'></i>{' '}
          <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
        </button>
        <button
          onClick={(e) => removeLike(_id)}
          type='button'
          class='btn btn-primary'
        >
          <i class='fas fa-thumbs-down'></i>
        </button>
        <Link to={`/post/${_id}`} class='btn btn-primary'>
          {' '}
          Discussion{' '}
          {comments.length > 0 && (
            <span className='comment-count'>{comments.length}</span>
          )}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button className='btn btn-danger' type='button'>
            <i className='fas fa-times'></i>
          </button>
        )}
      </div>
    </div>

    <div class='post p-1 my-1'>
      <div>
        <a href='profile.html'>
          <img
            class='square-img'
            src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
            alt=''
          />
          <h3>John Doe</h3>
        </a>
      </div>
      <div>
        <p class='my-1'>
          Nulla egestas ultricies pretium. Fusce id scelerisque dolor. Ut
          lacinia, ex a venenatis eleifend, sapien orci faucibus leo, a semper
          sem mauris a risus. Ut molestie vehicula ante ut vestibulum. Vivamus
          vestibulum a ipsum vel feugiat.
        </p>
        <button class='btn btn-primary'>
          <i class='fas fa-thumbs-up'></i> <span>4</span>
        </button>
        <button class='btn btn-primary'>
          <i class='fas fa-thumbs-down'></i>
        </button>
        <a href='post.html' class='btn btn-primary'>
          {' '}
          Discussion{' '}
        </a>
      </div>
    </div>
  </Fragment>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike })(PostItem);
