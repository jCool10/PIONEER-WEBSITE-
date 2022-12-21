import React from "react";
import logo from "../../assets/logoPioneer.png";
import "./PopUp.scss";

export default function PopUp(props) {
  return props.trigger ? (
    <section className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <div className="popupImg">
            <img src={logo} alt="logo" />
          </div>
          <button className="btn-close" onClick={() => props.setTrigger(false)}>
            <i class="fa fa-times"></i>
          </button>
        </div>

        <div>
          <p>
            <span style={{ color: "#000000" }}>
              <strong>Pioneer Club</strong> là một{" "}
              <strong>Câu lạc bộ về nghiên cứu và học thuật</strong> trực thuộc{" "}
              <strong>khoa Điện tử-Viễn thông</strong>.
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              <strong>Mảng nghiên cứu:&nbsp;</strong>
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>&nbsp;+ Machine Learning</span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>&nbsp;+ Internet of Things</span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>&nbsp;+ Điện tử, vi mạch</span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>&nbsp;+ Web/App Thuật toán</span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              &nbsp;- <strong>CLB SV NCKH PIONEER</strong> được thành lập
              06/11/2012. Trải qua 10 năm xây dựng và phát triển, CLB đã từng
              bước đi lên và ngày một vững mạnh, đạt được những thành tựu đáng
              kể. Với truyền thống “Yêu Khoa học- Thích kĩ thuật- Đam mê Công
              nghệ”, CLB đã đang và sẽ là ngôi nhà cho những bạn trẻ yêu kỹ
              thuật- nơi bạn được sống hết mình với thứ gọi là đam mê.
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              &nbsp;- Mang trong mình sứ mệnh cao cả, Pioneer chính là nơi ươm
              mầm, nuôi dưỡng và góp phần đào tạo nên những nhân tài trong ngành
              Điện tử, Viễn thông, Kỹ thuật máy tính. Những hoạt động nghiên cứu
              khoa học ở Câu lạc bộ chính là tiền đề để mỗi thành viên khi nước
              chân vào đời sẽ có được hành trang vững chắc nhất về kiến thức, kĩ
              năng …trong lĩnh vực kỹ thuật.
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              &nbsp;- Câu lạc bộ cũng là nơi sản sinh ra những ý tưởng sáng tạo,
              đột phá và vô cùng thực tiễn đem đến những hiệu quả thiết thực cho
              đời sống của mọi người.&nbsp;
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              &nbsp;- Và bất kỳ con tàu nào cũng sẽ không thể chạy được nếu
              thiếu “đầu tàu”. Để một CLB có thể vận hành và phát triển thì
              không thể không kể đến sự điều hành của Ban Chủ Nhiệm- những “đầu
              tàu” nhiệt huyết, tự tin và dẫn dắt Câu lạc bộ tiến lên từng
              ngày.&nbsp;
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              📌<strong>Ban chủ nhiệm</strong> :&nbsp;
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              &nbsp;- Chủ nhiệm: <strong>TS ĐÀO DUY TUẤN</strong>
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              &nbsp;- Phó chủ nhiệm : <strong>TÔN THẤT HẢI&nbsp;</strong>
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              &nbsp;- Với phương châm hoạt động “
              <strong>Learning and Sharing</strong>”, Pioneer Club luôn tổ chức
              nhiều hoạt động thường niên để nơi đây không chỉ là nơi bạn có thể
              phát triển tri thức mà còn là nơi thúc đẩy cảm hứng và phát triển
              toàn diện cho các bạn sinh viên.&nbsp;
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              📌<strong>Hoạt động nổi bật của Pioneer Club:&nbsp;</strong>
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              &nbsp; &nbsp; &nbsp;→ Seminar hàng tháng là hoạt động đặc trưng
              của Pioneer Club. Đây là dịp để các thầy cô, anh chị Cựu sinh viên
              và Doanh nghiệp địa phương đến và chia sẻ kinh nghiệm, kiến thức
              cho Thành viên câu lạc bộ.&nbsp;
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              &nbsp;+ Training Altium Thiết kế mạch
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              &nbsp;+ Training C Embedded/IoTs
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>&nbsp;+ Training Python</span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>&nbsp;+ Training Arduino</span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              &nbsp;+ Nghệ thuật viết CV và chinh phục nhà tuyển dụng
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              &nbsp;+ Chia sẻ kinh nghiệm cuộc thi “Xe tự hành: Cuộc đua Số”
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              &nbsp;+ Chia sẻ Định hướng Ngành
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              &nbsp;+ Chia sẻ kinh nghiệm thi Nghiên cứu Khoa học
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              &nbsp;+ Triển lãm Công nghệ: BKDN Techshow
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              &nbsp;+ ETE-DUT Code Contest: Cuộc thi lập trình khoa Điện tử-Viễn
              thông
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              &nbsp;- Hi vọng CLB SV NCKH PIONEER chính là mảnh ghép mà các bạn
              đang tìm kiếm, hãy theo dõi trang Web để cập nhật những thông tin
              mới nhất về câu lạc bộ nhé .Pioneer chúc bạn trên con đường sắp
              tới sẽ luôn được thành công, hạnh phúc.&nbsp;
            </span>
          </p>
        </div>
      </div>
    </section>
  ) : (
    ""
  );
}
