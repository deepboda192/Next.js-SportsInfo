/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './DetailCard.module.css';
import PropTypes from 'prop-types';

function DetailCard({ image, title, comment, view, month }) {
  return (
    <>
      <div
        id="myDetailCard"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className={styles.myDetailCard}
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              <div className={styles.inner_carasoul}>
                <div className="container">
                  <div className={styles.cara_container}>
                    <h1>{title}</h1>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className={styles.author}>
                        <a>Sports Info</a>
                        {month} months ago
                      </p>

                      <ul className={styles.count_list}>
                        <li>
                          <p className={styles.comment_white_icon}>
                            <img
                              src={
                                'https://www.sports.info/comment-icon.7aef209a3b2086028430.svg'
                              }
                              alt=""
                            />
                            <span className={styles.space}>{comment}</span>
                          </p>
                        </li>
                        <li>
                          <p className={styles.comment_white_icon}>
                            <img
                              src={
                                'https://www.sports.info/view-icon.b16661e96527947b18f1.svg'
                              }
                              alt=""
                            />
                            <span className={styles.space}>{view}</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

DetailCard.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  comment: PropTypes.number,
  view: PropTypes.number,
  month: PropTypes.number,
};

export default DetailCard;
