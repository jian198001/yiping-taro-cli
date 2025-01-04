// 导入 React 库
import React from "react";
// 从 @nutui/nutui-biz 库中导入 AddressList 组件
import { AddressList } from '@nutui/nutui-biz';

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
  /**
   * 地址列表数据
   * 
   * @type {Array<{id: number, testaddressName: string, phone: string, defaultAddress: boolean, fullAddress: string}>}
   */
  const data = [
    {
      // 地址ID
      id: 3,
      // 收件人姓名
      testaddressName: '姓名',
      // 收件人电话
      phone: '123****4567',
      // 是否为默认地址
      defaultAddress: false,
      // 完整地址
      fullAddress: '北京亦庄经济技术开发区科创十一街18号院'
    },
    {
      // 地址ID
      id: 4,
      // 收件人姓名
      testaddressName: '姓名',
      // 收件人电话
      phone: '123****4567',
      // 是否为默认地址
      defaultAddress: true,
      // 完整地址
      fullAddress: '北京亦庄经济技术开发区科创十一街18号院'
    }
  ];

  /**
   * 地址列表数据映射选项
   * 
   * @type {{id: string, addressDetail: string, addressName: string}}
   */
  const dataMapOptions = {
    // 地址ID字段名
    id: 'testid',
    // 地址详情字段名
    addressDetail: 'testaddressDetail',
    // 地址名称字段名
    addressName: 'testaddressName'
  };

  /**
   * 处理点击地址项的回调函数
   */
  const itemClick = () => {
    // 打印点击地址项的日志
    console.log('Click To Address');
  }

  /**
   * 处理点击删除图标的回调函数
   */
  const delClick = () => {
    // 打印点击删除图标的日志
    console.log('Click To Delete');
  }

  /**
   * 处理点击编辑图标的回调函数
   */
  const editClick = () => {
    // 打印点击编辑图标的日志
    console.log('Click To Edit');
  }

  /**
   * 处理点击添加地址的回调函数
   */
  const addAddress = () => {
    // 打印点击添加地址的日志
    console.log('Click To Add');
  }

  return (
    // AddressList 组件，用于显示地址列表
    <AddressList
      // 地址列表数据
      data={data}
      // 是否显示底部按钮
      showBottomButton={true}
      // 地址列表数据映射选项
      dataMapOptions={dataMapOptions}
      // 是否开启滑动编辑功能
      swipeEdition={true}
      // 删除图标点击事件处理函数
      onDelIcon={delClick}
      // 编辑图标点击事件处理函数
      onEditIcon={editClick}
      // 地址项点击事件处理函数
      onItemClick={itemClick}
      // 添加地址按钮点击事件处理函数
      onAdd={addAddress}
      // 滑动删除事件处理函数
      onSwipeDel={delClick}
    />
  );
};

// 导出 App 组件作为默认导出
export default App;