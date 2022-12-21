import React, { useState } from "react";
import "./Home.scss";
import logo from "../../assets/logoPioneer.png";
import pioneer from "../../assets/pioneer.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { PopUp } from "../../components";

export default function Home() {
  const [trigger, setTrigger] = useState(false);
  const { eventData } = useSelector((state) => state.EventReducer);
  const { id, title, img, introduce } = eventData[0];

  return (
    <section className="container home">
      <div className="homeHero">
        <div className="heroContent">
          <h1>
            Câu lạc bộ sinh viên nghiên cứu khoa học
            <span> PIONEER</span>
          </h1>
          <p>
            <strong>Pioneer Club</strong> là một Câu lạc bộ về nghiên cứu và học
            thuật trực thuộc khoa Điện tử-Viễn thông.
          </p>

          <div className="hero-btn">
            <button
              onClick={() => setTrigger(true)}
              style={{ background: "#55bbf6" }}
              className="btn"
            >
              Tìm hiểu thêm
            </button>
            <PopUp trigger={trigger} setTrigger={setTrigger} />
            <NavLink className="btn" to={"/contact"}>
              Liên hệ chúng tôi
            </NavLink>
          </div>
        </div>
        <div className="heroImg">
          <img src={pioneer} alt="" />
        </div>
      </div>

      <div className="feature">
        <div className="featureContainer">
          <div className="featureImg">
            <img src={img} alt="" />
          </div>
          <div className="featureContent">
            <span>Sự kiện sắp diễn ra</span>
            <h2>{title}</h2>
            <p>{introduce}</p>
            <NavLink className="btn" to={`/events/${id}`}>
              Tìm hiểu
            </NavLink>
          </div>
        </div>
      </div>

      {/* <div className="faq">
        <h2>Giải đáp thắc mắc về Pioneer</h2>
        <h3>
          Câu trả lời dành cho các câu hỏi của mọi người về Câu lạc bộ Pioneer
        </h3>
        <div className="faqContainer">
          <div className="faqItem">
            <h3>What is a FAQ?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati expedita ratione non quibusdam praesentium commodi id
              doloribus, numquam dicta eius earum illo quam quas? Earum id
              fugiat nobis ipsa quae?
            </p>
          </div>
          <div className="faqItem">
            <h3>What is a FAQ?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati expedita ratione non quibusdam praesentium commodi id
              doloribus, numquam dicta eius earum illo quam quas? Earum id
              fugiat nobis ipsa quae?
            </p>
          </div>{" "}
          <div className="faqItem">
            <h3>What is a FAQ?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati expedita ratione non quibusdam praesentium commodi id
              doloribus, numquam dicta eius earum illo quam quas? Earum id
              fugiat nobis ipsa quae?
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
}
