import React from 'react';
import { UCard } from '@/components/home/UCard';
import styles from './UCards.less';

export const UCards = ({ posts, postInitGetLoading = false, handleLike, handleBook }) => {
  return (
    <div className={styles.posts}>
      {posts.map(value => (
        <UCard
          cardLoading={postInitGetLoading}
          key={value.post.id}
          post={value}
          handleLike={handleLike}
          hanleBook={handleBook}
        />
      ))}
    </div>
  );
};
