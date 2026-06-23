# Aura Labs SEO Implementation Guide

## Overview

This document outlines the SEO infrastructure implemented across Aura Labs website, including technical SEO, content strategy, and ongoing optimization.

---

## Technical SEO Implemented

### 1. Meta Tags & Open Graph

All pages include:
- `<meta name="description">` — 160-char page summaries
- `<meta name="keywords">` — Relevant search terms
- `<meta name="robots" content="index, follow">` — Crawler instructions
- `<meta property="og:*">` — Open Graph for social sharing
- `<link rel="canonical">` — Duplicate content prevention

Example:
```html
<meta name="description" content="Premium research materials held to a higher standard. 50+ research-grade compounds with transparent documentation." />
<meta property="og:title" content="Aura Labs — Premium Research Materials" />
<meta property="og:image" content="https://auralabsbio.co/assets/hero-packaging.jpg" />
<link rel="canonical" href="https://auralabsbio.co/" />
```

### 2. Structured Data Markup

#### Organization Schema (Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aura Labs",
  "url": "https://auralabsbio.co",
  "logo": "https://auralabsbio.co/assets/hero-packaging.jpg",
  "description": "Premium research-grade compounds with transparent documentation"
}
```

#### Blog Schema (Blog Posts)
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Post Title",
  "description": "Post excerpt",
  "image": "https://auralabsbio.co/assets/hero-packaging.jpg",
  "author": {
    "@type": "Organization",
    "name": "Aura Labs"
  },
  "datePublished": "2026-06-23",
  "dateModified": "2026-06-23"
}
```

These help search engines understand page content and improve rich snippet displays.

### 3. Sitemap & Robots.txt

**Auto-generated sitemap**: `/sitemap.xml`
- Lists all static pages
- Includes all published blog posts
- Sets changefreq and lastmod for each URL
- Automatically updated when new posts are published

**Robots.txt**: `/robots.txt`
- Allows public access to site
- Blocks API endpoints from crawling
- References sitemap location

### 4. Mobile Optimization

- Responsive design (`<meta name="viewport">`)
- Mobile-first CSS approach
- Touch-friendly navigation
- Fast load times (optimized images)

### 5. Site Speed

Key optimizations:
- Minified CSS (styles.css)
- Image optimization (JPG compression)
- Font subsetting (Google Fonts)
- Lazy loading support

---

## Content SEO Strategy

### Keyword Targeting

**Primary Keywords:**
- Research peptides
- Research compounds
- Peptide research
- Premium research materials

**Secondary Keywords:**
- BPC-157
- TB-500
- GHK-Cu
- Peptide storage
- Peptide quality
- Research-grade compounds

### Content Structure

#### Homepage
- **H1**: "Premium research materials held to a higher standard"
- **Content**: Hero, trust signals, featured compounds, quality section
- **CTA**: "View Compounds" button
- **Focus**: Brand authority, quality positioning

#### Blog Section
- **H1**: "Research & Insights"
- **Content**: 3+ published articles
- **Categories**: Peptide Guides, Storage & Handling, Quality Standards
- **Focus**: SEO traffic, thought leadership, long-tail keywords

#### Blog Posts (Examples)
1. "Understanding BPC-157: Structure and Research Applications"
   - Targets: BPC-157, peptide research, research applications
   - Length: 600+ words
   - Schema: BlogPosting with author, date, category

2. "Peptide Storage and Stability: Best Practices for Research"
   - Targets: peptide storage, stability, best practices
   - Length: 600+ words
   - Practical guidance + scientific accuracy

3. "Evaluating Peptide Quality: What to Look for in Research Materials"
   - Targets: peptide quality, evaluation, research standards
   - Length: 600+ words
   - Detailed quality metrics and documentation

---

## URL Structure

```
/                           — Homepage
/catalog.html               — Product catalog
/blog                       — Blog archive
/blog/:slug                 — Individual blog post
/checkout.html              — Checkout page
/account.html               — Account dashboard
/sitemap.xml                — XML sitemap
/robots.txt                 — Robots file
```

**Best Practices Applied:**
- Lowercase URLs
- Hyphens for word separation
- Descriptive slugs
- No query parameters where possible
- Hierarchical structure

---

## Internal Linking Strategy

**Navigation Links:**
- Header nav links to key sections
- Blog posts link to related products
- Product pages link to relevant blog posts
- CTA buttons link to checkout/catalog

**Link Anchor Text:**
- Descriptive (e.g., "View Compounds" not "click here")
- Keyword-rich where natural
- Consistent across pages

---

## Blog Management System

### Publishing New Posts

```bash
# Access backend API
POST /api/blog/posts
{
  "title": "New Post Title",
  "slug": "new-post-slug",
  "content": "<h2>HTML content...</h2>",
  "excerpt": "Short description (150-160 chars)",
  "author": "Author Name",
  "category": "Category",
  "tags": "keyword1, keyword2",
  "meta_description": "SEO-focused description (160 chars)",
  "published": true
}
```

### Best Practices for Blog Content

1. **Title** (50-60 chars)
   - Include main keyword
   - Clear value proposition
   - Example: "Understanding BPC-157: Structure and Research Applications"

2. **Meta Description** (150-160 chars)
   - Include main keyword
   - Describe content value
   - Example: "Comprehensive guide to BPC-157 structure, research applications, and handling for laboratory use."

3. **Slug** (keyword-rich)
   - All lowercase
   - Hyphens between words
   - Example: understanding-bpc-157

4. **Excerpt** (150-160 chars)
   - Summary of content
   - Used in blog archive
   - Should compel clicks

5. **Content Structure**
   - H1: One per page (the title)
   - H2: Main sections
   - H3: Subsections
   - P: Body copy
   - UL/OL: Lists where applicable
   - Strong: Bold important terms

6. **Content Length**
   - Minimum 600 words (ideally 800-1500)
   - More comprehensive = better rankings
   - Balance with readability

7. **Tags & Categories**
   - Use consistent categories
   - Add 3-5 relevant tags
   - Examples:
     - Categories: Peptide Guides, Storage & Handling, Quality Standards
     - Tags: peptides, research, BPC-157, quality, etc.

---

## Link Building Opportunities

### Internal Links
- Blog posts to relevant products
- Product pages to related blog posts
- Category pages to all posts in category

### External Links (Future)
- Scientific citations
- Industry partnerships
- Research institution mentions
- Press mentions

---

## Monitoring & Analytics Setup

### Google Search Console
```
1. Add property: https://auralabsbio.co
2. Verify ownership
3. Submit sitemap: https://auralabsbio.co/sitemap.xml
4. Monitor search performance
5. Check indexation status
```

### Google Analytics
```
Add tracking code to pages:
<script>
  // Google Analytics code here
</script>
```

### Metrics to Monitor
- Organic search traffic
- Keywords driving traffic
- Page rankings (GSC)
- Click-through rate (CTR)
- Avg. position in search results
- Pages indexed
- Mobile usability

---

## Ongoing SEO Tasks

### Monthly
- Review Google Search Console data
- Check indexation status
- Monitor top keywords
- Identify missed opportunities

### Quarterly
- Publish 3-4 new blog posts
- Update existing posts if rankings drop
- Analyze competitor content
- Refine keyword strategy

### Annually
- Comprehensive SEO audit
- Backlink analysis
- Site structure review
- Technical SEO review

---

## Common SEO Issues & Solutions

### Issue: Pages Not Indexed
**Solution:**
```
1. Check /robots.txt doesn't block page
2. Submit to Google Search Console
3. Check for canonical conflicts
4. Ensure sitemap includes page
```

### Issue: Low CTR
**Solution:**
1. Improve meta description
2. Add schema markup for rich snippets
3. Optimize title tag
4. Test variations in GSC

### Issue: High Bounce Rate
**Solution:**
1. Improve page load speed
2. Enhance content relevance
3. Improve CTA visibility
4. Fix mobile usability

---

## Compliance & Disclaimers

All pages include appropriate legal disclaimers:
- Age verification (21+)
- Research-only disclaimer
- Non-FDA-approved statements
- Terms of Service links
- Privacy Policy links

---

## Competitive Analysis

**Competitor Keywords:**
- Premium research compounds
- Research peptides
- Quality research materials
- Transparent research sourcing

**Differentiation Factors:**
- Focus on quality over quantity
- Transparent documentation
- Educational blog content
- Premium positioning

---

## Future SEO Opportunities

1. **Video Content**
   - Product overview videos
   - Research protocol guides
   - Staff interviews

2. **Infographics**
   - Peptide structure diagrams
   - Research timeline
   - Quality verification process

3. **Podcast**
   - Research industry interviews
   - Peptide science discussions
   - Customer stories

4. **Webinars**
   - Peptide research basics
   - Quality evaluation workshops
   - Industry trends

5. **Resource Center**
   - Downloadable guides
   - Research templates
   - Database of compounds

---

## SEO Checklist for New Content

- [ ] Keyword research completed
- [ ] Title optimized (50-60 chars, keyword-rich)
- [ ] Meta description written (150-160 chars)
- [ ] URL slug is keyword-rich and lowercase
- [ ] H1 tag used once
- [ ] H2/H3 structure for readability
- [ ] Minimum 600 words
- [ ] Internal links added (3-5)
- [ ] Tags & category assigned
- [ ] Image alt text included
- [ ] Schema markup applied
- [ ] Mobile readability checked
- [ ] Page speed tested
- [ ] Spell & grammar check done
- [ ] Published & indexed verified

---

## Support & Resources

- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics**: https://analytics.google.com
- **Schema.org**: https://schema.org
- **Screaming Frog SEO Spider**: Free site audit tool
- **SEMrush**: Competitive analysis
- **Ahrefs**: Backlink analysis

---

*Last Updated: June 23, 2026*
