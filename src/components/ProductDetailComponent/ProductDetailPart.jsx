import { Button, Col, Image, InputNumber, Row } from "antd";
import React from "react";
import img from "../../assets/sua-aptamil-duc-so-3-800g.jpg";
import imgSmall from "../../assets/sua-enfamama-a-vani-830g6.jpg";
import {
  WraperPrice,
  WraperQuantity,
  WrapperAddress,
  WrapperImg,
  WrapperText,
} from "./index";
import { MinusOutlined, PlusOutlined, StarFilled } from "@ant-design/icons";
const ProductDetailPart = () => {
  const onChange = () => {};
  return (
    <div style={{ background: "#efefef", height: 600 }}>
      <Row style={{ padding: "10px" }}>
        <Col span={10}>
          <Image
            style={{ height: 389, width: 497 }}
            src={img}
            alt="img"
            preview={false}
          />
          <div>
            <Row style={{ paddingTop: "10px" }}>
              <Col span={8}>
                <WrapperImg src={imgSmall} alt="img" preview={false} />
              </Col>
              <Col span={8}>
                <WrapperImg src={imgSmall} alt="img" preview={false} />
              </Col>
              <Col span={8}>
                <WrapperImg src={imgSmall} alt="img" preview={false} />
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={14}>
          <WrapperText>
            Sữa Meiji số 0 nội địa Nhật 800g (0 - 1 tuổi)
          </WrapperText>
          <div
            style={{
              marginLeft: 20,
              gap: "3px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <StarFilled
              style={{ color: "rgb(253,216,54)", fontSize: "15px" }}
            />
            <StarFilled
              style={{ color: "rgb(253,216,54)", fontSize: "15px" }}
            />
            <StarFilled
              style={{ color: "rgb(253,216,54)", fontSize: "15px" }}
            />
            <StarFilled
              style={{ color: "rgb(253,216,54)", fontSize: "15px" }}
            />
            <StarFilled
              style={{ color: "rgb(253,216,54)", fontSize: "15px" }}
            />
            <div style={{ marginTop: "-2px" }}>
              {" "}
              (Xem sao đánh giá) | Đã bán 34
            </div>
          </div>
          <WraperPrice>200.000</WraperPrice>
          <WrapperAddress>
            <span> Giao đến </span>
            <span className="address">Q. 1 P. Bến Nghé, Hồ Chí Minh</span>
            <span> - </span>
            <span className="changeaddress"> Đổi địa chỉ </span>
          </WrapperAddress>

          <div style={{ marginLeft: 20 }}>
            <h4>Số lượng</h4>
            <WraperQuantity>
              <MinusOutlined />
              <InputNumber
                style={{ width: "30px" }}
                defaultValue={1}
                onChange={onChange}
              />
              <PlusOutlined />
            </WraperQuantity>
          </div>

          <div
            style={{
              marginLeft: "20px",
              marginTop: 20,
              display: "flex",
              gap: "10px",
            }}
          >
            <Button style={{ width: 189, height: 45 }} type="primary" danger>
              <strong>Chọn Mua</strong>
            </Button>
            <Button style={{ width: 189, height: 45 }}>
              <strong>Mua trước trả sau</strong>
              <p style={{ marginTop: "-6px" }}>Lãi suất 0%</p>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailPart;
