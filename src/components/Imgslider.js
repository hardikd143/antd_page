import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "300px",
  lineHeight: "300px",
  textAlign: "center",
  display:'flex',
  'justify-content':'center',
  'align-items':'center'
};
function Imgslider() {
  return (
    <>
    <div class="imgslider">
      <Carousel autoplay >
        <div>
          <div style={contentStyle} class="bg-danger">
            <h2>1</h2>
          </div>
        </div>
        <div>
          <div style={contentStyle} class="bg-success">
            <h2>2</h2>
          </div>
        </div>
        <div>
          <div style={contentStyle} class="bg-primary">
            <h2>3</h2>
          </div>
        </div>
        <div>
          <div style={contentStyle} class="bg-dark">
            <h2>4</h2>
          </div>
        </div>
      </Carousel>
    </div>
      
    </>
  );
}

export default Imgslider;
