import React, { Component } from "react";
import "./article-list.css";

import ArticleItem from "../article-item";

export default class ArticleList extends Component {
  maxId = 100;

  createArticle(author) {
    return {
      id: this.maxId++,
      author,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
  }

  state = {
    articles: [
      this.createArticle("John"),
      this.createArticle("Mike"),
      this.createArticle("William"),
      this.createArticle("Jake"),
      this.createArticle("Peter"),
    ],
  };
  render() {
    const { articles } = this.state;
    return (
      <div className="container">
        {articles.map((article) => {
          return <ArticleItem key={article.id} articles={article} />;
        })}
      </div>
    );
  }
}
