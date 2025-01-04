// 导入 React 库中的 useState 和 useEffect 钩子
import React,{useEffect,useState} from 'react';
// 从 @nutui/nutui-biz 库中导入 Comment 组件
import { Comment } from '@nutui/nutui-biz';
// 从 @nutui/nutui-react 库中导入 Cell 组件
import { Cell } from "@nutui/nutui-react";

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
  // 使用 useState 钩子来管理评论数据的状态
  const [cmt, setCmt] = useState({} as any);

  /**
   * 获取评论数据的函数
   * 
   * @returns {Promise<void>} 异步操作的 Promise
   */
  const getData = () => {
    // 从指定 URL 获取评论数据
    fetch("//storage.360buyimg.com/nutui/3x/comment_data.json")
      .then((response) => response.json()) // 将响应数据解析为 JSON
      .then((res) => {
        // 设置评论数据的状态
        res.Comment.info.avatar = "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png";
        setCmt(res.Comment);
      })
      .catch((err) => console.log("Oh, error", err)); // 捕获并打印错误
  };

  useEffect(() => {
    getData(); // 在组件挂载时获取评论数据
  }, []); // 空数组作为依赖项，表示只在组件挂载时执行一次

  /**
   * 处理点击图片的回调函数
   * 
   * @param {any} imgs - 点击的图片数据
   */
  const onClickImages = (imgs: any) => {
    console.log("进行图片展示", imgs); // 打印点击的图片数据
  };

  /**
   * 处理点击评论的回调函数
   * 
   * @param {any} info - 点击的评论数据
   */
  const onHandleClick = (info: any) => {
    console.log("进行跳转", info); // 打印点击的评论数据
  };

  return (
    // Cell 组件，用于显示评论组件
    <Cell>
      <Comment
        // 评论类型为复杂类型
        type="complex"
        // 图片显示为多行
        imagesRows="multi"
        // 评论图片数据
        images={cmt.images}
        // 评论视频数据
        videos={cmt.videos}
        // 评论信息数据
        info={cmt.info}
        // 评论内容省略显示的行数
        ellipsis="6"
        // 点击图片的回调函数
        onClickImages={onClickImages}
        // 评论标签
        commentLabels={
          <img
            src="https://storage.360buyimg.com/imgtools/78925d9440-f9e874d0-e93d-11eb-8e5c-0da9e18a13b1.png"
            style={{ height: "12px" }}
          />
        }
        // 商家回复评论的内容
        commentShopReply={
          <div className="nut-comment-shop">
            <span>京东美妆国际：</span>
            尊敬的客户您好，非常抱歉给您带来不愉快的购物体验，关于过敏，什么成分都不存在个别性
和普遍性。
          </div>
        }
      />
    </Cell>
  );
};

// 导出 App 组件作为默认导出
export default App;