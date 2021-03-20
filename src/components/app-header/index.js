import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { headerLinks } from "@/common/local-data";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";

export default memo(function JYAppHeader() {
  // 业务代码
  const showItem = (item, index) => {
    if (index > 2 && index < 5) {
      return <a href={item.link}>{item.title}</a>;
    } else {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    }
  };

  // 返回的jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {showItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
