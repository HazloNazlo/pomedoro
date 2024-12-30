import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import type { Post } from '../../types';
import PostActions from './PostActions';
import PostContent from './PostContent';

interface PostItemProps {
  post: Post;
  type: 'scheduled' | 'draft';
  onEdit: () => void;
  onDelete: () => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, type, onEdit, onDelete }) => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <PostContent post={post} type={type} />
        <PostActions onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default PostItem;