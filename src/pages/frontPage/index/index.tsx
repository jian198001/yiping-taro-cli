// 导入 React 库
import React from 'react';
// 从 @nutui/nutui-biz 库中导入 Card 组件
import { Card } from '@nutui/nutui-biz';

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
  // 定义一个状态对象，包含商品图片、标题、价格和店铺名称
  const state = {
    // 商品图片的URL
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    // 商品标题
    title: '【活蟹】aaa湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    // 商品价格
    price: '388',
    // 店铺名称
    shopName: '阳澄湖大闸蟹自营店',
  }
  
  return (
    // 主容器，包含两个 Card 组件
    <>
      {/* Card 组件，用于显示商品信息 */}
      <Card
        // 商品图片的属性
        imageProps={{src: state.imgUrl}}
        // 商品标题
        title={state.title}
        // 商品价格
        price={state.price}
        // 店铺名称
        shopName={state.shopName}
        // 显示类型为半行
        showType="half-line"
      />
      {/* Card 组件，用于显示商品信息 */}
      <Card
        // 商品图片的属性
        imageProps={{src: state.imgUrl}}
        // 商品标题
        title={state.title}
        // 商品价格
        price={state.price}
        // 店铺名称
        shopName={state.shopName}
        // 显示类型为半行
        showType="half-line"
      />
    </>
  );
};

// 导出 App 组件作为默认导出
export default App;