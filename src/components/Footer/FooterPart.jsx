import { Col } from "antd";
import React from "react";
import { WrapperBox, WrapperText } from "./index";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { SiFacebook } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import "./index.scss";
const FooterPart = () => {
  return (
    <div style={{paddingTop: '30px'}}>
      <div className="imgFooter">
        <img
          src="https://t4.ftcdn.net/jpg/03/10/75/47/360_F_310754706_rmIkSnBb2kl4zaALJmA0JDzcWLqABQ8t.jpg"
          alt="img"
        ></img>
      </div>
      <WrapperBox>
        <Col span={6}>
          <WrapperText>
            <p>VỀ BIBOMART</p>
          </WrapperText>
          <li style={{ listStyle: "none" }}>
            <Link to={"/gioithieu"} style={{ color: "#000" }}>
              Giới thiệu
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link to={"/dánhach"} style={{ color: "#000" }}>
              Danh sách cửa hàng
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link to={"/gioithieu"} style={{ color: "#000" }}>
              Cẩm nang cho mẹ
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link to={"/dánhach"} style={{ color: "#000" }}>
              Liên hệ
            </Link>
          </li>
        </Col>
        <Col span={6}>
          <WrapperText>
            <p>HỖ TRỢ KHÁCH HÀNG</p>
          </WrapperText>
          <li style={{ listStyle: "none" }}>
            <Link to={"/gioithieu"} style={{ color: "#000" }}>
              Hotline miễn phí: 1800 000
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link to={"/gioithieu"} style={{ color: "#000" }}>
              Cẩm nang cho mẹ
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link to={"/dánhach"} style={{ color: "#000" }}>
              CS đổi hàng
            </Link>
          </li>
        </Col>
        <Col span={6}>
          <WrapperText>
            <p>HỆ THỐNG TIỆN ÍCH</p>
          </WrapperText>
          <li style={{ listStyle: "none" }}>
            <Link to={"/gioithieu"} style={{ color: "#000" }}>
              Kiểm tra đơn hàng
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link to={"/gioithieu"} style={{ color: "#000" }}>
              Phương thức thanh toán
            </Link>
          </li>
        </Col>
        <Col span={6}>
          <WrapperText>
            <p>THEO DÕI CHÚNG TÔI</p>{" "}
          </WrapperText>
          <li style={{ listStyle: "none" }}>
            <Link to={"/gioithieu"} style={{ color: "#000" }}>
              Đăng kí nhận bản tin
            </Link>
          </li>
          <div className="header_searchf">
            <input
              style={{ fontSize: 15, outline: "none" }}
              type="text"
              placeholder="Nhập email đăng kí"
            ></input>
            <SearchOutlined
              style={{
                backgroundColor: "#f6412d",
                padding: "8px 20px",
                color: "#fff",
              }}
              placeholder="Đăng kí"
              className="iconsearch"
            />
          </div>
          <SiFacebook style={{ padding: "10px 0" }} size={27} />
          <FaTiktok style={{ padding: "10px 20px" }} size={27} />
        </Col>
      </WrapperBox>
    </div>
  );
};

export default FooterPart;
