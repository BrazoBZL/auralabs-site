const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'aura_labs.db');
const db = new sqlite3.Database(dbPath);

// Blog post data with full HTML content
const blogPosts = [
  {
    title: "Semaglutide Research: Understanding GLP-1 Receptor Agonists",
    slug: "semaglutide-glp1-research",
    category: "Peptide Guides",
    author: "Aura Labs Research Team",
    tags: "semaglutide,glp-1,receptor-agonists,peptide-research",
    excerpt: "Explore the mechanisms and research applications of semaglutide as a GLP-1 receptor agonist. This comprehensive guide covers its peptide structure, signaling pathways.",
    meta_description: "Semaglutide research guide: GLP-1 receptor agonist mechanisms, applications, and research protocols for scientific studies.",
    content: `<h2>Semaglutide Research: Understanding GLP-1 Receptor Agonists</h2>
<p>Semaglutide represents a significant advancement in peptide research, functioning as a selective GLP-1 receptor agonist with demonstrated efficacy in multiple research models. This comprehensive guide examines the scientific foundations, structural characteristics, and research applications of semaglutide.</p>

<h3>Structural and Molecular Characteristics</h3>
<p>Semaglutide is a 31-amino acid peptide analog of glucagon-like peptide-1 (GLP-1). The molecule features a strategic amino acid substitution at position 8 and a fatty acid attachment at position 26, modifications that substantially extend its half-life compared to native GLP-1. These chemical modifications are critical for research applications, enabling prolonged study periods and improved bioavailability in laboratory settings.</p>
<p>The peptide maintains high selectivity for GLP-1 receptors while demonstrating minimal off-target binding, a property essential for mechanistic research focused on GLP-1 signaling pathways.</p>

<h3>Mechanisms of Action in Research Models</h3>
<p>In research settings, semaglutide operates through several well-characterized pathways:</p>
<ul>
<li><strong>Glucose-dependent insulin secretion:</strong> Enhances insulin release specifically during elevated glucose states in vitro and in animal models</li>
<li><strong>Glucagon suppression:</strong> Inhibits glucagon secretion through GLP-1 receptor activation on pancreatic alpha cells</li>
<li><strong>Gastric motility modulation:</strong> Alters gastric emptying rates, a mechanism of significant interest in metabolic research</li>
<li><strong>Appetite signaling:</strong> Activates satiety centers through GLP-1 receptors in the hypothalamus in experimental models</li>
</ul>

<h3>Research Applications and Study Models</h3>
<p>Semaglutide is extensively utilized in multiple research contexts. Rodent models have demonstrated the peptide's effects on glucose homeostasis and weight management pathways. Non-human primate studies have validated GLP-1 signaling mechanisms in species with greater physiological similarity to humans. Cell-based assays continue to elucidate receptor binding kinetics and downstream signaling cascades.</p>

<h3>Pharmacokinetic Properties</h3>
<p>The extended half-life of semaglutide—approximately 7 days in experimental systems—permits once-weekly dosing schedules in research protocols. This extended duration results from the peptide's albumin binding through its fatty acid side chain, which protects it from degradation. Researchers utilize this property to maintain sustained GLP-1 receptor activation throughout extended observation periods.</p>

<h3>Research Considerations and Best Practices</h3>
<p>When designing research protocols utilizing semaglutide, several critical factors warrant attention:</p>
<ul>
<li>Storage conditions must be carefully controlled to maintain peptide integrity</li>
<li>Dosing calculations should account for the extended half-life when scheduling multiple administrations</li>
<li>Control groups must include appropriate vehicle controls to distinguish semaglutide-specific effects</li>
<li>Monitoring for off-target effects requires comprehensive biomarker assessment</li>
</ul>

<h3>Current Research Frontiers</h3>
<p>Recent research explores semaglutide's potential mechanisms in metabolic regulation, cardiovascular function, and neuroprotection. These investigations remain in early phases and are conducted exclusively for research purposes in appropriate laboratory and animal models.</p>

<p><strong>Important Note:</strong> All information presented is for research purposes only. Semaglutide and its analogs are investigational compounds studied in controlled laboratory and animal research settings.</p>`
  },
  {
    title: "TB-500 and BPC-157 Stack: Research Protocols and Considerations",
    slug: "tb500-bpc157-stack-research",
    category: "Research Protocols",
    author: "Aura Labs Research Team",
    tags: "tb-500,bpc-157,peptide-stacking,research-protocols",
    excerpt: "Advanced research protocols for TB-500 and BPC-157 combined administration. Examine synergistic mechanisms, dosing considerations, and study design principles.",
    meta_description: "TB-500 and BPC-157 stacking protocols: Research mechanisms, dosing guidelines, and best practices for peptide combination studies.",
    content: `<h2>TB-500 and BPC-157 Stack: Research Protocols and Considerations</h2>
<p>The combination of TB-500 (thymosin beta-4) and BPC-157 (body protection compound-157) represents an advanced research protocol designed to explore potential synergistic mechanisms in tissue repair and regeneration models. This guide provides comprehensive information on protocol design, dosing considerations, and mechanistic interactions relevant to researchers.</p>

<h3>Individual Peptide Characteristics</h3>
<p><strong>TB-500 (Thymosin Beta-4)</strong> is a 43-amino acid peptide naturally produced in thymic tissue. In research applications, it demonstrates broad effects on tissue remodeling, immune modulation, and cellular migration. The peptide has been extensively characterized in laboratory models examining wound healing and tissue regeneration.</p>
<p><strong>BPC-157</strong> is a 15-amino acid peptide fragment derived from body protection compound. Research indicates it influences multiple physiological systems including gastrointestinal function, neurological signaling, and tissue repair mechanisms.</p>

<h3>Rationale for Combined Administration</h3>
<p>Research protocols combining these peptides are based on mechanistic complementarity:</p>
<ul>
<li>TB-500 promotes cellular migration and actin remodeling</li>
<li>BPC-157 demonstrates cytoprotective and growth factor-modulating properties</li>
<li>Theoretical synergy suggests enhanced tissue remodeling responses</li>
<li>Distinct receptor mechanisms minimize competitive interactions</li>
</ul>

<h3>Protocol Design Considerations</h3>
<p>Effective research protocols incorporating both peptides require careful attention to several variables. Administration timing can be simultaneous or staggered depending on mechanistic hypotheses. Dosing ratios may vary from 1:1 to 1:2 TB-500:BPC-157 depending on research objectives. Control groups should include single-peptide comparisons to isolate combination effects.</p>

<h3>Dosing Guidelines for Research</h3>
<p>In published research models, TB-500 typically ranges from 2-10 mg per kilogram body weight in animal studies, while BPC-157 demonstrates activity at 10-100 ng/kg doses. When stacked, researchers often maintain these individual effective doses rather than proportionally reducing either peptide. Injection sites can be localized to regions of interest or systemic depending on research design.</p>

<h3>Monitoring and Assessment Parameters</h3>
<p>Comprehensive research protocols should incorporate multiple assessment modalities:</p>
<ul>
<li>Histological examination of target tissues for structural changes</li>
<li>Molecular biomarker analysis including growth factors and inflammatory markers</li>
<li>Functional assessments specific to tissue type under investigation</li>
<li>Systemic parameters including liver and kidney function tests</li>
<li>Behavioral and neurological assessments where relevant</li>
</ul>

<h3>Potential Mechanisms of Synergy</h3>
<p>Current research hypotheses suggest several mechanisms by which these peptides might work synergistically. TB-500's cell migration-enhancing properties could facilitate delivery of BPC-157 to target tissues. BPC-157's growth factor modulation might create an optimal environment for TB-500's remodeling effects. Both peptides may independently activate distinct protective pathways that converge on tissue repair endpoints.</p>

<h3>Safety and Control Considerations</h3>
<p>Research protocols must include comprehensive safety monitoring. Baseline measurements of relevant physiological parameters should be established before peptide administration. Regular monitoring throughout the study period helps identify any unexpected effects. Post-study follow-up assessment of long-term outcomes contributes to mechanistic understanding.</p>

<p><strong>Important Note:</strong> All information presented is for research purposes only. TB-500 and BPC-157 are investigational peptides studied exclusively in controlled research environments.</p>`
  },
  {
    title: "HGH Secretagogues: Ipamorelin and CJC-1295 Research Overview",
    slug: "hgh-secretagogues-research",
    category: "Peptide Guides",
    author: "Aura Labs Research Team",
    tags: "hgh-secretagogues,ipamorelin,cjc-1295,growth-hormone,peptide-research",
    excerpt: "Comprehensive overview of HGH secretagogues including ipamorelin and CJC-1295. Examine mechanisms of growth hormone release, research applications, and protocol design.",
    meta_description: "HGH secretagogue research: Ipamorelin and CJC-1295 mechanisms, growth hormone release pathways, and research protocol guidelines.",
    content: `<h2>HGH Secretagogues: Ipamorelin and CJC-1295 Research Overview</h2>
<p>Human growth hormone (HGH) secretagogues represent a critical area of endocrinological research, with ipamorelin and CJC-1295 among the most extensively studied peptide analogs. This comprehensive overview examines the mechanisms, characteristics, and research applications of these growth hormone-releasing peptides.</p>

<h3>Understanding HGH Secretagogues</h3>
<p>HGH secretagogues are peptides designed to stimulate the release of endogenous growth hormone from anterior pituitary tissue. Unlike exogenous HGH administration, secretagogues work through natural physiological pathways, making them particularly valuable for research examining pituitary function and growth hormone dynamics.</p>

<h3>Ipamorelin: Mechanism and Characteristics</h3>
<p><strong>Ipamorelin</strong> is a pentapeptide (5-amino acid) that acts as a selective growth hormone-releasing peptide (GHRP) agonist. The peptide demonstrates high selectivity for the GHS-R1a receptor on somatotroph cells, the primary target for growth hormone secretion research.</p>
<p>Key research characteristics include:</p>
<ul>
<li>Rapid onset of action with peak GH secretion within 30-60 minutes in research models</li>
<li>Short half-life (approximately 2 hours), allowing for precise temporal control in protocols</li>
<li>Ghrelin-like effects without significant appetite stimulation in animal studies</li>
<li>Minimal impact on other pituitary hormones in properly designed experiments</li>
<li>Excellent peptide stability and solubility for research applications</li>
</ul>

<h3>CJC-1295: Mechanisms and Research Applications</h3>
<p><strong>CJC-1295</strong> is a 30-amino acid peptide analog of growth hormone-releasing hormone (GHRH). Unlike ipamorelin, CJC-1295 acts directly on GHRH receptors located on somatotroph cells, representing an alternative mechanism for stimulating growth hormone secretion.</p>
<p>The distinctive features of CJC-1295 include:</p>
<ul>
<li>Extended half-life (approximately 30-40 minutes) compared to native GHRH</li>
<li>Sustained GH elevation over extended periods in research models</li>
<li>Albumin binding through strategic amino acid modification</li>
<li>Complementary action to ipamorelin through distinct receptor pathways</li>
<li>Potential for synergistic effects when combined with GHRP analogs</li>
</ul>

<h3>Receptor Mechanisms and Signaling</h3>
<p>Ipamorelin and CJC-1295 activate distinct but complementary pathways in growth hormone regulation. Ipamorelin activates GHS-R1a receptors, primarily ghrelin receptors, while CJC-1295 activates GHRH receptors. These parallel pathways allow researchers to explore growth hormone regulation through multiple mechanistic lenses.</p>

<h3>Research Protocol Design</h3>
<p>Effective research utilizing these secretagogues requires careful protocol design. Baseline growth hormone levels and pulsatile secretion patterns should be characterized before peptide administration. Dosing considerations must account for the peptides' distinct half-lives—ipamorelin's brief duration permits multiple daily administrations, while CJC-1295's extended action suits less frequent dosing schedules.</p>

<p>Research examining combined administration (ipamorelin + CJC-1295) investigates synergistic mechanisms, as the peptides activate complementary pathways. Such studies help elucidate GH regulation through multiple simultaneous receptor activation.</p>

<h3>Monitoring and Assessment</h3>
<p>Comprehensive monitoring should include:</p>
<ul>
<li>Serum growth hormone measurements at defined timepoints</li>
<li>IGF-1 levels reflecting growth hormone bioactivity</li>
<li>Metabolic markers including glucose and insulin responses</li>
<li>Pituitary function assessment through relevant hormone panels</li>
<li>Safety parameters including liver and kidney function</li>
</ul>

<h3>Current Research Frontiers</h3>
<p>Contemporary research explores these secretagogues in aging models, metabolic dysfunction investigation, and pituitary function characterization. The peptides remain valuable tools for understanding growth hormone regulation and endocrine physiology in controlled research settings.</p>

<p><strong>Important Note:</strong> All information presented is for research purposes only. Ipamorelin, CJC-1295, and all growth hormone secretagogues discussed are investigational peptides restricted to controlled research environments.</p>`
  },
  {
    title: "NAD+ in Research: Cellular Energy and Metabolic Studies",
    slug: "nad-research-cellular-energy",
    category: "Research Insights",
    author: "Aura Labs Research Team",
    tags: "nad-plus,cellular-energy,metabolic-research,mitochondrial-function",
    excerpt: "Explore NAD+ biology in research contexts. Examine its role in cellular energy production, metabolic regulation, and applications in longevity and disease research.",
    meta_description: "NAD+ research: Cellular energy metabolism, mitochondrial function, and metabolic studies for scientific investigation.",
    content: `<h2>NAD+ in Research: Cellular Energy and Metabolic Studies</h2>
<p>Nicotinamide adenine dinucleotide (NAD+) represents one of the most fundamental molecules in cellular metabolism, serving as a critical electron carrier in energy production. This comprehensive overview examines NAD+ biology in research contexts, its role in metabolic regulation, and emerging applications in disease and aging research models.</p>

<h3>Fundamental NAD+ Chemistry and Function</h3>
<p>NAD+ exists in two interconnected forms: the oxidized form (NAD+) and the reduced form (NADH). This redox couple participates in hundreds of enzymatic reactions throughout cellular metabolism. The NAD+/NADH ratio represents a critical parameter determining metabolic direction and cellular energy status.</p>
<p>In research applications, understanding this ratio proves essential for interpreting metabolic outcomes. Cells with high NAD+/NADH ratios typically exhibit enhanced catabolic activity and energy production, while lower ratios favor anabolic processes and biosynthesis.</p>

<h3>NAD+ in ATP Production and Glycolysis</h3>
<p>The glycolytic pathway provides the foundational ATP-generating mechanism in all cells. Glyceraldehyde-3-phosphate dehydrogenase (GAPDH), a central glycolytic enzyme, requires NAD+ as an essential cofactor. This enzyme catalyzes the conversion of glyceraldehyde-3-phosphate to 1,3-bisphosphoglycerate, a critical energy-yielding step.</p>
<p>Research examining glucose metabolism requires careful attention to NAD+ availability. Insufficient NAD+ limits glycolytic flux, directly impacting ATP production. This principle underlies many research models investigating metabolic dysfunction in diabetes and neurodegeneration.</p>

<h3>The Citric Acid Cycle and Oxidative Metabolism</h3>
<p>NAD+-dependent dehydrogenases catalyze three critical steps within the citric acid cycle: the isocitrate dehydrogenase, α-ketoglutarate dehydrogenase, and malate dehydrogenase reactions. These enzymes generate NADH, which feeds directly into mitochondrial oxidative phosphorylation, producing the vast majority of cellular ATP.</p>
<p>Mitochondrial NAD+ homeostasis therefore represents a central determinant of oxidative capacity. Research models examining mitochondrial function frequently measure NAD+ and NADH levels as primary indicators of metabolic health.</p>

<h3>NAD+-Consuming Signaling Pathways</h3>
<p>Beyond energy metabolism, NAD+ serves as a substrate for signaling proteins including sirtuins, poly-ADP-ribose polymerases (PARPs), and CD38. These NAD+-consuming enzymes regulate critical biological processes:</p>
<ul>
<li><strong>Sirtuins:</strong> NAD+-dependent deacetylases regulating metabolism, stress resistance, and longevity pathways</li>
<li><strong>PARPs:</strong> DNA damage response enzymes essential for genome maintenance and stress adaptation</li>
<li><strong>CD38:</strong> Immune regulators influenced by NAD+ availability</li>
</ul>

<h3>NAD+ and Mitochondrial Dynamics</h3>
<p>Research increasingly recognizes NAD+ as a central regulator of mitochondrial function beyond simple ATP production. NAD+-dependent sirtuins (particularly SIRT3) control mitochondrial protein acetylation, directly influencing oxidative capacity and metabolic efficiency. Studies examining mitochondrial aging models consistently identify NAD+ depletion as a causative factor in reduced metabolic capacity.</p>

<h3>Research Applications and Model Systems</h3>
<p>NAD+ research extends across multiple experimental contexts:</p>
<ul>
<li><strong>Aging models:</strong> Age-associated NAD+ decline correlates with metabolic dysfunction</li>
<li><strong>Metabolic disease research:</strong> Obesity and insulin resistance models show NAD+ dysregulation</li>
<li><strong>Neurodegeneration studies:</strong> Parkinson's and Alzheimer's models exhibit brain NAD+ depletion</li>
<li><strong>Mitochondrial dysfunction:</strong> Primary and secondary mitochondrial disease models</li>
<li><strong>Stress response research:</strong> Acute and chronic stress impacts on NAD+ homeostasis</li>
</ul>

<h3>Measuring NAD+ in Research</h3>
<p>Multiple analytical approaches exist for NAD+ quantification in research settings. High-performance liquid chromatography (HPLC) provides precise measurement of NAD+, NADH, and their precursors. Mass spectrometry-based approaches offer sensitivity and specificity for complex biological samples. Fluorescence-based assays enable high-throughput screening of NAD+-targeting interventions.</p>

<h3>NAD+ Precursors in Research Models</h3>
<p>Various NAD+ precursors including nicotinamide mononucleotide (NMN), nicotinamide riboside (NR), and nicotinic acid have been utilized in research models to restore NAD+ levels and investigate downstream effects. These approaches enable investigation of whether NAD+ depletion represents a causative factor in specific disease or aging processes.</p>

<p><strong>Important Note:</strong> All information presented is for research purposes only. NAD+ and related compounds are investigated exclusively in controlled laboratory and animal research settings.</p>`
  },
  {
    title: "Research Compliance: Documentation Standards for Peptide Studies",
    slug: "research-compliance-documentation",
    category: "Best Practices",
    author: "Aura Labs Research Team",
    tags: "research-compliance,documentation,regulatory-standards,peptide-studies",
    excerpt: "Essential documentation standards for compliant peptide research. Learn proper record-keeping, regulatory requirements, and best practices for research integrity.",
    meta_description: "Research compliance documentation: Regulatory standards, record-keeping best practices, and documentation protocols for peptide studies.",
    content: `<h2>Research Compliance: Documentation Standards for Peptide Studies</h2>
<p>Rigorous documentation represents the foundation of credible, reproducible, and ethically sound research. This comprehensive guide addresses the critical documentation standards essential for compliant peptide research, from initial protocol design through final result reporting.</p>

<h3>Foundational Documentation Requirements</h3>
<p>Research compliance begins with comprehensive initial documentation. The research protocol itself must clearly articulate the scientific rationale, specific aims, hypotheses, and detailed methodological approaches. All protocols involving animal subjects require institutional animal care and use committee (IACUC) approval and documentation before initiation.</p>
<p>For cell-based research, protocols must address appropriate handling of biological materials and adherence to institutional biosafety requirements. Each research facility should maintain complete protocol documentation alongside approval records from relevant oversight committees.</p>

<h3>Investigator and Personnel Documentation</h3>
<p>Comprehensive personnel documentation ensures research integrity and accountability. All investigators must maintain current training documentation in relevant areas:</p>
<ul>
<li>Laboratory safety and chemical handling</li>
<li>Good Laboratory Practice (GLP) principles where applicable</li>
<li>Responsible conduct of research training</li>
<li>Institutional biosafety requirements</li>
<li>Animal care and use certification (if applicable)</li>
</ul>
<p>Delegation logs clearly identifying which personnel performed specific research activities contribute substantially to compliance and traceability.</p>

<h3>Peptide Source and Chain of Custody Documentation</h3>
<p>Complete documentation of peptide sourcing represents an essential compliance component. Records should include:</p>
<ul>
<li>Supplier information and peptide sourcing documentation</li>
<li>Batch numbers and Certificate of Analysis (CoA) documentation</li>
<li>Lot-specific characterization data confirming peptide identity and purity</li>
<li>Storage conditions and stability monitoring records</li>
<li>Chain of custody documentation from receipt through use and disposal</li>
</ul>
<p>These records ensure complete traceability of experimental materials and facilitate investigation of any unexpected results.</p>

<h3>Experimental Documentation and Laboratory Notebooks</h3>
<p>Laboratory notebooks represent the primary documentation of experimental work and remain essential despite digital alternatives. Effective laboratory notebooks include:</p>
<ul>
<li><strong>Dated entries:</strong> All work should be recorded with complete dates and times</li>
<li><strong>Detailed methodology:</strong> Sufficient detail to permit independent replication by trained personnel</li>
<li><strong>Raw data recording:</strong> Direct documentation of observations and measurements</li>
<li><strong>Deviations:</strong> Clear notation of any protocol deviations with justification</li>
<li><strong>Calculations:</strong> Complete documentation of all data transformations and analytical procedures</li>
</ul>
<p>Contemporaneous documentation—recording information during actual experimental work rather than retroactively—ensures accuracy and credibility.</p>

<h3>Data Management and Electronic Records</h3>
<p>Modern research increasingly relies on electronic data capture and management. Compliant electronic systems must include:</p>
<ul>
<li>Audit trails documenting all data entries, modifications, and user identities</li>
<li>Access controls limiting modification of raw data after completion</li>
<li>Secure backup systems ensuring data preservation</li>
<li>Data integrity verification through appropriate checksums or hash values</li>
<li>Metadata documentation capturing context and provenance information</li>
</ul>
<p>Paper and electronic documentation systems should integrate seamlessly while maintaining complete records of experimental activities.</p>

<h3>Quality Assurance and Calibration Documentation</h3>
<p>Research instruments require regular calibration and maintenance documentation. Comprehensive calibration records should include:</p>
<ul>
<li>Calibration dates and responsible personnel</li>
<li>Calibration standards and reference materials used</li>
<li>Calibration results and acceptance criteria</li>
<li>Equipment downtime and repair documentation</li>
<li>Validation studies confirming measurement accuracy</li>
</ul>
<p>These records demonstrate that measurement systems operated within specification throughout the research period.</p>

<h3>Protocol Deviation Documentation</h3>
<p>Despite careful planning, research frequently requires deviations from approved protocols. Proper compliance requires clear, contemporaneous documentation of:</p>
<ul>
<li>What deviation occurred</li>
<li>When and why the deviation was necessary</li>
<li>Who approved or became aware of the deviation</li>
<li>Whether the deviation affected research validity</li>
<li>Corrective actions taken</li>
</ul>
<p>Transparent deviation documentation strengthens rather than undermines research credibility.</p>

<h3>Results Reporting and Statistical Documentation</h3>
<p>Final results documentation must include complete, transparent reporting of all data analysis. Statistical analyses require documentation of:</p>
<ul>
<li>Statistical test selection and justification</li>
<li>Assumptions testing and validity confirmation</li>
<li>Effect sizes and confidence intervals alongside p-values</li>
<li>Any data transformations or outlier exclusions</li>
<li>Sensitivity analyses testing result robustness</li>
</ul>
<p>Transparent statistical reporting facilitates appropriate interpretation and reproduction of results.</p>

<h3>Record Retention and Long-Term Documentation</h3>
<p>Regulatory and best-practice standards require retention of research documentation for extended periods. Institutional policies typically mandate:</p>
<ul>
<li>Protocol and approval documentation: Indefinitely</li>
<li>Raw experimental data: Minimum 3-7 years</li>
<li>Safety and adverse event records: Extended retention based on regulatory requirements</li>
<li>Quality assurance documentation: Duration of use plus extended retention</li>
</ul>
<p>Secure storage systems protecting documentation integrity represent critical infrastructure for research institutions.</p>

<p><strong>Important Note:</strong> All information presented is for research purposes only. Compliance with applicable regulations and institutional requirements remains the responsibility of individual research facilities and investigators.</p>`
  }
];

// Function to insert posts
function insertBlogPosts() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // Enable foreign keys
      db.run('PRAGMA foreign_keys = ON');

      // Prepare insert statement
      const stmt = db.prepare(`
        INSERT INTO blog_posts (
          title,
          slug,
          content,
          excerpt,
          author,
          category,
          tags,
          meta_description,
          published,
          published_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      let successCount = 0;
      let errorCount = 0;
      const errors = [];
      const now = new Date().toISOString();

      blogPosts.forEach((post, index) => {
        stmt.run(
          post.title,
          post.slug,
          post.content,
          post.excerpt,
          post.author,
          post.category,
          post.tags,
          post.meta_description,
          1, // published
          now,
          function(err) {
            if (err) {
              errorCount++;
              errors.push(`Post ${index + 1} (${post.slug}): ${err.message}`);
              console.error(`Error inserting post ${index + 1}:`, err.message);
            } else {
              successCount++;
              console.log(`✓ Post ${index + 1} inserted: ${post.slug}`);
            }
          }
        );
      });

      stmt.finalize((err) => {
        if (err) {
          reject({ successCount, errorCount, errors, finalizeError: err.message });
        } else {
          // Verify by querying
          db.all('SELECT COUNT(*) as count FROM blog_posts WHERE slug IN (?, ?, ?, ?, ?)',
            ['semaglutide-glp1-research', 'tb500-bpc157-stack-research', 'hgh-secretagogues-research', 'nad-research-cellular-energy', 'research-compliance-documentation'],
            (err, rows) => {
              if (err) {
                reject({ successCount, errorCount, errors, verifyError: err.message });
              } else {
                const verifiedCount = rows[0].count;
                resolve({ successCount, errorCount, errors, verifiedCount });
              }
            }
          );
        }
      });
    });
  });
}

// Run the insertion
insertBlogPosts()
  .then((result) => {
    console.log('\n=== INSERTION COMPLETE ===');
    console.log(`Successfully inserted: ${result.successCount} posts`);
    if (result.errorCount > 0) {
      console.log(`Errors encountered: ${result.errorCount}`);
      result.errors.forEach(err => console.log(`  - ${err}`));
    }
    console.log(`Database verification: ${result.verifiedCount} posts found with matching slugs`);
    
    db.close((err) => {
      if (err) console.error('Error closing database:', err);
      process.exit(result.errorCount > 0 ? 1 : 0);
    });
  })
  .catch((error) => {
    console.error('=== FATAL ERROR ===');
    console.error('Inserted before error:', error.successCount);
    if (error.errors && error.errors.length > 0) {
      console.error('Errors:', error.errors);
    }
    if (error.finalizeError) console.error('Finalize error:', error.finalizeError);
    if (error.verifyError) console.error('Verification error:', error.verifyError);
    
    db.close((err) => {
      if (err) console.error('Error closing database:', err);
      process.exit(1);
    });
  });
