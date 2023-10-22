import Markdown from "markdown-to-jsx";
import type { GetStaticPaths } from "next";
import Layout from "src/components/common/Layout";
import type { PostData } from "src/types/Post";
import { PostUtil } from "src/utils/PostUtil";
import { fsUtil } from "src/utils/fsUtil";

interface StaticProps {
  params: {
    slug: string;
  };
}

interface Props {
  post: PostData & {
    content: string;
  };
}

export const getStaticPaths: GetStaticPaths = () => {
  // TODO: use PostUtil to get all post slugs
  const slugsArray = fsUtil.getPostSlugs();
  const paths = slugsArray.map((slug) => {
    return { params: { slug } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }: StaticProps) => {
  const { slug } = params;
  const post = PostUtil.getPost(slug);
  return {
    props: {
      post,
    },
  };
};

export default function Page({ post }: Props) {
  return (
    <Layout>
      <div>
        <Markdown>{post.content}</Markdown>
      </div>
    </Layout>
  );
}
