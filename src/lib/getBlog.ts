import fg from "fast-glob";
import matter from "gray-matter";
import fs from "node:fs/promises";
import path from "node:path";

export type BlogMeta = {
  id: string;
  title?: string;
  date?: string;
  author?: string;
  [key: string]: any;
};

export type BlogData = BlogMeta & { content: string };

async function parseBlogFile(filePath: string, id: string): Promise<BlogData> {
  const fileContent = await fs.readFile(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    id,
    ...data,
    content,
  };
}

let allBlogsCache: BlogData[] | null = null;

async function loadAllBlogs(): Promise<BlogData[]> {
  if (allBlogsCache) return allBlogsCache;
  const dir = path.join(process.cwd(), "src/blog");
  const files = await fg(["*.md", "*.mdx"], { cwd: dir });
  const blogs: BlogData[] = [];
  for (const filename of files) {
    const id = filename.replace(/\.(mdx|md)$/, "");
    const filePath = path.join(dir, filename);
    const blog = await parseBlogFile(filePath, id);
    blogs.push(blog);
  }
  allBlogsCache = blogs;
  return blogs;
}

export async function getAllBlogs(): Promise<BlogMeta[]> {
  const blogs = await loadAllBlogs();
  return blogs.map(({ content, ...meta }) => meta);
}

export async function getBlogById(id: string): Promise<BlogData | null> {
  const blogs = await loadAllBlogs();
  return blogs.find((blog) => blog.id === id) || null;
}
