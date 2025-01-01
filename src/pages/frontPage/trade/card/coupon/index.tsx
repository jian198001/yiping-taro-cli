import React, { useState, CSSProperties } from "react";
import { ButtonProps } from "@nutui/nutui-react";
import { Coupon } from "@nutui/nutui-biz";

import "@nutui/nutui-biz/dist/styles/demo.css";
import '@nutui/nutui-biz/dist/style.css'
import '@nutui/nutui-react/dist/style.css'

const App = () => {
  //按钮props
  const buttonProps: Partial<ButtonProps> = React.useMemo(() => {
    return {
      type: "primary",
      size: "small",
      plain: true,
      className: "cancel-btn",
    };
  }, []);

  //已经使用的icon标记
  const usedIcon = React.useMemo(() => {
    return (
      <img
        src="https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/use-mask.60dc7c10.png"
        width="45px"
        height="42px"
      />
    );
  }, []);
  //渲染组件文案内容
  const baseCouponObj = React.useMemo(() => {
    return {
      price: "9",
      currency: "¥",
      mainTitle: "满100元可用",
      subTitle: "仅可购买满折券测试",
      label: <div style={{ color: "red" }}>内购专享</div>,
      timeRange: "2022.03.01-2022.04.01",
    };
  }, []);
  //优惠券样式
  const couponBaseStyle: CSSProperties = React.useMemo(() => {
    return {
      width: "100%",
      height: "auto",
      backgroundImage: `url(https://storage.360buyimg.com/jdcdkh/open/1.0.0/assets/bg-coupon-red.f6ae2e19.png)`,
    };
  }, []);
  //优惠券主体样式
  const couponMainBaseStyle: CSSProperties = React.useMemo(() => {
    return {
      width: "69%",
      color: "#fff",
    };
  }, []);
  //按钮文案
  const [btnText, setBtnText] = useState("立即领取");
  //是否点击了立即领取按钮
  const [receivedStatus, setReceivedStatus] = useState(false);
  const basedOnClick = React.useCallback(() => {
    setBtnText("已领取");
    setReceivedStatus(true);
  }, [btnText, receivedStatus]);
  const demoStyle = {
    height: "100%",
    overflow: "auto",
    padding: "17px 17px 0 17px",
  };
  return (
    <div style={demoStyle}>
      <Coupon
        pricePosition="back"
        couponStyle={couponBaseStyle}
        couponMainStyle={couponMainBaseStyle}
        couponData={baseCouponObj}
        btnText={btnText}
        isReceived={receivedStatus}
        usedIcon={usedIcon}
        buttonProps={buttonProps}
        onBtnClick={basedOnClick}
      ></Coupon>
    </div>
  );
};
export default App;