import * as React from 'react';
import PostCard from '../../../components/post-card/post-card';
import BlogPostsWrapper from './style';

type PostsProps = {};

const Posts: React.FunctionComponent<PostsProps> = () => {

  return (
    <BlogPostsWrapper style={{color:"red"}}>
      <PostCard
        key={1}
        title="こんにちは"
        description="ヤッホsf"
        image="../../images/main.png"
        className="test"
      />
    </BlogPostsWrapper>
  );
};

export default Posts;
