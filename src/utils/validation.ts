import type { CreatePostDTO } from '../types/post';

export function validatePost(post: Partial<CreatePostDTO>): string | null {
  if (!post.title?.trim() && !post.content?.trim()) {
    return 'Please enter post content or title';
  }
  
  if (!post.platforms?.length) {
    return 'Please select at least one platform';
  }

  // For scheduled posts, require date and time
  if (post.scheduled_for !== null) {
    if (!post.scheduled_for || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(post.scheduled_for)) {
      return 'Please select valid date and time for scheduled post';
    }
  }

  return null;
}