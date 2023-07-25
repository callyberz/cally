// import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";
import { fsUtil } from "src/utils/fsUtil";
import { remark } from "remark";
import html from "remark-html";
import { z } from "zod";

interface MarkdownFile {
  title: string;
  date: string;
  tags: string[];
  draft: boolean;
  summary: string;
  contentHtml?: string;
  slug?: string;
}

const root = process.cwd();

export function getAllHighlightPostIds(): MarkdownFile[] {
  const prefixPaths = path.join(root, "/blog");

  const files = fsUtil.getAllFilesRecursively(prefixPaths);

  const allFrontMatter: MarkdownFile[] = [];

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  files.forEach(async (file) => {
    const source = readFileSync(file, "utf8");
    const { data: frontmatter, content } = matter(source);
    const processedContent = await remark().use(html).process(content);
    // extract contentHtml to getPost function
    const contentHtml = processedContent.toString();
    const fileName = path.basename(file);

    console.log(fileName);
    allFrontMatter.push({
      ...(frontmatter as MarkdownFile),
      contentHtml,
      slug: fsUtil.formatSlug(fileName),
    });
  });

  return allFrontMatter;
}

export const postRouter = createTRPCRouter({
  getAllPosts: publicProcedure.query(() => {
    const posts = getAllHighlightPostIds();
    return posts;
  }),
  getPostById: publicProcedure.input(z.string()).query((ops) => {
    const id = ops.input;
    return `quey id by ${id}`;
  }),
});
