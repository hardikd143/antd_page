import { render } from "@testing-library/react";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import "../css/sidebar.css";
import "antd/dist/antd.css";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import React, { Component } from "react";
import Maincontent from "./Maincontent";
import Loginmodal from "./Loginmodal";

const { Header, Sider, Content } = Layout;
const ProfileMenu = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#" className="w-120 d-inline-block ">
        Profile
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#" className="w-120 d-inline-block ">
        Settings
      </a>
    </Menu.Item>
    <Menu.Item>
      <Loginmodal />
    </Menu.Item>
  </Menu>
);

class Sidebar extends Component {
  state = {
    collapsed: false,
    viewSider: true,
  };
  toggle = () => {
    this.setState({
      viewSider: !this.state.viewSider,
    });
  };
  render() {
    const sidebarStyle = {

      position:'absolute',
      height:'100vh',
      top:'0',
      left: this.state.viewSider ? "0" : "-200px",
      'transition':'all 0.5s linear',
    };
    const contentStyle = {
      'margin-left': this.state.viewSider ? "200px" : "0",
      'transition':'all 0.5s linear',
    };
    return (
      <>
        <Layout className="h100">
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            style={sidebarStyle}
            className="pt-60 "
          >
            <div className="logo"></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" className="m-0">
                <a href="#home" rel="noopener noreferrer">
                  Home
                </a>
              </Menu.Item>
              <Menu.Item key="2" className="m-0">
                <a href="#about" rel="noopener noreferrer">
                  About
                </a>
              </Menu.Item>
              <Menu.Item key="3" className="m-0">
                <a href="#faq" rel="noopener noreferrer">
                  FAQ
                </a>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout " style={contentStyle}>
            <Header
              className="site-layout-background h-60 p-10 d-flex justify-content-between align-items-center"
              style={{ padding: 0 }}
            >
              {React.createElement(
                this.state.viewSider ? CloseIcon : MenuIcon,
                {
                  className: "trigger font-30",
                  onClick: this.toggle,
                }
              )}
              <Dropdown overlay={ProfileMenu} placement="bottomLeft">
                <Avatar
                  shape="square"
                  size={40}
                  icon={<PersonIcon />}
                  className="d-flex justify-content-center  align-items-center"
                />
              </Dropdown>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                maxHeight: "calc(100% - 60px)",
                overflow: "scroll",
                minHeight: 280,
              }}
            >
              <Maincontent />
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default Sidebar;
