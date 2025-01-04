import React from 'react';
// 从 @nutui/nutui-biz 库中导入 AddressEdit 组件
import { AddressEdit } from '@nutui/nutui-biz';

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
  // 定义一个包含地址选择、标题和各级地区数据的对象
  const addressData2: any = {
    // 选中的地区ID数组
    addressSelect: [1, 7, 3],
    // 地址选择标题
    addressTitle: "选择所在地区",
    // 省份数据数组
    province: [
      { id: 1, name: "北京", title: "B" },
      { id: 2, name: "广西", title: "G" },
      { id: 3, name: "江西", title: "J" },
      { id: 4, name: "四川", title: "S" },
      { id: 5, name: "浙江", title: "Z" },
    ],
    // 城市数据数组
    city: [
      { id: 7, name: "朝阳区", title: "C" },
      { id: 8, name: "崇文区", title: "C" },
      { id: 9, name: "昌平区", title: "C" },
      { id: 6, name: "石景山区", title: "S" },
      { id: 3, name: "八里庄街道", title: "B" },
      { id: 10, name: "北苑", title: "B" },
    ],
    // 县区数据数组
    country: [
      { id: 3, name: "八里庄街道", title: "B" },
      { id: 9, name: "北苑", title: "B" },
      { id: 4, name: "常营乡", title: "C" },
    ],
    // 街道数据数组（空数组）
    town: [],
    // 地址选择类型
    type: "custom",
    // 组件高度
    height: "270px",
  };
  // 定义一个包含地址信息的对象
  const addressInfo2 = {
    // 收件人姓名
    name: "张三",
    // 收件人电话
    tel: "13141234567",
    // 收件人所在地区
    region: "北京朝阳区八里庄街道",
    // 地区ID数组
    regionIds: [1, 7, 3],
    // 详细地址
    address: "xxx小区3-2-302",
    // 是否为默认地址
    default: true,
  };
  // 定义一个包含地址设置数据的对象
  const addressSetData = {
    // 必需填写的字段数组
    isRequired: ["name", "tel", "region", "address"],
    // 是否设置为默认地址
    isDefualtAddress: true,
  };
  /**
   * 处理地址变化事件的回调函数
   * 
   * @param {any} data - 变化后的地址数据
   */
  const onChange = (data: any) => {
    console.log("onChangeAddress", data);
  };
  /**
   * 处理地址关闭事件的回调函数
   * 
   * @param {any} data - 关闭时的地址数据
   */
  const onClose = (data: any) => {
    console.log("onCloseAddress", data);
  };
  return (
    // AddressEdit 组件，用于编辑地址信息
    <AddressEdit
      // 地址数据
      address={addressData2}
      // 地址设置数据
      data={addressSetData}
      // 地址信息
      addressInfo={addressInfo2}
      // 保存地址时的回调函数
      onSave={(formData) => {
        console.log(formData);
      }}
      // 地址变化时的回调函数
      onChangeAddress={onChange}
      // 地址关闭时的回调函数
      onCloseAddress={onClose}
    />
  );
};

// 导出 App 组件作为默认导出
export default App;