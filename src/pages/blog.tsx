import Link from "next/link";
import Layout from "src/components/Layout";
import { TypographyH3 } from "src/components/common/TypographyH3";
import { Card, CardContent, CardHeader } from "src/components/ui/card";
import { api } from "src/utils/api";

const BlogIndex = () => {
  const postQuery = api.posts.getAllPosts.useQuery();

  return (
    <Layout>
      <div>
        {postQuery.data?.map((post, index) => (
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
