import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import RemainingItem from "../RemainingItem/RemainingItem";
// import RemainingItem from "../RemainingItem/RemainingItem";
import "./InfoPage.scss";

export default function InfoPage(props) {
  const { eventData } = useSelector((state) => state.EventReducer);

  const location = useLocation();

  useEffect(() => {
    console.log(123);
  }, [location]);

  const currentEvent = eventData.filter(
    (event) => event.id === window.location.pathname.split("/")[2]
  );

  const createMarkup = (value) => {
    return { __html: value };
  };

  const renderRemainingItem = () => {
    return eventData
      .filter((event) => event.id !== window.location.pathname.split("/")[2])
      .map((item, index) => {
        return <RemainingItem item={item} />;
      });
  };

  return (
    <section className="infoPage">
      <div className="col-span-8 currentEvent">
        <h2>{currentEvent[0].title}</h2>
        <div className="indicator"></div>

        <div dangerouslySetInnerHTML={createMarkup(currentEvent[0].content)} />
      </div>
      <div className="remainingEvent">{renderRemainingItem()}</div>
    </section>
  );
}
