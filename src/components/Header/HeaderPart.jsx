import {
  BellOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { Badge } from "antd";
import { WrapperText } from "./index";
const HeaderPart = () => {
  return (
    <div>
      <div className="top_img">
        <img
          style={{ width: "100%" }}
          src="https://cdn1.concung.com/img/adds/2024/05/1716552097-TOP(1).png"
          alt="img"
        ></img>
      </div>
      <WrapperText
        style={{ color: "#000", marginTop: "-5px" }}
        className="header_more"
      >
        <span style={{ marginLeft: 650 }}>
          <ShopOutlined /> Hệ thống{" "}
          <strong style={{ color: "#f6412d" }}>126</strong> cửa hàng{" "}
        </span>
        <span>
          <PhoneOutlined />
          Hotline: <strong style={{ color: "#f6412d" }}>0335785107</strong>{" "}
          (miễn phí){" "}
        </span>
        <Link
          style={{ textDecoration: "none", color: "#000" }}
          to={"/taikhoan"}
        >
          <UserOutlined />
          Tài khoản
        </Link>
      </WrapperText>
      <div className="header">
        <div className="header_logo">
          <Link to={"/"}>
            <img
              src="https://bibomart.com.vn/logo_logo.png"
              width={200}
              alt="img"
            ></img>
          </Link>
        </div>
        <div className="header_search">
          <input type="text" placeholder="Mẹ cần tìm gì cho bé hôm nay"></input>
          <SearchOutlined className="iconsearch" />
        </div>
        <nav className="header_nav">
          <li style={{ display: "flex", flexDirection: "column" }}>
            <Link to={"/giohang"}>
              <Badge count={1} size="small">
                <ShoppingCartOutlined className="icon" />
              </Badge>
            </Link>
            <span style={{ fontSize: "12px" }}>Giỏ hàng</span>
          </li>

          <li style={{ display: "flex", flexDirection: "column" }}>
            <Link to={"/thongbao"}>
              <BellOutlined className="icon" />
            </Link>
            <span style={{ fontSize: "12px" }}>Thông báo</span>
          </li>
          <li style={{ display: "flex", flexDirection: "column" }}>
            <Link to={"/donhang"}>
              <ShoppingOutlined className="icon" />
            </Link>
            <span style={{ fontSize: "12px" }}>Đơn hàng</span>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default HeaderPart;
