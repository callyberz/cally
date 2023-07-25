import type { GetStaticPaths, GetStaticProps } from "next";
import Layout from "src/components/Layout";
import { fsUtil } from "src/utils/fsUtil";

export const getStaticPaths: GetStaticPaths = () => {
  const slugsArray = fsUtil.getPostSlugs();
  const paths = slugsArray.map((slug) => {
    return { params: { slug } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slug } = params;
  const post = fsUtil.getPostContent(slug as string);
  return {
    props: {
      post: JSON.stringify(post),
    },
  };
};

export default function Page(props: any) {
  const { post } = props;

  return (
    <Layout>
      <div className="my-12 text-center">
        <h1 className="text-netural-800 text-2xl ">Render this in Markdown</h1>
        {post}
      </div>
    </Layout>
  );
}
