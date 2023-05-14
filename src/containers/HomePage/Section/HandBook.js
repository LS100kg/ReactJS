import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import facilyImg from "../../../assets/specialty/141836-bs-le-quoc-viet.png";

class HandBook extends Component {
  render() {
    return (
      <div className="section-share section-handbook">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Cẩm nang</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="specialty-body">
            <Slider {...this.props.settings}>
              <div className="img-customize">
                <img src={facilyImg} />
                <div className="position text-center">
                  <h3>Cẩm nang 1</h3>
                </div>
              </div>
              <div className="img-customize">
                <img src={facilyImg} />
                <div className="position text-center">
                  <h3>Cẩm nang 2</h3>
                </div>
              </div>
              <div className="img-customize">
                <img src={facilyImg} />
                <div className="position text-center">
                  <h3>Cẩm nang 3</h3>
                </div>
              </div>
              <div className="img-customize">
                <img src={facilyImg} />
                <div className="position text-center">
                  <h3>Cẩm nang 4</h3>
                </div>
              </div>
              <div className="img-customize">
                <img src={facilyImg} />
                <div className="position text-center">
                  <h3>Cẩm nang 5</h3>
                </div>
              </div>
              <div className="img-customize">
                <img src={facilyImg} />
                <div className="position text-center">
                  <h3>Cẩm nang 6</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
