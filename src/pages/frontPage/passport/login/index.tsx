// 导入 React 库中的 useState 和 useEffect 钩子
import React, { useState, useEffect } from "react";
// 从 @nutui/nutui-biz 库中导入 Login 组件
import { Login } from '@nutui/nutui-biz';

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
  // 定义一个变量 logoImg，用于存储图片的 URL
  const logoImg =
    "https://img10.360buyimg.com/imagetools/jfs/t1/187998/28/32123/16333/63e346b8F0bff354b/c95da99ea108c463.png";
  // 使用 useState 钩子来管理表单参数的状态
  const [formParams3, setformParams3] = useState({
    // 初始账号为"12345"
    account: "12345",
    // 账号错误提示文本为"账号不存在"
    accountErrorText: "账号不存在",
    // 初始密码为"123"
    password: "123",
    // 密码错误提示文本为"请输入6位密码"
    passwordErrorText: "请输入6位密码",
  });

  /**
   * 处理输入变化的回调函数
   * 
   * @param {any} value - 变化后的值
   * @param {string} tag - 变化的字段名
   */
  const onChange = (value: any, tag: string) => {
    console.log(tag, value); // 打印变化的字段名和值
  };

  return (
    // Login 组件，用于显示登录表单
    <Login
      // 表单参数
      formParams={formParams3}
      // 登录类型为密码登录
      loginType="pwd"
      // 错误提示类型为底部消息
      showErrorType="bottomMsg"
      // 输入变化的回调函数
      onInputChange={onChange}
      // 登录按钮的文本
      loginText="立即登录"
      // 第三方登录的配置
      thirdLogin={
        [
          {
            // 第三方登录平台的名称
            name: "wechat",
            // 第三方登录平台的图标
            icon: "https://img10.360buyimg.com/imagetools/jfs/t1/187998/28/32123/16333/63e346b8F0bff354b/c95da99ea108c463.png",
          },
          {
            // 第三方登录平台的名称
            name: "qq",
            // 第三方登录平台的图标
            icon: "https://img10.360buyimg.com/imagetools/jfs/t1/187998/28/32123/16333/63e346b8F0bff354b/c95da99ea108c463.png",
          },
        ]
      }
    />
  );
};

// 导出 App 组件作为默认导出
export default App;