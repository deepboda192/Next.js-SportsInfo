/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from '../../Components/Layout/Layout';
import Carasoul from '../../Components/DetailCard/DetailCard';
import styles from '../../Components/DetailCard/DetailCard.module.css';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';

export default function Article({ FinalData }) {
  var today = new Date();
  var today_month = today.getMonth();
  var date = new Date(FinalData.dCreatedAt);
  var month = date.getMonth();
  var final_month = today_month - month;
  return (
    <>
      <style jsx>{`
        .mainDes {
          font-family: 'IBM Plex Sans Condensed', sans-serif;
          font-weight: 400;
          padding: 60px 30px;
          margin: -40px 0 -20px 420px;
          max-width: 960px;
          font-size: 18px;
          text-align: left;
          line-height: 28px;
          color: #3d3d3d;
        }

        .mainDes > span {
          color: #3d3d3d;
        }

        .mainDes .desc > h3 {
          color: #292929;
        }

        .desc strong {
          font-weight: bolder;
        }

        .desc h2,
        .desc h3,
        .desc h4 {
          font-size: 20px;
          line-height: 25px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-weight: 800;
          color: #292929;
        }
      `}</style>

      <Layout title={FinalData.sTitle}>
        <Carasoul
          image={FinalData.sImage}
          title={FinalData.sTitle}
          comment={FinalData.nCommentsCount}
          view={FinalData.nViewCounts}
          month={final_month}
        />
        <div className={styles.mainDes}>
          <p className={styles.desc}>{parse(FinalData.sDescription)}</p>
        </div>
      </Layout>
    </>
  );
}

Article.propTypes = {
  FinalData: PropTypes.object,
};

export async function getServerSideProps({ query }) {
  const { slug } = query;

  const res = await fetch(
    `https://backend.sports.info/api/v1/posts/view/${slug}`,
  );
  const data = await res.json();
  const FinalData = data.data;
  return {
    props: {
      FinalData,
    },
  };
}
