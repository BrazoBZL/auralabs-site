const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, 'aura_labs.db'), (err) => {
  if (err) console.error(err);
  else console.log('Connected to database');
});

const samplePosts = [
  {
    title: 'Understanding BPC-157: Structure and Research Applications',
    slug: 'understanding-bpc-157',
    excerpt: 'BPC-157 is a synthetic peptide derived from a protective protein found in gastric juice. This article explores its structure, proposed mechanisms, and current research direction.',
    content: `
<h2>What is BPC-157?</h2>

<p>BPC-157 (Body Protection Compound-157) is a 15-amino acid peptide synthesized to replicate a protective sequence within a larger gastric protein. Unlike its parent compound, BPC-157 is more stable and has become increasingly popular in research contexts.</p>

<h3>Chemical Structure and Stability</h3>

<p>The peptide's synthetic nature provides advantages over naturally occurring proteins, including improved bioavailability and stability under various conditions. This makes it particularly suited for laboratory research applications.</p>

<h2>Research Applications</h2>

<p>BPC-157 has been studied extensively for multiple potential applications across different tissue types. Researchers have examined its effects on:</p>

<ul>
<li>Muscle tissue recovery and adaptation</li>
<li>Connective tissue healing processes</li>
<li>Gastric health and mucosal function</li>
<li>Systemic metabolic responses</li>
</ul>

<h3>Current Research Direction</h3>

<p>The scientific community continues to investigate the molecular pathways through which BPC-157 may exert its effects. Current studies focus on understanding the specific receptors and signaling cascades involved.</p>

<h2>Working with BPC-157</h2>

<p>When handling BPC-157 for research purposes, maintain proper storage conditions (typically 2-8°C) and use appropriate documentation. All Aura Labs products come with batch-specific verification and analysis certificates.</p>
    `,
    author: 'Aura Labs',
    category: 'Peptide Guides',
    tags: 'BPC-157, peptides, research',
    meta_description: 'Comprehensive guide to BPC-157 structure, research applications, and handling for laboratory use.',
    published: 1
  },
  {
    title: 'Peptide Storage and Stability: Best Practices for Research',
    slug: 'peptide-storage-best-practices',
    excerpt: 'Proper storage is critical for maintaining peptide integrity and ensuring reliable research results. Learn the science behind peptide stability and practical storage recommendations.',
    content: `
<h2>Why Storage Matters</h2>

<p>Peptides are biological macromolecules susceptible to degradation through multiple pathways. Understanding and controlling these degradation mechanisms is essential for maintaining compound integrity and research validity.</p>

<h3>Degradation Pathways</h3>

<p>Peptides can degrade through hydrolysis, oxidation, and microbial contamination. Each pathway has distinct environmental triggers and prevention strategies.</p>

<h2>Optimal Storage Conditions</h2>

<p><strong>Temperature Control:</strong> Most peptides are best stored at 2-8°C. This slows enzymatic and chemical degradation significantly.</p>

<p><strong>Light Protection:</strong> UV and visible light can accelerate degradation. Use amber or opaque containers when possible.</p>

<p><strong>Humidity Management:</strong> Maintain low humidity to prevent hydrolysis. Store in desiccated conditions when appropriate.</p>

<p><strong>Oxygen Exclusion:</strong> For sensitive peptides, nitrogen-purged or vacuum-sealed containers can prevent oxidative degradation.</p>

<h2>Documentation and Verification</h2>

<p>Every Aura Labs product includes detailed stability data and recommended storage parameters specific to that compound. Check your certificate of analysis for compound-specific guidance.</p>

<h3>Quality Assurance Over Time</h3>

<p>Regular verification of stored compounds ensures consistency. Document storage conditions and maintain proper records for regulatory and research documentation purposes.</p>
    `,
    author: 'Aura Labs Research Team',
    category: 'Storage & Handling',
    tags: 'storage, peptides, stability, best practices',
    meta_description: 'Best practices for storing research peptides, including temperature, humidity, and handling guidelines.',
    published: 1
  },
  {
    title: 'Evaluating Peptide Quality: What to Look for in Research Materials',
    slug: 'evaluating-peptide-quality',
    excerpt: 'Quality evaluation is the foundation of reliable research. This guide explains the key metrics and documentation you should examine when selecting research peptides.',
    content: `
<h2>The Importance of Quality Standards</h2>

<p>Research results are only as reliable as the materials used. Understanding how to evaluate peptide quality is essential for producing valid, reproducible research.</p>

<h2>Key Quality Metrics</h2>

<h3>Purity Assessment</h3>

<p>Peptide purity is typically measured through high-performance liquid chromatography (HPLC). A quality peptide should demonstrate purity of 95% or higher, with detailed analysis showing the identity and quantity of impurities.</p>

<h3>Molecular Weight Verification</h3>

<p>Mass spectrometry provides definitive confirmation of molecular weight. This ensures the synthesized peptide matches the intended structure exactly.</p>

<h3>Amino Acid Analysis</h3>

<p>Quantitative amino acid analysis verifies the composition of the peptide, ensuring all amino acids are present in expected ratios.</p>

<h2>Documentation You Should Receive</h2>

<ul>
<li>Certificate of Analysis (COA) with full analytical data</li>
<li>HPLC chromatograms showing purity profile</li>
<li>Mass spectrometry results confirming molecular weight</li>
<li>Amino acid composition analysis</li>
<li>Storage recommendations specific to the compound</li>
</ul>

<h3>Transparency in Testing</h3>

<p>All Aura Labs products come with comprehensive documentation. We believe researchers deserve complete visibility into the materials they're using.</p>

<h2>Beyond the Numbers</h2>

<p>While analytical data is crucial, also consider supplier reliability, consistency over time, and responsiveness to quality inquiries. Quality is both a measurable standard and a commitment to excellence.</p>
    `,
    author: 'Aura Labs Quality Team',
    category: 'Quality Standards',
    tags: 'quality, peptides, analysis, verification',
    meta_description: 'Guide to evaluating peptide quality metrics, documentation, and standards for research applications.',
    published: 1
  }
];

db.serialize(() => {
  samplePosts.forEach(post => {
    db.run(
      `INSERT INTO blog_posts (title, slug, content, excerpt, author, category, tags, meta_description, published, published_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`,
      [post.title, post.slug, post.content, post.excerpt, post.author, post.category, post.tags, post.meta_description, post.published],
      function(err) {
        if (err) {
          console.error(`Error inserting post "${post.title}":`, err);
        } else {
          console.log(`✓ Created post: ${post.title}`);
        }
      }
    );
  });

  setTimeout(() => {
    db.close(() => {
      console.log('Database seeding complete');
    });
  }, 500);
});
