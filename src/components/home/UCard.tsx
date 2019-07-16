import React, { Component } from 'react';
import { Avatar, Card, Carousel, Col, Icon, Input, Row } from 'antd';
import styles from 'pages/home.less';
import { getAvatar, getPostImage } from '@/utils/image';
import { Post, PostDTO } from '@/response/post';
import * as _ from 'lodash';
import moment from 'moment';
import ImageZoom from 'react-medium-image-zoom';
import { CommentModal } from '@/components/modal/CommentModal';
import Link from 'next/link';

const TextArea = Input.TextArea;

export class UCard extends Component<{
  post: PostDTO;
  handleLike: (id, flag) => void;
  hanleBook: (id, flag) => void;
  cardLoading?: boolean;
}> {
  static defaultProps = { cardLoading: false };
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const { post, handleLike, hanleBook, cardLoading } = this.props;
    const { Bookmark, Comment, Like } = post.actionCount;
    const { liked, bookmarked } = post;
    const {
      userDisplayedName,
      userAvatar,
      text,
      smallMediaPaths,
      category,
      channelGroup,
      channelGroupGroup,
      creationDate,
      id,
      userId,
    } = post.post as Post;
    const groupGroupName = _.get(channelGroupGroup, 'groupGroupName');
    const groupName = _.get(channelGroup, 'groupName');

    return (
      <Card style={{ width: '100%', marginTop: '16px' }} loading={cardLoading}>
        <Row gutter={16}>
          <Col md={8}>
            <Carousel autoplay className={styles.cardImage}>
              {smallMediaPaths.map((value, index) => (
                <div key={index}>
                  <ImageZoom
                    image={{
                      src: getPostImage(value),
                      alt: 'Golden Gate Bridge',
                      className: styles.cardImage,
                      // style: { width: '50em' }
                    }}
                    zoomImage={{
                      src: getPostImage(value),
                      alt: 'Golden Gate Bridge',
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </Col>
          <Col md={16}>
            <Row>
              <Link prefetch={true} href={`/profile?userIds=${userId}`}>
                <div className={styles.cardContent}>
                  <Avatar src={getAvatar(userAvatar)} className={styles.avatar} />
                  <div>
                    <p className={styles.name}>{userDisplayedName}</p>
                    <p className={styles.name}>
                      {groupGroupName}
                      {groupName ? `/${groupName}` : ''}
                    </p>
                    <p className={styles.date}>{moment(creationDate).format('ll')}</p>
                  </div>
                </div>
              </Link>

              <div className={styles.left}>
                {/*<Avatar*/}
                {/*src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'*/}
                {/*/>*/}
                <Icon type='link' className={styles.subtitle} />
                <span className={styles.subtitle}>{category}</span>
              </div>
            </Row>
            <Row>
              <div style={{ height: 200 }}>
                <p className={styles.middleContent}>{text}</p>
              </div>
            </Row>
            <Row>
              <div className={styles.left}>
                <Icon
                  type='heart'
                  className={styles.lefticon}
                  theme={liked ? 'filled' : 'outlined'}
                  onClick={() => {
                    handleLike(id, liked);
                  }}
                />
                <span className={styles.text}>{Like}</span>
                <Icon type='message' className={styles.lefticon} onClick={this.showModal} />
                <span className={styles.text} onClick={this.showModal}>
                  {Comment}
                </span>
                <Icon
                  type='book'
                  theme={bookmarked ? 'filled' : 'outlined'}
                  className={styles.lefticon}
                  onClick={() => {
                    hanleBook(id, bookmarked);
                  }}
                />
                <span className={styles.text}>{Bookmark}</span>
              </div>
              <CommentModal
                postId={id}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              />
            </Row>
          </Col>
        </Row>
      </Card>
    );
  }
}
