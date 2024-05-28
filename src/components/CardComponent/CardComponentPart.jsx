import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import img from "../../assets/sua-aptamil-duc-so-2-800g.jpg";
import img1 from "../../assets/sua-aptamil-duc-so-3-800g.jpg";
import img2 from "../../assets/sua-enfamama-a-choco-830g6.jpg";
import img3 from "../../assets/sua-enfamama-a-vani-830g6.jpg";
import img4 from "../../assets/sua-meiji-infant-formula-800g-0-12m.jpg";

import { WrapperBox } from "./index";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const CardComponentPart = () => {
  return (
    <WrapperBox>
      <Link style={{ textDecoration: "none" }} to={"/productDetailPage"}>
        <Card
          hoverable
          style={{ width: 230 }}
          cover={<img alt="example" src={img} />}
        >
          <Meta title="Aptamil" />
          <div
            style={{
              backgroundColor: "#f12c2c",
              padding: "5px 5px",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              width: "100px",
              fontSize: "11px",
            }}
          >
            <span>
              <strong>Đang có Hot Deal</strong>
            </span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <p style={{ fontSize: "21px", marginTop: "-2px" }}>1.000.000</p>
            <span style={{ marginTop: "2px", textDecoration: "line-through" }}>
              1.200.000
            </span>
          </div>
          <div style={{ display: "flex", gap: "10px", marginTop: "-22px" }}>
            <Button
              style={{
                backgroundColor: "#f12c2c",
                color: "#fff",
                borderRadius: "50%",
              }}
            >
              <ShoppingCartOutlined />
            </Button>
            <span style={{ marginTop: 4 }}>Thêm vào giỏ</span>
          </div>
          <p>Còn 18 sản phẩm</p>
        </Card>
      </Link>
      <Card
        hoverable
        style={{ width: 230 }}
        cover={<img alt="example" src={img1} />}
      >
        <Meta title="Aptamil" />
        <div
          style={{
            backgroundColor: "#f12c2c",
            padding: "5px 5px",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            width: "100px",
            fontSize: "11px",
          }}
        >
          <span>
            <strong>Đang có Hot Deal</strong>
          </span>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <p style={{ fontSize: "21px", marginTop: "-2px" }}>1.000.000</p>
          <span style={{ marginTop: "2px", textDecoration: "line-through" }}>
            1.200.000
          </span>
        </div>
        <div style={{ display: "flex", gap: "10px", marginTop: "-22px" }}>
          <Button
            style={{
              backgroundColor: "#f12c2c",
              color: "#fff",
              borderRadius: "50%",
            }}
          >
            <ShoppingCartOutlined />
          </Button>
          <span style={{ marginTop: 4 }}>Thêm vào giỏ</span>
        </div>
        <p>Còn 20 sản phẩm</p>
      </Card>
      <Card
        hoverable
        style={{ width: 230 }}
        cover={<img alt="example" src={img2} />}
      >
        <Meta title="Enfamama" />
        <div
          style={{
            backgroundColor: "#f12c2c",
            padding: "5px 5px",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            width: "100px",
            fontSize: "11px",
          }}
        >
          <span>
            <strong>Đang có Hot Deal</strong>
          </span>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <p style={{ fontSize: "21px", marginTop: "-2px" }}>1.000.000</p>
          <span style={{ marginTop: "2px", textDecoration: "line-through" }}>
            2.200.000
          </span>
        </div>
        <div style={{ display: "flex", gap: "10px", marginTop: "-22px" }}>
          <Button
            style={{
              backgroundColor: "#f12c2c",
              color: "#fff",
              borderRadius: "50%",
            }}
          >
            <ShoppingCartOutlined />
          </Button>
          <span style={{ marginTop: 4 }}>Thêm vào giỏ</span>
        </div>
        <p>Còn 38 sản phẩm</p>
      </Card>
      <Card
        hoverable
        style={{ width: 230 }}
        cover={<img alt="example" src={img3} />}
      >
        <Meta title="Meiji Infant Formula" />
        <div
          style={{
            backgroundColor: "#f12c2c",
            padding: "5px 5px",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            width: "100px",
            fontSize: "11px",
          }}
        >
          <span>
            <strong>Đang có Hot Deal</strong>
          </span>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <p style={{ fontSize: "21px", marginTop: "-2px" }}>1.500.000</p>
          <span style={{ marginTop: "2px", textDecoration: "line-through" }}>
            1.900.000
          </span>
        </div>
        <div style={{ display: "flex", gap: "10px", marginTop: "-22px" }}>
          <Button
            style={{
              backgroundColor: "#f12c2c",
              color: "#fff",
              borderRadius: "50%",
            }}
          >
            <ShoppingCartOutlined />
          </Button>
          <span style={{ marginTop: 4 }}>Thêm vào giỏ</span>
        </div>
        <p>Còn 118 sản phẩm</p>
      </Card>
      <Card
        hoverable
        style={{ width: 230 }}
        cover={<img alt="example" src={img4} />}
      >
        <Meta title="Meiji Infant Formula" />
        <div
          style={{
            backgroundColor: "#f12c2c",
            padding: "5px 5px",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            width: "100px",
            fontSize: "11px",
          }}
        >
          <span>
            <strong>Đang có Hot Deal</strong>
          </span>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <p style={{ fontSize: "21px", marginTop: "-2px" }}>1.300.000</p>
          <span style={{ marginTop: "2px", textDecoration: "line-through" }}>
            1.600.000
          </span>
        </div>
        <div style={{ display: "flex", gap: "10px", marginTop: "-22px" }}>
          <Button
            style={{
              backgroundColor: "#f12c2c",
              color: "#fff",
              borderRadius: "50%",
            }}
          >
            <ShoppingCartOutlined />
          </Button>
          <span style={{ marginTop: 4 }}>Thêm vào giỏ</span>
        </div>
        <p>Còn 180 sản phẩm</p>
      </Card>
    </WrapperBox>
  );
};

export default CardComponentPart;
