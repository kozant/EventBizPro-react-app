import React from "react";
import "./article-item.css";

const ArticleItem = ({ articles }) => {
  return (
    <div className="article-preview">
      <div>
        <div className="article-meta">
          <div className="info">{articles.author}</div>
        </div>
      </div>
      <p>{articles.description}</p>
    </div>
  );
};
export default ArticleItem;
