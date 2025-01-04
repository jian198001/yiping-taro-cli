import React, { useState, CSSProperties } from "react";
// 从 @nutui/nutui-react 库中导入 ButtonProps 类型
import { ButtonProps } from "@nutui/nutui-react";
// 从 @nutui/nutui-biz 库中导入 Coupon 组件
import { Coupon } from "@nutui/nutui-biz";

// 导入 @nutui/nutui-biz 库的样式文件
import "@nutui/nutui-biz/dist/styles/demo.css";
// 导入 @nutui/nutui-biz 库的样式文件
import '@nutui/nutui-biz/dist/style.css'
// 导入 @nutui/nutui-react 库的样式文件
import '@nutui/nutui-react/dist/style.css'

/**
 * 主应用组件
 * 
 * @returns {JSX.Element} 渲染的 JSX 元素
 */
const App = () => {
  // 按钮props
  const buttonProps: Partial<ButtonProps> = React.useMemo(() => {
    return {
      // 按钮类型为主要按钮
      type: "primary",
      // 按钮尺寸为小号
      size: "small",
      // 按钮为朴素按钮
      plain: true,
      // 按钮的类名为cancel-btn
      className: "cancel-btn",
    };
  }, []);
  // 已经使用的icon标记
  const usedIcon = React.useMemo(() => {
    return (
      <img
        // 图标图片的URL
        src="https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/use-mask.60dc7c10.png"
        // 图标图片的宽度
        width="45px"
        // 图标图片的高度
        height="42px"
      />
    );
  }, []);
  // 渲染组件文案内容
  const baseCouponObj = React.useMemo(() => {
    return {
      // 优惠券金额
      price: "9",
      // 货币符号
      currency: "¥",
      // 主标题
      mainTitle: "满100元可用",
      // 副标题
      subTitle: "仅可购买满折券测试",
      // 标签
      label: <div style={{ color: "red" }}>内购专享</div>,
      // 时间范围
      timeRange: "2022.03.01-2022.04.01",
    };
  }, []);
  // 优惠券样式
  const couponBaseStyle: CSSProperties = React.useMemo(() => {
    return {
      // 优惠券宽度为100%
      width: "100%",
      // 优惠券高度自适应
      height: "auto",
      // 优惠券背景图片
      backgroundImage: `url(https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon-red.f6ae2e19.png)`,
    };
  }, []);
  // 优惠券主体样式
  const couponMainBaseStyle: CSSProperties = React.useMemo(() => {
    return {
      // 优惠券主体宽度为69%
      width: "69%",
      // 优惠券主体颜色为白色
      color: "#fff",
    };
  }, []);
  // 按钮文案
  const [btnText, setBtnText] = useState("立即领取");
  // 是否点击了立即领取按钮
  const [receivedStatus, setReceivedStatus] = useState(false);
  /**
   * 点击按钮时的回调函数
   * 
   * @returns {void}
   */
  const basedOnClick = React.useCallback(() => {
    // 设置按钮文案为"已领取"
    setBtnText("已领取");
    // 设置领取状态为已领取
    setReceivedStatus(true);
  }, [btnText, receivedStatus]);
  // 示例样式
  const demoStyle = {
    // 高度为100%
    height: "100%",
    // 溢出时自动滚动
    overflow: "auto",
    // 内边距
    padding: "17px 17px 0 17px",
  };
  return (
    // 示例容器，包含一个Coupon组件
    <div style={demoStyle}>
      {/* Coupon组件，用于显示优惠券 */}
      <Coupon
        // 价格位置在背面
        pricePosition="back"
        // 优惠券样式
        couponStyle={couponBaseStyle}
        // 优惠券主体样式
        couponMainStyle={couponMainBaseStyle}
        // 优惠券数据
        couponData={baseCouponObj}
        // 按钮文案
        btnText={btnText}
        // 是否已领取
        isReceived={receivedStatus}
        // 已使用图标
        usedIcon={usedIcon}
        // 按钮属性
        buttonProps={buttonProps}
        // 按钮点击事件处理函数
        onBtnClick={basedOnClick}
      ></Coupon>
    </div>
  );
};

// 导出App组件作为默认导出
export default App;