import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import facilyImg from "../../../assets/specialty/benh-vien-an-viet.jpg";

class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-share section-facily">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Cơ sở y tế nổi bật</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="specialty-body">
            <Slider {...this.props.settings}>
              <div className="img-customize">
                <img src={facilyImg} />
                <h3>Cơ sở y tế nổi bật 1</h3>
              </div>
              <div className="img-customize">
                <img src={facilyImg} />
                <h3>Cơ sở y tế nổi bật 2</h3>
              </div>
              <div className="img-customize">
                <img src={facilyImg} />
                <h3>Cơ sở y tế nổi bật 3</h3>
              </div>
              <div className="img-customize">
                <img src={facilyImg} />
                <h3>Cơ sở y tế nổi bật 4</h3>
              </div>
              <div className="img-customize">
                <img src={facilyImg} />
                <h3>Cơ sở y tế nổi bật 5</h3>
              </div>
              <div className="img-customize">
                <img src={facilyImg} />
                <h3>Cơ sở y tế nổi bật 6</h3>
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
