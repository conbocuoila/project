import HomePage from "../pages/Home/HomePage";
import ProductPage from "../pages/Product/ProductPage";
import OrderPage from "../pages/Order/OrderPage";
import NFPage from "../pages/NotFoundPage/NFPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import LoginPage from "../pages/Login/LoginPage";
import ProductDetailPage from "../pages/ProductDetail/ProductDetailPage";
export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/product",
    page: ProductPage,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: OrderPage,
    isShowHeader: true,
  },
  {
    path: "/login",
    page: LoginPage,
    isShowHeader: false,
  },
  {
    path: "/signup",
    page: SignUpPage,
    isShowHeader: false,
  },
  {
    path: "/productdetailpage",
    page: ProductDetailPage,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NFPage,
  },
];
