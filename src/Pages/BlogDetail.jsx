import { useParams, Link } from "react-router-dom";
import { blogs } from "./Blog";
import SEO from "../Components/SEO";
import { FiArrowLeft } from "react-icons/fi";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogs.find((b) => b.id === id);

  if (!post) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-surface-muted text-text-main">
        <h1 className="mb-4 font-sans text-4xl font-semibold">Post Not Found</h1>
        <Link to="/blog" className="text-brand hover:underline">
          Return to Journal
        </Link>
      </section>
    );
  }

  return (
    <section className="w-full min-h-[70vh] bg-surface-muted px-5 py-4 text-text-main md:px-8 lg:px-10 lg:py-6">
      <SEO title={`${post.title} - Journal`} description={post.category} />

      <div className="mx-auto w-full max-w-[900px]">
        {/* Back Link */}
        <Link to="/blog" className="group mb-4 inline-flex items-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-[1px] text-text-muted transition-colors hover:text-text-main">
          <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
          Back to Journal
        </Link>

        {/* Header */}
        <div className="border-b border-border pb-4">
          <div className="mb-2 flex items-center gap-3">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[2px] text-brand border border-brand/30 rounded-full px-3 py-1">
              {post.category}
            </span>
            <span className="font-sans text-[12px] text-text-muted">
              {post.readTime}
            </span>
          </div>
          
          <h1 className="font-sans text-[32px] font-medium leading-tight tracking-[-1px] sm:text-[42px] md:text-[50px] mb-3">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-t border-border pt-2">
            <p className="font-sans text-[14px] text-text-muted">
              By <span className="font-medium text-text-main">{post.author}</span>
            </p>
            <p className="font-sans text-[13px] text-text-muted">
              {post.date}
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="my-6 aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden bg-surface rounded-sm">
          <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
        </div>

        {/* Article Body */}
        <article className="mx-auto max-w-[700px] font-sans text-[16px] leading-8 text-[#ccc]">
          {post.content.split('\n\n').map((paragraph, index) => {
            // Handle mock markdown lists/bolding for realistic styling
            if (paragraph.startsWith('Here is our internal checklist') || paragraph.match(/^\d\./)) {
              return (
                <div key={index} className="mb-4 pl-4 border-l-2 border-brand/50">
                  <p className="whitespace-pre-wrap">{paragraph}</p>
                </div>
              );
            }
            return (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default BlogDetail;
