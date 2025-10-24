import { getBlogById } from "@/lib/getBlog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";

// 提取 h2/h3 目录
function extractHeadings(mdx: string) {
  const headingRegex = /^###?\s+(.+)$/gm;
  const headings: { level: number; text: string; id: string }[] = [];
  let match: RegExpExecArray | null;
  while ((match = headingRegex.exec(mdx))) {
    const level = match[0].startsWith("###") ? 3 : 2;
    const text = match[1].trim();
    const id = text.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-");
    headings.push({ level, text, id });
  }
  return headings;
}

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = await getBlogById(id);
  if (!blog) return notFound();
  const headings = extractHeadings(blog.content);
  return (
    <div className="flex justify-between gap-16 bg-transparent pt-20 lg:ml-60">
      <main className="w-80 px-4 py-16 md:w-100 lg:w-160">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">{blog.title || blog.id}</h1>
        <div className="mb-8 flex items-center gap-2 text-sm text-neutral-500">
          {blog.author && <span>{blog.author}</span>}
          {blog.date && <span>· {blog.date}</span>}
        </div>
        <div className="prose prose-invert w-80 break-words md:w-120 lg:w-full">
          <MDXRemote
            source={blog.content}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: "one-dark-pro", // 你可以改为其他 shiki 支持的主题
                      // 还可以自定义更多选项
                    },
                  ],
                ],
              },
            }}
          />
        </div>
      </main>
      <aside className="mt-16 hidden w-72 flex-shrink-0 border-l border-l-neutral-400 px-6 lg:block">
        <div className="mb-4 text-base font-semibold text-neutral-700 dark:text-neutral-200">
          On this page
        </div>
        <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-200">
          {headings.length === 0 && <li>No Things</li>}
          {headings.map((h) => (
            <li key={h.id} className={h.level === 2 ? "font-bold" : "ml-4"}>
              <a href={`#${h.id}`}>{h.text}</a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
