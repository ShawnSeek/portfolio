import { getAllBlogs } from "@/lib/getBlog";
import Link from "next/link";

export default async function Blog() {
  const blogs = await getAllBlogs();
  return (
    <div className="inset-0 w-80 bg-transparent px-4 pt-40 md:w-180 lg:w-220">
      <h1 className="mb-4 text-5xl font-bold">Blog</h1>
      <div className="mb-4 h-[1px] w-full border border-white/30" />
      <div className="space-y-12">
        {blogs &&
          blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="block w-full rounded-xl border-b border-white/20 px-6 py-8 transition hover:scale-[1.02] hover:bg-purple-200/15"
            >
              <h2 className="mb-2 text-2xl font-bold">
                {blog.title || blog.id}
              </h2>
              {blog.description && (
                <p className="mb-2 line-clamp-2 text-base font-semibold text-wrap text-neutral-200">
                  {blog.description}
                </p>
              )}
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                {blog.author && <span>{blog.author}</span>}
                {blog.date && (
                  <>
                    <span>·</span>
                    <span>{blog.date}</span>
                  </>
                )}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
