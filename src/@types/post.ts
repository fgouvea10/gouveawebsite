import { ICategory } from './category';

export type PostProps = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: {
    url: string;
  };
  featured: boolean;
  categories: ICategory[];
};

export type PostNodeProps = {
  node: PostNodeProps;
};
