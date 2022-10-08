import React, { useEffect, useState } from 'react';
import './Home.scss';

export default function Home() {
  const studyFields = ['AI', 'Electronic', 'Embedded', 'IOT', 'Web', 'App', 'Algorithms'];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setIndex((prevState) => prevState + 1);
    }, 2000);
  }, []);

  const renderStudyFields = () => {
    return studyFields.map((field, i) => {
      return (
        // <li key={i} className={`field ${i === index ? 'active' : ''}`}>
        //   {field}
        // </li>
        <li className="content__container__list__item">{field}</li>
      );
    });
  };

  return (
    <section>
      {/* <div className="homeContent">
        <span className="">Learning</span>
        <ul className="w-[300px] mx-7 relative ">{renderStudyFields()}</ul>

        <span className="">and Sharing</span>
      </div> */}

      <div className="content">
        <span className="">Learning</span>

        <div className="content__container">
          <ul class="content__container__list">{renderStudyFields()}</ul>
        </div>
        <span className="">and Sharing</span>
      </div>
    </section>
  );
}
