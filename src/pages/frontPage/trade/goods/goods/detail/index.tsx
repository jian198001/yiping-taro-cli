import React,{useEffect,useState} from 'react';
import { Comment } from '@nutui/nutui-biz';
import { Cell } from "@nutui/nutui-react";

import "@nutui/nutui-biz/dist/styles/demo.css";
import '@nutui/nutui-biz/dist/style.css'
import '@nutui/nutui-react/dist/style.css'

const App = () => {

  const [cmt, setCmt] = useState({} as any);

  const getData = () => {
    fetch("//storage.360buyimg.com/nutui/3x/comment_data.json")
      .then((response) => response.json())
      .then((res) => {
        res.Comment.info.avatar =
          "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png";
        setCmt(res.Comment);
      })
      .catch((err) => console.log("Oh, error", err));
  };

  useEffect(() => {
    getData();
  }, []);

  const onClickImages = (imgs: any) => {
    console.log("进行图片展示", imgs);
  };

  const onHandleClick = (info: any) => {
    console.log("进行跳转", info);
  };

  return (
    <Cell>
      <Comment
        type="complex"
        imagesRows="multi"
        images={cmt.images}
        videos={cmt.videos}
        info={cmt.info}
        ellipsis="6"
        onClickImages={onClickImages}
        commentLabels={
          <img
            src="https://storage.360buyimg.com/imgtools/78925d9440-f9e874d0-e93d-11eb-8e5c-0da9e18a13b1.png"
            style={{ height: "12px" }}
          />
        }
        commentShopReply={
          <div className="nut-comment-shop">
            <span>京东美妆国际：</span>
            尊敬的客户您好，非常抱歉给您带来不愉快的购物体验，关于过敏，什么成分都不存在个别性和普遍性。
          </div>
        }
      />
    </Cell>
  );
};
export default App;