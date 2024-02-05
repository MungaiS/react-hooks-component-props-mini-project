import React from "react";
import Article from "./Article.js";

function ArticleList(props) {
  return (
    <main>
      {props.posts.map((post) => (
        <Article
          key={post.id}
          id={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;