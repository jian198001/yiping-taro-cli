export default defineAppConfig({
  pages: [
    "pages/frontPage/index/index",
    "pages/userCenter/trade/tradeOrder/detail/index",
    "pages/userCenter/trade/tradeOrder/update/index",
    "pages/frontPage/trade/goods/category/index",
    "pages/frontPage/trade/goods/goods/detail/index",
    "pages/frontPage/trade/cart/index",
    "pages/userCenter/trade/receiveAddress/update/index",
    "pages/userCenter/trade/receiveAddress/page/index",
    "pages/frontPage/trade/card/coupon/index",
    "pages/frontPage/passport/login/index",
    "pages/index/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "app",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/frontPage/index/index",
        text: "首页",
      },
      {
        pagePath: "pages/frontPage/trade/goods/category/index",
        text: "分类",
      },
      {
        pagePath: "pages/frontPage/trade/cart/index",
        text: "购物车",
      },
      {
        pagePath: "pages/userCenter/page/index",
        text: "我的",
      },
    ],
  },
});
