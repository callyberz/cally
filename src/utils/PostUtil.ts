import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import path from "path";
import type { PostData } from "src/types/Post";

const PostfolderPath = "blog/";

export function formatSlug(slug: string) {
  return slug.replace(/\.(mdx|md)/, "");
}

const getPostMetadata = (): Promise<PostData[]> => {
  return new Promise((resolve) => {
    const files = fs.readdirSync(PostfolderPath);
    const markdownPosts = files.filter(
      (file) => file.endsWith(".mdx") || file.endsWith(".md")
    );

    // Get gray-matter data from each file.
    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(
        `${PostfolderPath}${fileName}`,
        "utf8"
      );
      const matterResult = matter(fileContents);

      const { date, ...data } = matterResult.data as PostData;
      return {
        ...data,
        date: new Date(date).toUTCString(),
        slug: PostUtil.formatSlug(fileName),
      };
    });

    resolve(posts);
  });
};

const getPost = (slug: string) => {
  const mdxPath = path.join(PostfolderPath, `${slug}.mdx`);
  const mdPath = path.join(PostfolderPath, `${slug}.md`);
  const content = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, "utf8")
    : fs.readFileSync(mdPath, "utf8");

  const matterResult = matter(content, {
    engines: {
      // using this config to fix response cannot be serialized issue
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });
  return matterResult;
};

export const PostUtil = {
  formatSlug,
  getPostMetadata,
  getPost,
};
