import Link from "next/link";
import Layout from "src/components/Layout";
import { TypographyH3 } from "src/components/common/TypographyH3";
import { Card, CardContent, CardHeader } from "src/components/ui/card";
import { PostUtil } from "src/utils/PostUtil";
import type { PostData } from "src/types/Post";

interface Props {
  postMetadata: PostData[];
}

export const getStaticProps = async () => {
  const postMetadata = await PostUtil.getPostMetadata();
  return {
    props: {
      postMetadata,
    },
  };
};

const BlogIndex = ({ postMetadata }: Props) => {
  return (
    <Layout>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-1">
        <TypographyH3>WIP Migrating from notion...</TypographyH3>
        {postMetadata.map((post, index) => (
          <div key={index}>
            <Link href={`blog/${post?.slug || ""}`}>
              <Card className="mb-4 flex-1 bg-neutral-900">
                <CardHeader>
                  <TypographyH3>{post.title}</TypographyH3>
                </CardHeader>
                <CardContent className="text-slate-100">
                  <div className="text-sm text-slate-400">
                    <p>{post.date.toString()}</p>
                  </div>
                  <p>{post.summary}</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default BlogIndex;
