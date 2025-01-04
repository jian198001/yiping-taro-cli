// 引入 NutUI 业务组件库的样式文件
import "@nutui/nutui-biz/dist/styles/demo.css";
// 引入 NutUI 业务组件库的样式文件
import '@nutui/nutui-biz/dist/style.css'
// 引入 NutUI React 组件库的样式文件
import '@nutui/nutui-react/dist/style.css'

// 引入 React 库中的 useState 钩子
import React, { useState } from 'react';
// 引入 NutUI 业务组件库中的 OrderRemark 组件
import { OrderRemark } from '@nutui/nutui-biz';
// 引入 NutUI React 组件库中的 Cell 和 Toast 组件
import { Cell, Toast } from '@nutui/nutui-react';
// 引入 NutUI 业务组件库的样式文件
import "@nutui/nutui-biz/dist/styles/demo.css";

/**
 * 主应用组件
 * 
 * @returns {JSX.Element} 渲染的 JSX 元素
 */
const App = () => {
  // 使用 useState 钩子来管理是否显示订单备注组件的状态
  const [show, setShow] = useState(false);
  // 使用 useState 钩子来管理订单备注的内容
  const [mark, setMark] = useState('');

  /**
   * 处理点击事件，显示订单备注组件
   * 
   * @param {React.MouseEvent<HTMLDivElement>} e - 鼠标事件对象
   */
  const handleCellClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setShow(true);
  };

  /**
   * 处理关闭事件，隐藏订单备注组件
   * 
   * @param {React.MouseEvent<HTMLDivElement>} e - 鼠标事件对象
   */
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    setShow(false);
  };

  /**
   * 处理提交事件，更新订单备注内容
   * 
   * @param {string} e - 提交的备注内容
   */
  const handleSubmit = (e: string) => {
    setMark(e);
  };

  return (
    // 主容器，使用 demo 和 order-remark-demo 类名
    <div className="demo order-remark-demo">
      {/* Cell 组件，显示订单备注标题和描述，点击时显示 OrderRemark 组件 */}
      <Cell onClick={handleCellClick} title="订单备注" desc={mark ? mark : '请输入备注信息'}></Cell>
      {/* OrderRemark 组件，用于输入和编辑订单备注 */}
      <OrderRemark
        visible={show} // 是否显示组件
        remark={mark} // 备注内容
        onClose={handleClose} // 关闭事件处理函数
        onSubmit={handleSubmit} // 提交事件处理函数
      ></OrderRemark>
    </div>
  );
};

// 导出 App 组件作为默认导出
export default App;