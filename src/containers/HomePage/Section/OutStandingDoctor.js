import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import facilyImg1 from "../../../assets/specialty/143859-bs-van.jpg";
import facilyImg2 from "../../../assets/specialty/141836-bs-le-quoc-viet.png";
import facilyImg3 from "../../../assets/specialty/103447-bs-hong-anh.jpg";
import facilyImg4 from "../../../assets/specialty/151125-bs-nghiem-trung-dung.jpg";
import facilyImg5 from "../../../assets/specialty/171412-bs-phan-dong-huy-vuong.jpg";
import facilyImg6 from "../../../assets/specialty/162212-1-bs-duy-2022.jpg";

class OutStandingDoctor extends Component {
  render() {
    return (
      <div className="section-share section-doctor">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Bác sĩ nổi bật</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="specialty-body">
            <Slider {...this.props.settings}>
              <div className="img-customize">
                <img src={facilyImg1} />
                <div className="position text-center">
                  <h3>Lê Thị Vân</h3>
                  <h3>Giáo sư, tiến sĩ</h3>
                </div>
              </div>
              <div className="img-customize">
                <img src={facilyImg2} />
                <div className="position text-center">
                  <h3>Bác sĩ nổi bật 2</h3>
                  <h3>Giáo sư, tiến sĩ</h3>
                </div>
              </div>
              <div className="img-customize">
                <img src={facilyImg3} />
                <div className="position text-center">
                  <h3>Bác sĩ nổi bật 3</h3>
                  <h3>Giáo sư, tiến sĩ</h3>
                </div>
              </div>
              <div className="img-customize">
                <img src={facilyImg4} />
                <div className="position text-center">
                  <h3>Bác sĩ nổi bật 4</h3>
                  <h3>Giáo sư, tiến sĩ</h3>
                </div>
              </div>
              <div className="img-customize">
                <img src={facilyImg5} />
                <div className="position text-center">
                  <h3>Bác sĩ nổi bật 5</h3>
                  <h3>Giáo sư, tiến sĩ</h3>
                </div>
              </div>
              <div className="img-customize">
                <img src={facilyImg6} />
                <div className="position text-center">
                  <h3>Bác sĩ nổi bật 6</h3>
                  <h3>Giáo sư, tiến sĩ</h3>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
