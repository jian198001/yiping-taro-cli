import React, { useState } from "react";
// 从 @nutui/nutui-react 库中导入 Cell、ButtonProps 和 TextAreaProps 组件
import { Cell, ButtonProps, TextAreaProps } from "@nutui/nutui-react";
// 从 @nutui/nutui-biz 库中导入 OrderCancelPanel 组件
import { OrderCancelPanel } from "@nutui/nutui-biz";

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
  // 定义一个数组，包含取消订单时的温馨提示信息
  const warmTips = [
    "1. 限时特价、预约资格等购买优惠可能一并取消",
    "2. 如遇订单拆分，京券将换成同价值京豆返还",
    "3. 支付券不予返还；支付优惠一并取消",
    "4. 订单一旦取消，无法恢复",
  ];
  // 定义一个数组，包含其他取消订单的原因选项
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

  /**
   * 处理提交按钮点击事件的回调函数
   * 
   * @param {IreasonsObject} selectedReason - 选中的取消原因对象
   * @param {string} textAreaValue - 文本区域输入的值
   * @param {boolean} switchStatus - 开关状态
   */
  const submitBtn = React.useCallback(
    (
      selectedReason: IreasonsObject,
      textAreaValue: string,
      switchStatus: boolean
    ) => {
      // 打印选中的取消原因、文本区域输入的值和开关状态
      console.log(
        `selectedReason:${JSON.stringify(
          selectedReason
        )}, textAreaValue:${textAreaValue},switchStatus:${switchStatus}`
      );
      // 调用关闭弹出框的函数
      clickClosePopUpThree();
    },
    []
  );
  // 基本使用
  // 使用 useState 钩子来管理是否显示其他取消原因面板的状态
  const [showOtherCancelPanel, setShowOtherCancelPanel] = useState(false);
  /**
   * 关闭弹出框的回调函数
   */
  const clickClosePopUpThree = React.useCallback(() => {
    // 设置显示其他取消原因面板的状态为 false
    setShowOtherCancelPanel(false);
  }, [showOtherCancelPanel]);
  /**
   * 定义按钮的属性
   */
  const buttonProps: Partial<ButtonProps> = React.useMemo(() => {
    return {
      type: "primary",
      className: "cancel-btn",
    };
  }, []);
  /**
   * 定义文本区域的属性
   */
  const textareaProps: Partial<TextAreaProps> = React.useMemo(() => {
    return {
      placeholder: "请输入内容",
      rows: "3",
      limitshow: true,
      maxlength: 100,
    };
  }, []);
  /**
   * 定义弹出框标题的记忆化组件
   */
  const popupTitleMemo = React.useMemo(() => {
    return <div>退款原因</div>;
  }, []);
  return (
    <>
      <div className="demo">
        {/* Cell 组件，点击时显示 OrderCancelPanel 组件 */}
        <Cell
          title="带有其它原因选项的组件"
          onClick={() => setShowOtherCancelPanel(true)}
        />
        {/* OrderCancelPanel 组件，用于显示取消订单的面板 */}
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

// 导出 App 组件作为默认导出
export default App;