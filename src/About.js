import React from "react";
import { Card, Button, Row, Col, Divider, Space } from "antd";

function About() {
  return (
    <>
      <span id="about"></span>
      <h2>About</h2>
      <p>
        <strong>some text in about section ...</strong>Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Ea quisquam autem porro aperiam
        dolorem delectus iusto eius tenetur dolores nihil.
      </p>
      <Divider orientation="left">Cards</Divider>

      <Row gutter={16}>
        <Col className="gutter-row" span={6} sm={24} md={18} lg={12}>
          <Card className="shadow  border-radius-10 m-10" bordered={false}>
            <h3>Card</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              excepturi.
            </p>
            <Button className="bg-primary border border-primary text-dark">Button</Button>
          </Card>
        </Col>
        <Col
          className="gutter-row"
          span={6}
          sm={24}
          md={18}
          lg={12}
        >
          <Card className="shadow  text-center  border-radius-10 m-10" bordered={false}>
            <h3>Card</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              excepturi.
            </p>
            <Button className="bg-warning border border-warning text-dark" block={true}>
              Block Button
            </Button>
          </Card>
        </Col>
        <Col className="gutter-row" span={6} sm={24} md={18} lg={12}>
          <Card className="shadow text-center  border-radius-10 m-10" bordered={false}>
            <h3>Card</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam totam exercitationem omnis soluta iure quasi neque ipsum aspernatur pariatur magni iusto sequi, perspiciatis ad distinctio hic possimus quas harum suscipit. Aliquid optio exercitationem, voluptatum dicta totam inventore sequi. Saepe, magni?
            </p>
            <Button className="bg-dark border text-white border-dark">
              Button
            </Button>
          </Card>
        </Col>
        <Col className="gutter-row" span={6} sm={24} md={18} lg={12}>
          <Card className="shadow  border-radius-10 m-10" bordered={false}>
            <h3>Card</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quaerat, maiores autem earum odit eos impedit corporis laudantium voluptatibus ratione.
            </p>
            <Button className="bg-danger border border-danger text-white">Button</Button>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default About;
