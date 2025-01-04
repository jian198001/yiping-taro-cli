// 导入 NutUI 业务组件库的样式文件
import "@nutui/nutui-biz/dist/styles/demo.css";
// 导入 ReactDOM 库
import * as ReactDOM from "react-dom";
// 导入 NutUI 业务组件库的样式文件
import '@nutui/nutui-biz/dist/style.css'
// 导入 NutUI React 组件库的样式文件
import '@nutui/nutui-react/dist/style.css'

// 导入 React 库和 useState、useEffect 钩子
import React, { useEffect, useState } from 'react';
// 导入 NutUI 业务组件库中的 Category 组件
import { Category } from '@nutui/nutui-biz';

/**
 * 主应用组件
 * 
 * @returns {JSX.Element} 渲染的 JSX 元素
 */
const App = () => {
  // 使用 useState 钩子来管理分类数据的状态
  const [category, setCategory] = useState();

  /**
   * 获取分类数据的函数
   * 
   * @returns {Promise<void>} 异步操作的 Promise
   */
  const getData = () => {
    // 从指定 URL 获取分类数据
    fetch("https://storage.360buyimg.com/nutui/3x/new-categoryData.js")
      .then((response) => response.json()) // 将响应数据解析为 JSON
      .then((res) => {
        // 设置分类数据的状态
        setCategory(res.categoryInfo.category);
      })
      .catch((err) => console.log("Oh, error", err)); // 捕获并打印错误
  };

  /**
   * 处理一级分类点击事件的回调函数
   * 
   * @param {number} index - 点击的分类索引
   */
  const onClassifyClick = (index: number) => {
    console.log('一级分类', index); // 打印点击的分类索引
  };

  /**
   * 处理三级分类点击事件的回调函数
   * 
   * @param {any} sku - 点击的三级分类数据
   */
  const onPanelThirdClick = (sku: any) => {
    console.log('三级分类跳转', sku); // 打印点击的三级分类数据
  };

  useEffect(() => {
    getData(); // 在组件挂载时获取分类数据
  }, []); // 空数组作为依赖项，表示只在组件挂载时执行一次

  return (
    // Category 组件，用于显示分类数据
    <Category category={category} onClick={onClassifyClick} onPanelThirdClick={onPanelThirdClick}></Category>
  );
};

// 导出 App 组件作为默认导出
export default App;
