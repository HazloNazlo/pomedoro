import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import type { Post } from '../../types';

interface PostContentProps {
  post: Post;
  type: 'scheduled' | 'draft';
}

const PostContent: React.FC<PostContentProps> = ({ post, type }) => {
  if (type === 'scheduled') {
    return (
      <div className="flex items-center space-x-3">
        {post.platforms.map((platform) => (
          <FontAwesomeIcon
            key={platform}
            icon={platform === 'facebook' ? faFacebookF : faTwitter}
            className={platform === 'facebook' ? 'text-[#1877F2]' : 'text-[#1DA1F2]'}
          />
        ))}
        <div>
          <p className="text-sm text-gray-900">{post.title}</p>
          <p className="text-xs text-gray-500">
            Scheduled for {new Date(post.scheduledFor).toLocaleString()}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-gray-900">{post.title || 'Untitled Draft'}</p>
      <p className="text-xs text-gray-500">
        Last edited {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default PostContent;