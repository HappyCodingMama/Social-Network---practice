import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => {
  return (
    <Fragment>
      <div class='post p-1 my-1'>
        <div>
          <Link to={`/profile/${user}`}>
            <img class='square-img' src={avatar} alt='profile-img' />
            <h3>{name}</h3>
          </Link>
        </div>
        <div>
          <p class='my-1'>{text}</p>
          <p className='post-date'>
            Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
          </p>

          {showActions && (
            <Fragment>
              {' '}
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
                <button
                  onClick={(e) => deletePost(_id)}
                  className='btn btn-danger'
                  type='button'
                >
                  <i className='fas fa-times'></i>
                </button>
              )}
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
