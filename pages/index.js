import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Components/Card/Card';
import Layout from '../Components/Layout/Layout';
import PropTypes from 'prop-types';
import styles from '../Components/Layout/Layout.module.css';

export default function Home({ data }) {
  const [count, setCount] = useState(0);
  const [sdata, setData] = useState([]);
  let today = new Date();
  let today_month = today.getMonth();

  useEffect(() => {
    const getDataList = async () => {
      const limit = { nStart: count, nLimit: 5 };
      const res = await axios.post(
        `https://backend.sports.info/api/v1/posts/recent`,
        limit,
      );
      const Data = res.data.data;
      setData([...sdata, ...Data]);
    };
    count >= 5 && getDataList();
  }, [count]);

  const sportData = data.data;

  return (
    <>
      <Layout title="Sports.info">
        <div className={styles.container}>
          {sportData.map((data) => {
            let date = new Date(data.dCreatedAt);
            let month = date.getMonth();
            let final_month = today_month - month;

            return (
              <>
                <Card
                  image={data.sImage}
                  title={data.sTitle}
                  slug={data.sSlug}
                  description={data.sDescription}
                  view={data.nViewCounts}
                  month={final_month}
                  comment={data.nCommentsCount}
                />
              </>
            );
          })}

          {sdata?.map((data) => {
            let date = new Date(data.dCreatedAt);
            let month = date.getMonth();
            let final_month = today_month - month;

            return (
              <>
                <Card
                  image={data.sImage}
                  title={data.sTitle}
                  slug={data.sSlug}
                  description={data.sDescription}
                  view={data.nViewCounts}
                  month={final_month}
                  comment={data.nCommentsCount}
                />
              </>
            );
          })}
          <div className="d-flex justify-content-center">
            <a
              className={styles.theme_btn}
              onClick={() => {
                setCount(count + 5);
              }}>
              Load More
              <span></span>
            </a>
            <br />
          </div>
          <br></br>
          <div className="text-center"></div>
        </div>
      </Layout>
    </>
  );
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export async function getServerSideProps() {
  const limit = { nStart: 0, nLimit: 5 };
  const res = await axios.post(
    `https://backend.sports.info/api/v1/posts/recent`,
    limit,
  );

  const data = res.data;

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      data,
    },
  };
}
