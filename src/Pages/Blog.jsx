import SEO from "../Components/SEO";
import { Link } from "react-router-dom";

export const blogs = [
  { 
    id: 'fallacy-of-quick-wins', 
    category: 'Strategy', 
    title: 'The Fallacy of Quick Wins in B2B Marketing', 
    date: 'Sept 20, 2026', 
    author: 'Sarah Jenkins',
    readTime: '5 min read',
    content: "In today's fast-paced digital ecosystem, there is an immense pressure on CMOs to deliver immediate results. We see this constantly: a new client signs on, and before we've even finished the onboarding audit, they're asking about the ROAS from the first week's ad spend.\n\nThe truth about B2B marketing is that 'quick wins' are often a mirage. They might look good on a monthly report—a spike in raw leads, a temporary dip in CPC—but they rarely translate into sustainable, predictable revenue. When you optimize exclusively for immediate conversion, you inevitably sacrifice brand positioning and long-term pipeline health.\n\nTo build a true revenue engine, you have to be willing to invest in the 'Dark Social' channels and brand-building activities that are notoriously difficult to track in the short term, but consistently yield the highest lifetime value customers over a 12-to-18 month horizon.",
    image: '/images/blog-strategy.jpg' 
  },
  { 
    id: 'brand-identity-losing-money', 
    category: 'Branding', 
    title: 'Why Your Brand Identity is Losing You Money', 
    date: 'Sept 15, 2026', 
    author: 'Michael Chang',
    readTime: '6 min read',
    content: "When most founders hear 'brand identity,' they think about logos, color palettes, and typography. While those visual elements are important, they are merely the surface layer of a much deeper strategic foundation.\n\nYour brand identity is fundamentally the promise you make to your customer. If your visual identity looks premium, but your messaging is scattered, your website is confusing, and your customer service is lackluster, you create cognitive dissonance. This dissonance destroys trust.\n\nWe recently audited a SaaS company that was spending $50,000 a month on paid search. Their ads were highly optimized, but their landing pages featured inconsistent branding and confusing value propositions. They were literally bleeding money because their brand identity didn't align with the expectations set by their advertising. By unifying their brand voice and visual language, we increased their conversion rate by 45% without changing a single ad.",
    image: '/images/blog-branding.jpg' 
  },
  { 
    id: 'mastering-paid-social-cookieless', 
    category: 'Advertising', 
    title: 'Mastering Paid Social in a Cookie-less World', 
    date: 'Sept 02, 2026', 
    author: 'Elena Rodriguez',
    readTime: '7 min read',
    content: "The era of hyper-granular third-party tracking is effectively over. With Apple's iOS privacy updates and the phasing out of third-party cookies across major browsers, performance marketers are having to relearn how to drive ROI on paid social platforms.\n\nFor the last decade, media buyers relied heavily on the algorithmic wizardry of Meta and Google. You could set a broad audience and let the pixel do the heavy lifting. Today, that approach is a recipe for burning budget.\n\nThe solution isn't to abandon paid social; it's to shift your focus. Instead of relying on tracking hacks, you must rely on creative excellence and first-party data. First, your ad creative must act as the targeting mechanism. A highly specific, emotionally resonant video will naturally attract your ideal buyer. Second, you need to capture zero-party and first-party data immediately upon click, bringing the relationship into an environment you control (like email or SMS).",
    image: '/images/blog-advertising.jpg' 
  },
  { 
    id: 'technical-seo-checklist', 
    category: 'SEO', 
    title: 'Technical SEO Checklist for 2027', 
    date: 'Aug 28, 2026', 
    author: 'David Kim',
    readTime: '8 min read',
    content: "Search Engine Optimization is evolving rapidly. As AI Overviews (formerly SGE) take up more real estate on the SERP, traditional 'ten blue links' SEO is becoming less relevant for informational queries. However, technical SEO remains the bedrock upon which all organic visibility is built.\n\nHere is our internal checklist for ensuring a site is technically sound in 2027:\n\n1. **Core Web Vitals Optimization:** It's no longer just about 'fast'—it's about passing INP (Interaction to Next Paint) thresholds flawlessly.\n2. **Schema Markup Density:** Don't just use basic Organization or Article schema. Implement nested schema that connects your authors, entities, and products in a machine-readable graph.\n3. **Crawl Budget Efficiency:** For large sites, ensure that Googlebot isn't wasting time crawling faceted navigation or parameter URLs. Use robots.txt and canonical tags aggressively.\n4. **JavaScript Rendering:** Ensure critical content and internal links are available in the initial HTML payload, not requiring heavy client-side rendering to be discovered.",
    image: '/images/blog-seo-local.jpg' 
  },
  { 
    id: 'power-of-ugc', 
    category: 'Content', 
    title: 'The Unrivaled Power of User-Generated Content', 
    date: 'Aug 14, 2026', 
    author: 'Jessica Lee',
    readTime: '4 min read',
    content: "Consumers are increasingly skeptical of polished, high-production brand advertisements. They know they're being sold to. What they trust is authenticity, and nothing is more authentic than seeing a real person using and loving a product.\n\nUser-Generated Content (UGC) bridges the trust gap. When we implement UGC in ad campaigns for our eCommerce clients, we consistently see a 30-50% reduction in Cost Per Acquisition compared to studio-shot creative.\n\nTo scale UGC, you need a system. You can't just hope customers post about you. You must incentivize reviews, partner with micro-influencers who specialize in raw, direct-response style content, and secure the rights to repurpose this content across your paid media and email flows.",
    image: '/images/service-social.jpg' 
  },
  { 
    id: 'b2b-podcasting', 
    category: 'Media', 
    title: 'Why Every B2B Brand Needs a Podcast', 
    date: 'Aug 05, 2026', 
    author: 'Marcus Vance',
    readTime: '6 min read',
    content: "If you are selling a high-ticket B2B service or SaaS product, trust is your most valuable currency. Writing blog posts helps with search visibility, but it rarely builds deep, parasocial relationships with your audience. Podcasting does.\n\nWhen a prospect listens to your leadership team discuss industry trends for 45 minutes a week, they begin to feel like they know you. By the time they enter a sales conversation, the friction is gone. They already trust your expertise.\n\nFurthermore, a podcast acts as a content engine. A single 45-minute episode can be chopped up into 10 short-form clips for LinkedIn, transcribed into an SEO-optimized blog post, and summarized in a weekly newsletter. It is the highest-leverage content activity a B2B marketing team can invest in today.",
    image: '/images/service-strategic.jpg' 
  }
];

const Blog = () => {
  return (
    <section className="w-full min-h-[70vh] bg-surface-muted px-5 py-4 text-text-main md:px-8 lg:px-10 lg:py-6">
      <SEO title="Blog" description="Read our latest insights." />

      <div className="mx-auto w-full max-w-[1250px]">
        <div className="border-b border-border pb-4">
          <p className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
            Blog
          </p>
          <h1 className="font-sans text-[42px] font-medium leading-tight tracking-[-1px] sm:text-[52px] md:text-[64px]">
            Journal
          </h1>
          <p className="mt-3 w-full max-w-[500px] font-sans text-[14px] leading-6 text-text-muted">
            Thoughts, insights, and strategies for growth.
          </p>
        </div>
        
        <div className="py-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post, idx) => (
              <Link to={`/blog/${post.id}`} key={idx} className="group block cursor-pointer">
                <div className="mb-3 aspect-[4/3] w-full overflow-hidden bg-surface-muted">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <span className="mb-1 inline-block font-sans text-[10px] font-semibold uppercase tracking-[2px] text-text-muted">
                  {post.category}
                </span>
                <h3 className="mb-1 font-sans text-[20px] font-medium leading-tight text-text-main transition-colors group-hover:text-text-muted">
                  {post.title}
                </h3>
                <p className="font-sans text-[12px] text-[#888]">{post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
