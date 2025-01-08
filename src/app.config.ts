/**
 * 定义应用配置
 * @description 这个配置对象定义了应用的页面、窗口和底部导航栏的配置。
 */
export default defineAppConfig({
  // 定义应用的页面路由
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
  // 定义应用窗口的配置
  window: {
    // 窗口背景文字样式
    backgroundTextStyle: "light",
    // 导航栏背景颜色
    navigationBarBackgroundColor: "#fff",
    // 导航栏标题文字
    navigationBarTitleText: "app",
    // 导航栏文字样式
    navigationBarTextStyle: "black",
  },
  // 定义应用底部导航栏的配置
  tabBar: {
    // 导航栏列表
    list: [
      {
        // 页面路径
        pagePath: "pages/frontPage/index/index",
        // 导航栏文字
        text: "首页",
      },
      {
        // 页面路径
        pagePath: "pages/frontPage/trade/goods/category/index",
        // 导航栏文字
        text: "分类",
      },
      {
        // 页面路径
        pagePath: "pages/frontPage/trade/cart/index",
        // 导航栏文字
        text: "购物车",
      },
      {
        // 页面路径
        pagePath: "pages/userCenter/page/index",
        // 导航栏文字
        text: "我的",
      },
    ],
  },
});
