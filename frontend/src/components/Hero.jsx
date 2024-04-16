import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Viện Y tế Longlee là một cơ sở hiện đại dành riêng cho
            để cung cấp các dịch vụ chăm sóc sức khỏe toàn diện với lòng trắc ẩn và
            Chuyên môn. Đội ngũ chuyên gia lành nghề của chúng tôi cam kết
            cung cấp dịch vụ chăm sóc cá nhân hóa phù hợp với nhu cầu của từng bệnh nhân. Tại
            Longlee, chúng tôi ưu tiên sức khỏe của bạn, đảm bảo hài hòa
            Hành trình hướng tới sức khỏe và sức khỏe tối ưu.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
