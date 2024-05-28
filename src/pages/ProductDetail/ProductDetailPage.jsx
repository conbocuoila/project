import React from "react";
import ProductDetailPart from "../../components/ProductDetailComponent/ProductDetailPart";
import FooterPart from "../../components/Footer/FooterPart";
import { WrapperDes, WrapperDes2, WrapperMore, WrapperText } from "./index";
import CardComponentPart from "../../components/CardComponent/CardComponentPart";
const ProductDetailPage = () => {
  return (
    <div>
      <ProductDetailPart />
      <div style={{ padding: "0 20px" }}>
        <WrapperDes>Mô tả sản phẩm</WrapperDes>
        <WrapperText>
          Sữa Meiji của Nhật là dòng sữa quốc dân đối với các gia đình nuôi con
          nhỏ. Với đối tượng trẻ sơ sinh từ 0 - 12 tháng tuổi, Meiji giới thiệu
          đến ba mẹ dòng sữa Meiji số 0 có tính mát và chứa nhiều các dưỡng chất
          thiết yếu, đảm bảo bù đắp sự thiếu hụt dinh dưỡng cho bé trong giai
          đoạn đầu đời quan
        </WrapperText>
      </div>
      <WrapperMore>Xem thêm</WrapperMore>
      <div style={{padding: '0 20px'}}>
        <WrapperDes2>Thường được mua cùng</WrapperDes2>
        <CardComponentPart />
        <WrapperDes2>Sản phẩm tương tự</WrapperDes2>
        <CardComponentPart />
      </div>
      <FooterPart />
    </div>
  );
};

export default ProductDetailPage;
