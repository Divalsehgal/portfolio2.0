import React, { useRef, useState, forwardRef, HTMLProps, Ref } from "react";
import "./App.css";
import POSTS from "./posts.json";
import Accordian from "./components/Accordian";
import { formatTimestamp } from "./helpers";

type PostData = {
  content: string;
};

type ReplyProps = {
  replyId: number;
  replyData: string;
  replyLikes: number;
  replyTimeStamp: string;
};

type CommentProps = {
  commentId: number;
  commentData: string;
  commentLikes: number;
  commentTimeStamp: string;
  replies: ReplyProps[];
};

type PostProps = {
  postLikes: number;
  postId: number;
  postTimeStamp: string;
  postData: PostData;
  postComments: CommentProps[];
};

const App = () => {
  return (
    <>
      <Post />
    </>
  );
};

const Post = () => {
  const [posts, setPosts] = useState<PostProps[]>(POSTS);
  const postRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    let content;
    if (!postRef.current) {
      return;
    }
    content = postRef.current.value;

    const newPost: PostProps = {
      postLikes: 0,
      postId: Date.now(), // Using timestamp as postId for uniqueness
      postTimeStamp: new Date().toISOString(),
      postData: { content },
      postComments: [],
    };
    setPosts((prev) => [...prev, newPost]);
    if (postRef.current) {
      postRef.current.value = "";
    }
  };

  return (
    <div className="container">
      <div className="post-creation">
        <p>This is a facebook type post,comment,reply demo</p>
        <div className="input-box-container">
          <InputBox
            ref={postRef}
            placeholder={"start writing your posts here"}
          />
          <button onClick={handleSubmit}>submit</button>
        </div>
      </div>

      <div className="post-feed">
        {posts
          .sort((a, b) => (b.postTimeStamp > a.postTimeStamp ? 1 : -1))
          .map((post) => {
            const { postData, postComments, postTimeStamp } = post;
            const { content } = postData;
            return (
              <React.Fragment key={post.postId}>
                <div className="post-container">
                  <div className="post-content">{content}</div>

                  <Comments postComments={postComments} />
                  <div className="post-date">
                    {formatTimestamp(postTimeStamp)}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

const Comments = ({ postComments }: { postComments: CommentProps[] }) => {
  const functionProps = {
    title: "see comments",
  };
  const commentRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    let content;
    if (!commentRef.current) {
      return;
    }
    content = commentRef.current.value;
    const newComment: CommentProps = {
      commentLikes: 0,
      commentId: Date.now(),
      commentTimeStamp: new Date().toISOString(),
      commentData: content,
      replies: [],
    };
    //setComment((prev) => [...prev, newComment]);
    if (commentRef.current) {
      commentRef.current.value = "";
    }
  };

  return (
    <>
      {postComments.length > 0 ? (
        <Accordian childrenProps={functionProps}>
          {" "}
          <div className="comments-container">
            {postComments.map(
              ({
                commentId,
                commentData,
                commentTimeStamp,
                replies,
              }: CommentProps) => {
                return (
                  <React.Fragment key={commentId}>
                    <div className="comment-content">{commentData}</div>
                    {replies.length > 0 && (
                      <div className="reply-container">
                        <Reply replies={replies} />
                      </div>
                    )}
                  </React.Fragment>
                );
              }
            )}
          </div>
        </Accordian>
      ) : (
        <>
          <InputBox ref={commentRef} placeholder={"start writing a comment"} />
          <button onClick={handleSubmit}>submit</button>
        </>
      )}
    </>
  );
};

const Reply = ({ replies }: { replies: ReplyProps[] }) => {
  const functionProps = {
    title: "see replies",
  };
  return (
    <>
      {replies.length > 0 ? (
        <Accordian childrenProps={functionProps}>
          {replies.map(({ replyId, replyData, replyTimeStamp }: ReplyProps) => {
            return (
              <React.Fragment key={replyId}>
                <div className="reply-content">{replyData}</div>
              </React.Fragment>
            );
          })}
        </Accordian>
      ) : (
        ""
      )}
    </>
  );
};

type InputBoxProps = {
  placeholder: string;
} & HTMLProps<HTMLInputElement>;

const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(
  (props, ref: Ref<HTMLInputElement>) => {
    const { placeholder, ...rest } = props;
    return (
      <div className="input-box">
        <input ref={ref} placeholder={placeholder} type="text" {...rest} />
      </div>
    );
  }
);

export default App;
