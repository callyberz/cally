import fs from "fs";
import matter from "gray-matter";
import path from "path";

const root = process.cwd();

const pipe =
  <T>(...fns: ((arg: T) => T)[]) =>
  (x: T) =>
    fns.reduce((v, f) => f(v), x);

const flattenArray = <T>(input: (T | T[])[]): T[] =>
  input.reduce<T[]>(
    (acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])],
    []
  );

const map =
  <T, R>(fn: (arg: T) => R) =>
  (input: T[]): R[] =>
    input.map(fn);

const walkDir = (fullPath: string): string[] => {
  return fs.statSync(fullPath).isFile()
    ? [fullPath]
    : getAllFilesRecursively(fullPath);
};

const pathJoinPrefix = (prefix: string) => (extraPath: string) =>
  path.join(prefix, extraPath);

const getAllFilesRecursively = (folder: string): string[] =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - todo
  pipe(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - todo
    fs.readdirSync,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - todo
    map(pipe(pathJoinPrefix(folder), walkDir)),
    flattenArray
  )(folder);

const getPostContent = (slug: string) => {
  const folder = "blog/";
  const file = `${folder}${slug}.mdx`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export function getPostSlugs(): string[] {
  const prefixPaths = path.join(root, "/blog");
  const files = getAllFilesRecursively(prefixPaths);

  const slugsArray: string[] = [];

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  files.forEach((file) => {
    const fileName = path.basename(file);
    slugsArray.push(formatSlug(fileName));
  });

  return slugsArray;
}

export function formatSlug(slug: string) {
  return slug.replace(/\.(mdx|md)/, "");
}

export const fsUtil = {
  getAllFilesRecursively,
  getPostContent,
  getPostSlugs,
  formatSlug,
};
