import React from 'react';

function Article(props) {
  const { title, date, preview } = props;
  const formattedDate = date ? new Date(date).toLocaleDateString() : 'January 1, 1970';

  return (
    <article data-testid="article">
      <h3>{title}</h3>
      <small data-testid="article-date">{formattedDate}</small>
      <p>{preview}</p>
    </article>
  );
}
export default Article;