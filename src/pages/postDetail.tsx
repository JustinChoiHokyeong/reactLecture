import React from "react";

interface IPostDetail {
  postId: number;
}

export default class PostDetail extends React.Component<IPostDetail> {
  state = {
    postDetail: null,
  };

  componentDidMount(): void {
    const { postId } = this.props;
    this.requestPost(postId);
  }

  // componentDidUpdate(
  //   prevProps: Readonly<IPostDetail>,
  //   prevState: Readonly<{}>,
  //   snapshot?: any
  // ): void {
  //   const { postId } = this.props;
  //   if (postId !== prevProps.postId) {
  //     this.requestPost(postId);
  //   }
  // }

  requestPost(postId: number) {
    console.log(`request post #${postId}`);
    this.setState({
      postDetail: `로딩된 post #${postId}`,
    });
  }

  render() {
    const { postId } = this.props;
    const { postDetail } = this.state;
    return (
      <div>
        포스팅 #{postId}
        <hr />
        {postDetail}
      </div>
    );
  }
}
