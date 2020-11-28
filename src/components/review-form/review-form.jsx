import React from 'react';
import PropTypes from 'prop-types';
import {withReviewForm} from '../../hocs/with-review-form/with-review-form';
import {LengthOfTextComment} from '../../utils/const';

const ReviewForm = (props) => {
  const {disabledSubmit, submitHandler, fieldChangeHandler} = props;
  return (
    <form action="#" className="add-review__form" onSubmit={submitHandler}>
      <div className="rating">
        <div className="rating__stars">
          <input onChange={fieldChangeHandler} className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
          <label className="rating__label" htmlFor="star-1">Rating 1</label>

          <input onChange={fieldChangeHandler} className="rating__input" id="star-2" type="radio" name="rating" value="2" />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input onChange={fieldChangeHandler} className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked />
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input onChange={fieldChangeHandler} className="rating__input" id="star-4" type="radio" name="rating" value="4" />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input onChange={fieldChangeHandler} className="rating__input" id="star-5" type="radio" name="rating" value="5" />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="comment" id="review-text" placeholder="Review text" minLength={LengthOfTextComment.MIN} maxLength={LengthOfTextComment.MAX} onChange={fieldChangeHandler}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={disabledSubmit ? `disabled` : ``}>Post</button>
        </div>

      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  disabledSubmit: PropTypes.bool.isRequired,
  submitHandler: PropTypes.func.isRequired,
  fieldChangeHandler: PropTypes.func.isRequired,
};

export {ReviewForm};
export default withReviewForm(ReviewForm);
