import React from "react";
import { Collapse, Divider } from "antd";

const { Panel } = Collapse;

function Faq() {
  return (
    <>
      <span id="faq"></span>
      <Divider orientation="left"><h3>FAQ</h3></Divider>

      <Collapse defaultActiveKey="2">
        <Panel header="This is header 1" key="1">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium aut obcaecati enim blanditiis maxime quod explicabo
            cupiditate tempora incidunt maiores dolorum ad similique, sequi
            sapiente consequatur sed harum amet cumque? Velit, expedita
            excepturi voluptate molestiae necessitatibus ipsam quos quo omnis.
          </p>
          <Collapse >
            <Panel header="This is nest panel" key="1">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda et iure quae magni possimus repudiandae!</p>
            </Panel>
          </Collapse>
        </Panel>
        <Panel header="This is header 2" key="2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
            quam.
          </p>
        </Panel>
        <Panel header="This is header 3" key="3">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nam
            placeat ipsum sit vero autem, numquam vitae dignissimos sapiente
            asperiores.
          </p>
        </Panel>
      </Collapse>
    </>
  );
}

export default Faq;
