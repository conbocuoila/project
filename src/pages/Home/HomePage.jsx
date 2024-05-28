import React from "react";
import Carousel from "../../components/Carousel/CarouselPart";
import { WrapperContent, WrapperImg, WrapperText } from "./index";
import CardComponentPart from "../../components/CardComponent/CardComponentPart";
import SubCarousel from "../../components/SubCarousel/SubCarouselPart";
import { Button } from "antd";
import TodayPart from "../../components/TodayPart/TodayPart";
import FooterPart from "../../components/Footer/FooterPart";
const HomePage = () => {
  return (
    <div>
      <Carousel />
      <div style={{ padding: "0 20px" }}>
        <WrapperContent>
          <WrapperImg src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAeCAYAAAGu64VNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEOEVGMDZDRUQwRDYxMUVCOTg4N0Q4NjI4MEExNDQwQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEOEVGMDZDRkQwRDYxMUVCOTg4N0Q4NjI4MEExNDQwQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ4RUYwNkNDRDBENjExRUI5ODg3RDg2MjgwQTE0NDBBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ4RUYwNkNERDBENjExRUI5ODg3RDg2MjgwQTE0NDBBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+v70jdgAABbRJREFUeNpi/J9qxgAGLz8wMLAwMzBBeAz/GRgZwQwmMIfpPwPD529AmhEswPgn/jQDQ95jIIuBASCAGMFmfPxazvDjVycLWNPffx1A8RMgpZf+ewOVffl+AMTR/S/2BawAIIAY4faCTH/zEaSFEWQ/yEQWqMQ2iAOAGj98hbiHh5MRZMx6IPb8nX6K4V/qDQYGrn8Q5T9+bQXpDASxWdar//9vfpOBQfAnAwO7GCPInQABhGwnA8Ozd/YMzEwHGViZ4fZBHMPKzAh0DIiFFBhg8r8kUAfYy8g6gAHz/RlYCQsT2MeuEEE2BobvENVAp38ESexi+MzB8Cf9CAPDEw4GcJD++esOknjDIPQVYlQP0Mls/0G63oMkRBn+MDX+FwOyxEEOYGtlEOARAgjAJRmkIAwDUXSSplVRbBBx4U43LjySa1eCuPWCHsEjFASl2gpFY1vnJ1GMgUAmyc+8P5PQhxuaZ07nApSCp2O2tK6N6k/wwvE3gt+GFUnkgP2QP4J1IOB/YP9DJGMy9YIuZUtNM0Va5YXoyj7IWQuHdK+eNsa6qI406GgIrr7SM+4UA0oyO+7wMgvB4a2XrFjYohBD3rrZg4cisz2QKDk910GmHngzJxob50/3R8hU0MdmFRN1/cu4fAKmX6Mok1QwZv4WgI8y1mkYiMGwk0sTVIhaRQiJBTqxdkEMPAIDQrxBN54CiZdhY0BCYmCuClMHti6UiYEqYmhLoiR3/L7cpSREnGQ1le5s//Znt5Uc1fL26HX+RFE41N4trWZImmeCoOw/1pcdo0W09+cFdmKqNNV1Ucyda2GsRehWl/lI1UcvkH9R9qmlmdM6C8WIAuDKs8Um5aD54OiPmnVyo298rcaY/TfmrE305qT5NTcN3k+18Dz/54F0NpzpfeGwrsCthtGeZUBy8IlJKRoOFK+ztD7Ba5/y0TMV5zOiWVh/4IkFrZK7WkrqIAYeWYnm4bcRLiyIu5Rml57xjqXhkjyel/ww4FcgN8DvGJEmfbLIu1W3gbgKk18l5bXBW3JZrg4GMNrx7TCdkZ+T89Er/1VCYe9AuIOwve4Fcsmshkck1REPwwWxVt8Yf9/uxxRtb5EQ93zxR4BGqya0iSAKv51NTDZtImgP9QfJpXiqWJUiePFgQXrRmyKIV73YYhE89qpgqF686knw0pN4EO+CB4uivQgi1aRK0iSl1nV3M+P3ZiZsNtkmBh6EnZn35s37vu+9dHin/5ZpX3aJqvVx+gXeTZQ8HPcTVVGWXa6bfOARjvleH2Dl+BMj3n2GWvqkZFICmAmZTD8ahkLwtmV+uU9QGGUNLUbCGqMtm7EB1ICjvYLcgT1KX3K4mufNdVUMbSY/U5X/O87IIFOwh3vmx06C6BT50XPycqYGkbR6hlrUodE7uy91pkOCLIyEADv4G16ln0049L9TEL6n9g63cT0goBHPQ+OX9QWQXVqQc/+FNccKqlJH8Hwn9RMJEQttEN2EuUwUYTXzRs/xyUGHeHvQlLYKul9QrjOAoDTlwp5OV9WPw57aKj6AbcSPiU/bed3movl1CiqvSV75hGDF4UEYYWP5i+ShF4XRLeYJBI322+W78Uakv+VR59IayZm2biYOBIpq4KDPXIEjH4WOeFLqJGVCiIi2dz8b7rgbnEkl9TYtBJhbJ3nCBNA1qHN/wYSyBHUrQwav1YgWvxlk/RFJkncVO5ep8MoT2P1EgAA3xLijjjbJ+U3xvMG7eTgswOtcg+ggNLSE216vmpEodHo7FoaA3GMa81a64e/BZhLIUY4puBhRXs4ii31Zac5w62BSHijOUslb6IfwmnV/BpL7hfuP+2pan9MKJvsbGYxnFNSWXmCIayD7vPxKRe8sTejh4p3W+aEqrLOB+2bhsjrUuiBPV6fVsdZhEYSe2BQ+bRZq9Lb0kX6Mv6FJuQpxbJsbKSMrPVPAP0SW7Y7JAFs2AAAAAElFTkSuQmCC"></WrapperImg>
          <WrapperText>Hot deals</WrapperText>
        </WrapperContent>
        <CardComponentPart />
        <SubCarousel numberOfSlice={3} />
        <WrapperText>Dành cho bạn</WrapperText>
        <CardComponentPart />
        <CardComponentPart />
        <CardComponentPart />
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px auto",
          }}
          type="primary"
          danger
        >
          Xem thêm
        </Button>
        <WrapperText>Hôm nay có gì?</WrapperText>
        <TodayPart />
        <div style={{ marginTop: 50, backgroundColor: '#ccc'}}>
         
         
        </div>
      </div>
      <FooterPart />
    </div>
  );
};

export default HomePage;
