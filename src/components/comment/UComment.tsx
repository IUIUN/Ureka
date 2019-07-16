import { Comment, List, Tooltip } from 'antd';
import moment from 'moment';
import { Component } from 'react';
import 'antd/dist/antd.css';
import { getAvatar } from '@/utils/image';
import { CommentDTO } from '@/response/comment';

// @ts-ignore
export class UComment extends Component<
  {
    comments: CommentDTO[];
    commentGetLoading: boolean;
  }
> {



  render() {
    const { comments, commentGetLoading } = this.props;
    const commentDetails = comments.map(value => {
      const ob = {
        author: value.userDisplayedName,
        avatar: getAvatar(value.userAvatarPath),
        content: <p>{value.text}</p>,
        datetime: (
          <Tooltip
            title={moment()
              .subtract(1, 'days')
              .format('YYYY-MM-DD HH:mm:ss')}>
            <span>
              {moment(value.creationDate)
                .subtract(1, 'days')
                .fromNow()}
            </span>
          </Tooltip>
        ),
      };
      return ob;
    });

    return (
      <List
        loading={commentGetLoading}
        className='comment-list'
        header={`${commentDetails.length} replies`}
        itemLayout='horizontal'
        dataSource={commentDetails}
        renderItem={item => (
          <Comment
            actions={item.actions}
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />
        )}
      />
    );
  }
}
