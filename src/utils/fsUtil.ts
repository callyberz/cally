import fs from "fs";
import path from "path";

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

export const fsUtil = {
  getAllFilesRecursively,
};
