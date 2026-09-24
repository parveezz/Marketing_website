const fs = require('fs');
const path = require('path');

function createMinimalPDF(filename, title, content) {
    const safeTitle = title.replace(/[()\\]/g, '');
    const lines = content.replace(/[()\\]/g, '').split('\n');
    
    let textStream = `BT\n/F1 20 Tf\n50 720 Td\n(${safeTitle}) Tj\n0 -30 Td\n/F1 11 Tf\n`;
    
    // We will do very simple text wrapping at ~80 characters
    let yPos = 690;
    for (let rawLine of lines) {
        let currentLine = "";
        let words = rawLine.split(' ');
        for(let word of words) {
            if((currentLine + word).length > 80) {
                textStream += `(${currentLine.trim()}) Tj\n0 -16 Td\n`;
                yPos -= 16;
                currentLine = word + " ";
                if (yPos < 50) { // new page simulation (we just truncate or keep going off page for simplicity in this dummy)
                     // keeping it simple, letting it go off page if too long
                }
            } else {
                currentLine += word + " ";
            }
        }
        if(currentLine.trim() !== "") {
            textStream += `(${currentLine.trim()}) Tj\n0 -16 Td\n`;
            yPos -= 16;
        }
        // Paragraph break
        textStream += `0 -8 Td\n`;
        yPos -= 8;
    }
    
    textStream += `ET`;
    const streamLen = Buffer.byteLength(textStream);

    const pdfTemplate = `%PDF-1.4
1 0 obj <</Type/Catalog/Pages 2 0 R>> endobj
2 0 obj <</Type/Pages/Count 1/Kids[3 0 R]>> endobj
3 0 obj <</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<< /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> >> >>/Contents 4 0 R>> endobj
4 0 obj <</Length ${streamLen}>> stream
${textStream}
endstream endobj
xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000052 00000 n 
0000000101 00000 n 
0000000250 00000 n 
trailer <</Size 5/Root 1 0 R>>
startxref
400
%%EOF`;

    fs.writeFileSync(path.join(__dirname, 'public', filename), pdfTemplate);
    console.log(`Created ${filename}`);
}

const data1 = `The B2B marketing landscape is shifting dramatically as we approach 2027. Traditional outbound methods are yielding lower ROI, while AI-driven personalization and dark social channels are becoming the primary drivers of pipeline generation.

Key Findings:
1. The Rise of "Dark Social": Over 60% of B2B buyer journeys now happen in private communities, Slack groups, and DMs, making traditional attribution models obsolete.
2. AI-Assisted Account Based Marketing (ABM): Teams utilizing AI for predictive intent data are seeing a 45% increase in meeting booking rates.
3. Content Saturation: With the explosion of generative AI, basic SEO content is no longer a differentiator. B2B brands must pivot to high-production original research, podcasts, and video series.
4. Budget Allocation: High-growth companies are shifting 30% of their ad spend from performance marketing to brand building to reduce long-term customer acquisition costs.

Conclusion:
Success in 2027 requires moving away from lead-gating and transactional marketing toward creating genuine value, building communities, and measuring success through pipeline velocity rather than direct attribution.`;

const data2 = `Brand positioning is the foundation of every successful marketing strategy. It is not just your logo or your tagline; it is the distinct space your brand occupies in the mind of your target customer.

The 4 Pillars of Positioning:
1. Target Audience: Who precisely are you serving? "Everyone" is not an audience. The more niche you go, the stronger your positioning becomes.
2. Category: What market are you playing in? Defining your category sets the rules of engagement and identifies your direct competitors.
3. Differentiation: Why should they choose you? This must be a unique, defensible attribute. Pricing is rarely a sustainable differentiator.
4. Proof Points: Why should they believe you? Case studies, proprietary technology, or deep industry expertise validate your claims.

How to Execute a Positioning Audit:
1. Interview your best 10 customers and ask them to describe your company in one sentence.
2. Analyze competitors' homepages and map their value propositions.
3. Identify the "white space" where customer needs are currently unmet by competitors.
4. Codify your positioning statement and align all marketing, sales, and product messaging around it.`;

const data3 = `Conversion Rate Optimization (CRO) is the systematic process of increasing the percentage of website visitors who take a desired action. A simple 1% increase in conversion rate can double your revenue without requiring any additional traffic.

Top 5 CRO Tactics for 2027:
1. Frictionless Forms: Reduce forms to max 3 fields. Use data enrichment tools (like Clearbit) to append the rest of the prospect data automatically in the backend.
2. Social Proof Above the Fold: Do not bury your case studies. Place recognizable client logos and high-impact testimonials immediately visible when the page loads.
3. Interactive Content: Calculators, assessments, and quizzes convert at 2x the rate of static whitepapers. They provide immediate, personalized value to the user.
4. Micro-Copy Optimization: Change your call-to-action (CTA) from "Submit" to value-driven text like "Get Your Free Report" or "See Pricing".
5. Site Speed as a Feature: Every second of load time drops conversions by 7%. Optimize image formats to AVIF/WebP, defer non-critical JS, and utilize Edge caching.

Remember: CRO is never "done". It is an ongoing cycle of hypothesis, A/B testing, and iteration. Always let the data, not opinions, drive design decisions.`;

createMinimalPDF('the-2027-state-of-b2b-marketing.pdf', 'The 2027 State of B2B Marketing', data1);
createMinimalPDF('the-ultimate-guide-to-brand-positioning.pdf', 'The Ultimate Guide to Brand Positioning', data2);
createMinimalPDF('conversion-rate-optimization-handbook.pdf', 'Conversion Rate Optimization Handbook', data3);
