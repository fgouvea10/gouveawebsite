import { PostNodeProps } from './post';

export type ICategory = {
  name: string;
  slug: string;
  posts: PostNodeProps[];
};
