import SEO from "../Components/SEO";
import { Link } from "react-router-dom";

export const studies = [
  { 
    id: 'fintech-innovators', 
    client: 'Fintech Innovators', 
    result: '+210% User Acquisition', 
    desc: 'How we helped a leading fintech startup scale their user base while reducing CAC by 40%.', 
    challenge: 'Fintech Innovators had a solid product but was struggling to acquire users cost-effectively. Their Customer Acquisition Cost (CAC) was dangerously high, driven by broad, unfocused ad targeting and a poorly optimized landing page funnel that dropped 80% of traffic before signup.',
    strategy: 'We implemented a hyper-targeted multi-channel strategy. First, we completely rebuilt their landing pages using CRO best practices to reduce friction. Second, we pivoted their ad spend from broad Google Search to highly specific intent-based keywords and utilized lookalike audiences on Meta based on their most profitable existing users.',
    impact: 'Within 90 days, the new funnel and targeted traffic resulted in a 210% surge in qualified user acquisition. More importantly, we slashed their blended CAC by 40%, making their growth model sustainable and ready for their Series B funding round.',
    stats: [{ label: 'User Growth', value: '+210%' }, { label: 'CAC Reduction', value: '-40%' }, { label: 'Timeframe', value: '90 Days' }],
    services: ['Conversion Rate Optimization', 'Paid Social Media', 'Search Engine Marketing'],
    testimonial: "Invertio didn't just run ads; they fixed our entire funnel. Our acquisition costs plummeted, and we finally have a scalable growth engine.",
    image: '/images/service-advertising.jpg' 
  },
  { 
    id: 'ecoretail', 
    client: 'EcoRetail', 
    result: '3x ROAS in 90 Days', 
    desc: 'A complete overhaul of paid media strategy for a sustainable fashion brand.', 
    challenge: 'Despite having a passionate organic following, EcoRetail was bleeding money on paid media. Their Return on Ad Spend (ROAS) was hovering at 0.8x, meaning they were losing money on every sale generated through ads.',
    strategy: 'We conducted a complete audit of their Meta Ads account. We restructured their campaigns to utilize Advantage+ Shopping, implemented dynamic product ads, and partnered with 5 micro-influencers to generate high-performing User Generated Content (UGC) for short-form video ads.',
    impact: 'The introduction of UGC video creatives dropped their Cost Per Click (CPC) by 60%. Combined with the new campaign structure, EcoRetail achieved a 3x ROAS within 90 days, turning their paid media from a cost center into a highly profitable revenue engine.',
    stats: [{ label: 'ROAS', value: '3.2x' }, { label: 'CPC Decrease', value: '-60%' }, { label: 'Ad Revenue', value: '+$1.5M' }],
    services: ['Performance Marketing', 'Influencer Strategy', 'Creative Direction'],
    testimonial: "The UGC video strategy completely transformed our ad account. We went from losing money daily to having our most profitable quarter ever.",
    image: '/images/service-strategic.jpg' 
  },
  { 
    id: 'saas-platform-x', 
    client: 'SaaS Platform X', 
    result: '150% Increase in SQLs', 
    desc: 'Aligning sales and marketing to drive high-quality enterprise leads.', 
    challenge: 'SaaS Platform X was generating thousands of leads, but their sales team was frustrated. Less than 5% of the leads were qualified (SQLs), leading to wasted sales hours and high churn among SDRs.',
    strategy: 'We implemented a strict Account-Based Marketing (ABM) strategy. We integrated HubSpot with Salesforce to close the data loop, established a rigorous lead scoring model, and launched highly personalized campaigns targeting only their top 50 "dream" enterprise accounts.',
    impact: 'By focusing on quality over volume, total lead volume decreased by 40%, but Sales Qualified Leads (SQLs) increased by 150%. The sales team closed 3 enterprise deals within 6 months, generating over $1.2M in new ARR.',
    stats: [{ label: 'SQL Increase', value: '+150%' }, { label: 'New ARR', value: '$1.2M' }, { label: 'Sales Cycle', value: '-25%' }],
    services: ['Account-Based Marketing', 'Marketing Automation', 'B2B Strategy'],
    testimonial: "For the first time, our sales and marketing teams are actually aligned. The quality of conversations our reps are having now is night and day.",
    image: '/images/case-study-saas.jpg' 
  },
  { 
    id: 'local-services-co', 
    client: 'Local Services Co', 
    result: '#1 Local Search Ranking', 
    desc: 'Dominating local SEO and driving organic inbound phone calls.', 
    challenge: 'Local Services Co was an established offline business that was losing market share to newer competitors who were dominating Google Search. They had virtually zero inbound digital leads and relied entirely on word-of-mouth.',
    strategy: 'We executed a comprehensive Local SEO strategy. This included a deep technical audit of their website, rebuilding their location pages with hyper-local schema markup, optimizing their Google Business Profile, and building 100+ high-authority local citations.',
    impact: 'Within 6 months, Local Services Co secured the #1 spot in the highly coveted Google "map pack" for their primary keywords. This visibility led to a steady stream of organic, high-converting phone calls, increasing their monthly booked jobs by 85%.',
    stats: [{ label: 'Map Pack Rank', value: '#1' }, { label: 'Inbound Calls', value: '+300%' }, { label: 'Booked Jobs', value: '+85%' }],
    services: ['Technical SEO', 'Local Search Optimization', 'Content Marketing'],
    testimonial: "We literally had to hire two new trucks to keep up with the demand. Being at the top of Google changed our business completely.",
    image: '/images/blog-seo-local.jpg' 
  },
  { 
    id: 'healthtech-innovations', 
    client: 'HealthTech Innovations', 
    result: '400% ROI on Content', 
    desc: 'Scaling inbound leads for a B2B healthcare software provider through high-intent content.', 
    challenge: 'HealthTech Innovations had a great product but zero inbound marketing. Their entire sales pipeline relied on outbound cold calling, which was becoming increasingly expensive and less effective.',
    strategy: 'We built a comprehensive SEO and content marketing strategy targeting bottom-of-the-funnel keywords. We produced 20 long-form, medically reviewed articles and whitepapers addressing their target buyers\' biggest pain points.',
    impact: 'Organic traffic grew by 600% in 8 months. More importantly, the content drove a 400% ROI, generating over 120 inbound demo requests from highly qualified hospital administrators.',
    stats: [{ label: 'Organic Traffic', value: '+600%' }, { label: 'Inbound Leads', value: '120+' }, { label: 'Content ROI', value: '400%' }],
    services: ['Content Marketing', 'SEO Strategy', 'Copywriting'],
    testimonial: "Invertio took us from being entirely dependent on outbound to having a predictable, scalable inbound lead machine.",
    image: '/images/service-planning.jpg' 
  },
  { 
    id: 'global-logistics-corp', 
    client: 'Global Logistics Corp', 
    result: '2x Conversion Rate', 
    desc: 'A complete website redesign and CRO overhaul for an enterprise logistics company.', 
    challenge: 'Global Logistics Corp had an outdated, confusing website that was hemorrhaging potential clients. Despite driving significant traffic, their conversion rate was a dismal 0.8%.',
    strategy: 'We conducted a massive Conversion Rate Optimization (CRO) audit, analyzed user heatmaps, and redesigned their entire lead funnel. We simplified the quoting process and improved mobile responsiveness.',
    impact: 'The new design doubled their conversion rate to 1.7% almost overnight. Without spending a single extra dollar on ads, they doubled the number of enterprise leads they generated every month.',
    stats: [{ label: 'Conv. Rate', value: '2x' }, { label: 'Lead Volume', value: '+100%' }, { label: 'Bounce Rate', value: '-35%' }],
    services: ['Web Design', 'Conversion Rate Optimization', 'UX/UI'],
    testimonial: "The redesign didn't just look better; it actively generated more revenue. The ROI on this project was realized in less than two months.",
    image: '/images/blog-branding.jpg' 
  }
];

const CaseStudies = () => {
  return (
    <section className="w-full min-h-[70vh] bg-surface-muted px-5 py-10 text-text-main md:px-8 lg:px-10 lg:py-16">
      <SEO title="Case Studies" description="See our proven impact." />

      <div className="mx-auto w-full max-w-[1250px]">
        <div className="border-b border-border pb-12">
          <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[3px] text-text-muted">
            CaseStudies
          </p>
          <h1 className="font-sans text-[42px] font-medium leading-tight tracking-[-1px] sm:text-[52px] md:text-[64px]">
            Case Studies
          </h1>
          <p className="mt-6 w-full max-w-[500px] font-sans text-[14px] leading-6 text-text-muted">
            Deep dives into the results we've delivered.
          </p>
        </div>
        
        <div className="py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {studies.map((study, idx) => (
              <div key={idx} className="group overflow-hidden border border-border bg-surface transition-all hover:border-brand">
                {/* Image */}
                <div className="aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden border-b border-border bg-surface-muted">
                   <img src={study.image} alt={study.client} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                
                <div className="p-8 sm:p-10">
                  <span className="mb-2 block font-sans text-[12px] font-semibold uppercase tracking-[1px] text-text-muted">
                    {study.client}
                  </span>
                  <h3 className="mb-4 font-sans text-[32px] font-medium leading-tight text-text-main">
                    {study.result}
                  </h3>
                  <p className="mb-8 font-sans text-[14px] leading-6 text-text-muted">
                    {study.desc}
                  </p>
                  
                  <Link to={`/case-studies/${study.id}`} className="inline-block cursor-pointer border-b border-brand pb-1 font-sans text-[12px] font-semibold uppercase tracking-[1px] text-text-main transition-all hover:text-text-muted hover:border-[#666]">
                    View Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
