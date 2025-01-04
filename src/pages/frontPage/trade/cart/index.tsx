// 导入 React 库
import React from 'react';
// 从 @nutui/nutui-biz 库中导入 SettleBar 组件
import { SettleBar } from '@nutui/nutui-biz';
// 从 @nutui/nutui-react 库中导入 Toast 组件
import { Toast } from '@nutui/nutui-react';
// 导入 @nutui/nutui-biz 库的样式文件
import "@nutui/nutui-biz/dist/styles/demo.css";

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
  return (
    // 主容器，包含一个 SettleBar 组件
    <div className="demo">
      {/* SettleBar 组件，用于显示结算栏 */}
      <SettleBar 
        // 总金额
        total={100}
        // 结算数量
        settleCount="100" 
        // 点击按钮的回调函数
        onClickButton ={() => Toast.text('点击按钮')}
      />
    </div>
  );
};

// 导出 App 组件作为默认导出
export default App;
