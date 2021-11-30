/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../Card/Card.module.css';
import Link from 'next/link';
import PropTypes from 'prop-types';


function Card({ image, title, description, view, comment, month, slug }) {
  return (
    <>
      <div className="card mb-4 all border-0">
        <div className="row g-0">
          <div className="col-sm-4">
            <div className={styles.imageContainer}>
              <div
                className={styles.myImage}
                style={{
                  backgroundImage: `url(${image})`,
                }}
              >
                <a className={styles.a}></a>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="card-body">
              <div className={styles.cardUpper}>
                <Link href="/article/[slug]" as={'/article/' + slug}>
                  <a className={styles.myLink}>{title}</a>
                </Link>
                <p className={styles.desc}>{description}</p>
              </div>
              <div className={styles.flexcontain}>
                <div className={styles.leftside}>
                  <span className={styles.sportinfo}>Sports Info</span>
                  <span className={styles.monthclass}>
                    {month} months ago
                  </span>
                </div>

                <div className={styles.leftcount}>
                  <span>
                    <img
                      src={'https://www.sports.info/comment-icon.7aef209a3b2086028430.svg'}
                      alt="comment" />{' '}
                    {comment}
                  </span>
                  <span>
                    <img
                      src={'https://www.sports.info/view-icon.b16661e96527947b18f1.svg'}
                      alt="view" />{' '}
                    {view}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  comment: PropTypes.number,
  description: PropTypes.string,
  slug: PropTypes.string,
  view: PropTypes.number,
  month: PropTypes.number,
};

export default Card;
