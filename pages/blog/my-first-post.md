import BlogPost from '../../components/BlogPost';

export const meta = {
  published: true,
  publishedAt: '2020-07-27',
  title: 'Setting up stuff',
  summary:
    'I am learning how to build a blog using Markdown in a static web page build on top of Next.js'
};

export default ({ children }) => <BlogPost meta={meta}>{children}</BlogPost>;

Building in progress!