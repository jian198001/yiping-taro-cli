import React, { useState } from "react";
import { Cell, ButtonProps, TextAreaProps } from "@nutui/nutui-react";
import { OrderCancelPanel } from "@nutui/nutui-biz";

import "@nutui/nutui-biz/dist/styles/demo.css";
import '@nutui/nutui-biz/dist/style.css'
import '@nutui/nutui-react/dist/style.css'

const App = () => {
  const warmTips = [
    "1. 限时特价、预约资格等购买优惠可能一并取消",
    "2. 如遇订单拆分，京券将换成同价值京豆返还",
    "3. 支付券不予返还；支付优惠一并取消",
    "4. 订单一旦取消，无法恢复",
  ];
  const otherReasonList = [
    {
      key: "reasons1",
      value: "商品无货",
    },
    {
      key: "reasons2",
      value: "发货时间问题",
    },
    {
      key: "reasons3",
      value: "不想要了",
    },
    {
      key: "reasons4",
      value: "商品选错/多选",
    },
    {
      key: "reasons5",
      value: "地址信息填写错误",
    },
    {
      key: "reasons6",
      value: "商品降价",
    },
    {
      key: "other",
      value: "其它",
    },
  ];

  const submitBtn = React.useCallback(
    (
      selectedReason: IreasonsObject,
      textAreaValue: string,
      switchStatus: boolean
    ) => {
      console.log(
        `selectedReason:${JSON.stringify(
          selectedReason
        )}, textAreaValue:${textAreaValue},switchStatus:${switchStatus}`
      );
      clickClosePopUpThree();
    },
    []
  );
  //基本使用
  const [showOtherCancelPanel, setShowOtherCancelPanel] = useState(false);
  const clickClosePopUpThree = React.useCallback(() => {
    setShowOtherCancelPanel(false);
  }, [showOtherCancelPanel]);

  const buttonProps: Partial<ButtonProps> = React.useMemo(() => {
    return {
      type: "primary",
      className: "cancel-btn",
    };
  }, []);
  const textareaProps: Partial<TextAreaProps> = React.useMemo(() => {
    return {
      placeholder: "请输入内容",
      rows: "3",
      limitshow: true,
      maxlength: 100,
    };
  }, []);
  const popupTitleMemo = React.useMemo(() => {
    return <div>退款原因</div>;
  }, []);
  return (
    <>
      <div className="demo">
        <Cell
          title="带有其它原因选项的组件"
          onClick={() => setShowOtherCancelPanel(true)}
        />
        <OrderCancelPanel
          showCancelPanel={showOtherCancelPanel}
          popupTitle={popupTitleMemo}
          submitText="确认"
          cancelReason={otherReasonList}
          buttonProps={buttonProps}
          textAreaProps={textareaProps}
          onClose={clickClosePopUpThree}
          onSubmitBtn={submitBtn}
        />
      </div>
    </>
  );
};
export default App;