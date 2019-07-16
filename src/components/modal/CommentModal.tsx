import React, { Component } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { UComment } from '@/components/comment/UComment';
import { connect } from 'react-redux';
import { UProps } from '@/store';
import { CommentDTO } from '@/response/comment';
import { WrappedFormUtils } from 'antd/lib/form/Form';

const TextArea = Input.TextArea;
type CommentModalProps = {
  postId: number;
  visible: boolean;
  onOk: (e) => void;
  onCancel: (e) => void;
  commentGetLoading?: boolean;
  commentPostLoading?: boolean;
  comments?: CommentDTO[];
  form?: WrappedFormUtils<any>
} & UProps;

// @ts-ignore
@Form.create()
// @ts-ignore
@connect(({ _comment, loading }) => ({
  comments: _comment.comments,
  commentGetLoading: loading.effects['_comment/get'],
  commentPostLoading: loading.effects['_comment/post'],
}))
export class CommentModal extends Component<CommentModalProps> {
  state: {
    message: '';
  };

  componentDidMount(): void {
    const { postId, dispatch } = this.props;

    const payload = {
      offset: 0,
      limit: 100,
      postId,
    };
    dispatch({
      type: '_comment/get',
      payload,
    });
  }

  componentWillReceiveProps(nextProps: Readonly<CommentModalProps>): void {
    const { dispatch } = this.props;
    if (this.props.visible !== nextProps.visible) {
      const postId = nextProps.postId;
      const payload = {
        offset: 0,
        limit: 100,
        postId,
      };
      dispatch({
        type: '_comment/get',
        payload,
      });
    }
  }
  postHandler = e => {
    e.preventDefault();
    const { postId, dispatch, form } = this.props;

    form.validateFieldsAndScroll((err, { message }) => {
      if (!err) {
        dispatch({
          type: '_comment/post',
          payload: {
            postId,
            text: message,
            emails: [],
          },
        });
        form.resetFields();
      }
    });
  };
  render() {
    const { visible, commentGetLoading, comments, commentPostLoading, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal title='Comments' visible={visible} onOk={this.props.onOk} onCancel={this.props.onCancel}>
        <Form>
          <Form.Item>
            {getFieldDecorator('message', {
              rules: [
                {
                  required: true,
                  message: 'Please input your name',
                },
              ],
            })(<TextArea rows={4} />)}
          </Form.Item>
          <Form.Item>
            <Button loading={commentPostLoading} type='primary' onClick={this.postHandler}>
              Add Comment
            </Button>
          </Form.Item>
        </Form>
        <UComment commentGetLoading={commentGetLoading} comments={comments} />
      </Modal>
    );
  }
}
