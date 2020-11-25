import * as React from 'react';
import {
  PostCardWrapper,
  PostDetails,
  PostDate,
  PostTitle,
  Excerpt,
  PostContent,
  Test,
} from './post-card.style';
import AvatarPortfolio from '../../images/main.png';

interface PostCardProps {
  image?: any;
  title: string;
  description?: string;
  url?: string;
  date?: string;
  className?: string;
}

const PostCard: React.FunctionComponent<PostCardProps> = ({
  image,
  title,
  description,
  url,
  date,
  className,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['post_card'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <PostCardWrapper {...props}>
      <Test >
        <img src={AvatarPortfolio} alt="" />
      </Test>

      <PostDetails className="post_details">
        {date && (
          <PostDate
            dangerouslySetInnerHTML={{
              __html: date,
            }}
            className="post_date"
          />
        )}

        <PostContent className="post_content">
          <PostTitle className="post_title">
            title
          </PostTitle>
          {description && (
            <Excerpt
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              className="excerpt"
            />
          )}
        </PostContent>
      </PostDetails>
    </PostCardWrapper>
  );
};

export default PostCard;
