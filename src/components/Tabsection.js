import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function Tabsection() {
  return (
    <>
      <div className="card-container">
        <Tabs defaultActiveKey="2" type="card">
          <TabPane tab="First Tab" key="1">
            <h3 className="m-0">This is content of tab 1</h3>
            <p className="m-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum excepturi esse velit, corporis iusto quia neque dolores
              error rerum quo.
            </p>
          </TabPane>
          <TabPane tab="Second Tab" key="2">
            <h3 className="m-0">This is content of tab 2</h3>
            <p className="m-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
              necessitatibus nesciunt! Quae recusandae et quisquam hic qui quis,
              iusto blanditiis voluptates ad! Perspiciatis consectetur cum dolor
              accusantium aliquid voluptatibus consequatur ad perferendis itaque
              quia illum unde ab ipsam tempora totam id amet ut, fugiat dolores
              iure. Tempore expedita quibusdam harum amet est iusto quis
              veritatis! Obcaecati aspernatur pariatur explicabo assumenda enim
              dolor asperiores modi voluptatum dolore animi facere, odit illo
              neque, vero labore nisi veniam reprehenderit fuga molestias cumque
              facilis?
            </p>
          </TabPane>
          <TabPane tab="Third Tab" key="3">
            <h3 className="m-0">This is content of tab 3</h3>
            <p className="m-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              eveniet reprehenderit! Excepturi pariatur dicta officiis dolore,
              tempora fuga dignissimos ea exercitationem magni eaque nisi
              possimus inventore ab cumque aliquam quisquam nulla quia illo
              placeat! Porro officia praesentium cupiditate cumque voluptatum
              vitae, amet libero exercitationem unde, perspiciatis similique
              officiis qui ullam?
            </p>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default Tabsection;
