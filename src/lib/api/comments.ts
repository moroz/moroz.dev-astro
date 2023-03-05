import { Comment, CommentInput } from "@interfaces";

export const CDN_URL = import.meta.env.PUBLIC_COMMENT_CDN_URL;

export interface CreateCommentErrorResult {
  success: false;
  errors: string[];
  comment: null;
}

export interface CreateCommentSuccessResult {
  success: true;
  errors: [];
  comment: Comment;
}

export type CreateCommentResult =
  | CreateCommentErrorResult
  | CreateCommentSuccessResult;

export const createComment = async (url: string, params: CommentInput) => {
  const input = { ...params, url };
  const res = await fetch(`${CDN_URL}/comments`, {
    method: "POST",
    body: JSON.stringify(input),
  });
  return res.json() as Promise<CreateCommentResult>;
};

export interface ListPostCommentsResult {
  comment: Comment[];
}

export const fetchPostComments = async (url: string) => {
  try {
    const res = await fetch(`${CDN_URL}/comments${url}`);
    return res.json();
  } catch (e) {
    console.error("Failed to fetch comments:", e);
    return { comments: [] };
  }
};
