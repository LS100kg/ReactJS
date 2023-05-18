import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import facilyImg from "../../../assets/specialty/benh-vien-an-viet.jpg";

class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-share section-medical-facility">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Co so y te noi bat</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Co so y te noi bat 1</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Co so y te noi bat 2</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Co so y te noi bat 3</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Co so y te noi bat 4</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Co so y te noi bat 5</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>Co so y te noi bat 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
