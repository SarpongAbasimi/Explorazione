import React, { useState, useEffect } from 'react';
import { Card } from '../../Components/Card/Card';
import styles from './Post.module.scss';

interface PostData {
  userId: number,
  id: number,
  title: string,
  body: string
}

export const PostPage = () => {

  const [toggle, setToggle] = useState<boolean>(false),
  [postData, setPostData] = useState<PostData[]>([]),
  handleToggleClick = () => setToggle(!toggle);

  console.log(postData);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url).then( response => {
      return response.json();
    }).then(data => setPostData(data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className={styles.posts}>
      { postData.length < 0 ? <h1>Loading ...</h1> :
       postData.map(posts => {
         return(
          <Card key={posts.id}
          userId={posts.userId}
          id={posts.id}
          title={posts.title}
          body={posts.body}
          toggle={toggle}
          toggleClick={handleToggleClick}
        />
         )
       })}
    </div>
  );
}
