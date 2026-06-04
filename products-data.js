// AURA LABS - COMPREHENSIVE PRODUCT DATABASE
// Educational format with stacking guides and contraindications

const productDatabase = {
  "Weight Loss": [
    {
      id: "semaglutide-2mg",
      name: "Semaglutide 2mg",
      price: 30,
      market: "260–300",
      position: "FAR BELOW MARKET",
      format: "Lyophilized Powder",
      
      description: "Semaglutide is a GLP-1 receptor agonist that mimics glucagon-like peptide-1, a hormone that regulates blood sugar and appetite. It works by slowing gastric emptying, increasing feelings of fullness, and reducing hunger signals. The 2mg dose is ideal for first-time research.",
      
      mechanism: "GLP-1 agonist → increases satiety → reduces appetite → supports weight management",
      
      bestFor: ["Weight loss research", "Appetite suppression studies", "Metabolic health", "Blood sugar management"],
      
      stackWith: [
        {
          product: "Tirzepatide 5mg",
          goal: "Enhanced weight loss (dual agonist + GLP-1)",
          reason: "Tirzepatide acts on GIP + GLP-1, creating synergistic appetite suppression"
        },
        {
          product: "AOD-9604 5mg",
          goal: "Fat loss + muscle preservation",
          reason: "AOD-9604 targets fat mobilization while Semaglutide suppresses appetite"
        },
        {
          product: "5-Amino-1MQ 10mg",
          goal: "Enhanced metabolic rate + appetite control",
          reason: "1MQ increases brown fat activity; Semaglutide reduces intake"
        }
      ],
      
      avoidWith: [
        {
          product: "Liraglutide (at same time)",
          reason: "Both are GLP-1 agonists; combining increases side effects without benefit"
        },
        {
          product: "Dulaglutide",
          reason: "Similar mechanism; redundant and increases nausea risk"
        }
      ],
      
      researchNotes: "Most researched peptide for weight loss. Typical research: 0.25-2.4mg weekly over 16+ weeks shows 15-20% body weight reduction.",
      
      safetyConsiderations: "Monitor for pancreatitis symptoms. Not for individuals with personal/family history of medullary thyroid cancer."
    },
    
    {
      id: "semaglutide-5mg",
      name: "Semaglutide 5mg",
      price: 49,
      market: "460–520",
      position: "FAR BELOW MARKET",
      format: "Lyophilized Powder",
      
      description: "Higher concentration of Semaglutide for advanced research. 5mg provides stronger appetite suppression and metabolic effects compared to 2mg, suitable for continuation studies after tolerance development.",
      
      mechanism: "GLP-1 agonist (higher dose) → pronounced satiety → potent appetite reduction",
      
      bestFor: ["Advanced weight loss research", "Continuation studies", "Metabolic optimization"],
      
      stackWith: [
        {
          product: "BPC-157 10mg",
          goal: "Weight loss + tissue recovery (if exercise-induced)",
          reason: "BPC-157 supports muscle healing during caloric deficit"
        },
        {
          product: "CJC-1295 5mg (no DAC)",
          goal: "Fat loss + lean muscle retention",
          reason: "CJC-1295 preserves muscle mass during Semaglutide-induced weight loss"
        }
      ],
      
      avoidWith: [
        {
          product: "Cagrilintide (same phase)",
          reason: "Both target appetite; compounding nausea/GI side effects"
        },
        {
          product: "Retatrutide (concurrent)",
          reason: "Retatrutide is more potent triple agonist; combined = excessive GLP-1 activity"
        }
      ],
      
      researchNotes: "Research shows enhanced results at 5mg vs 2mg over 8+ week periods. Typical: 20-25% body weight reduction.",
      
      safetyConsiderations: "Higher dose may increase GI side effects. Start lower, titrate up."
    },

    {
      id: "retatrutide-5mg",
      name: "Retatrutide 5mg",
      price: 49,
      market: "500–550",
      position: "VERY LOW",
      format: "Lyophilized Powder",
      
      description: "Retatrutide is a triple GIP/GLP-1/GCG receptor agonist—next-generation weight loss peptide. Unlike GLP-1 only agonists, it activates three appetite/metabolism pathways simultaneously, creating more potent effects with potentially fewer side effects.",
      
      mechanism: "GIP + GLP-1 + GCG agonist → multi-pathway appetite suppression + metabolic boost",
      
      bestFor: ["Next-gen weight loss research", "Metabolic acceleration", "Advanced obesity research", "Glucagon pathway studies"],
      
      stackWith: [
        {
          product: "NAD+ 500mg",
          goal: "Weight loss + cellular energy optimization",
          reason: "NAD+ enhances mitochondrial function; Retatrutide suppresses appetite"
        },
        {
          product: "Adipotide 5mg",
          goal: "Targeted fat loss + weight reduction",
          reason: "Adipotide ablates fat cells; Retatrutide prevents appetite compensation"
        }
      ],
      
      avoidWith: [
        {
          product: "Semaglutide (concurrent)",
          reason: "Retatrutide is more potent; combining creates excessive GLP-1 signaling"
        },
        {
          product: "Tirzepatide",
          reason: "Both are multi-agonists; additive effects without additional benefit"
        }
      ],
      
      researchNotes: "Newest class of weight loss peptide. Early research: 20-25% weight reduction over 12 weeks. Side effect profile potentially better than Semaglutide alone.",
      
      safetyConsiderations: "Triple agonist = stronger effects. Monitor closely. Not recommended to combine with other GLP-1 agonists."
    }
  ],
  
  "Healing & Recovery": [
    {
      id: "bpc157-2mg",
      name: "BPC-157 2mg",
      price: 30,
      market: "260–310",
      position: "VERY UNDER MARKET",
      format: "Lyophilized Powder",
      
      description: "BPC-157 (Body Protection Compound-157) is a pentadecapeptide discovered in gastric juice. It's one of the most researched healing peptides, promoting tissue repair across multiple systems: muscle, tendon, bone, gut, and nervous system. It works by stimulating growth factors and improving blood flow to damaged areas.",
      
      mechanism: "Growth factor upregulation (VEGF, FGF) → angiogenesis → tissue proliferation → accelerated healing",
      
      bestFor: ["Injury recovery", "Tendon/ligament repair", "Muscle damage recovery", "Gut healing", "Neurological recovery"],
      
      stackWith: [
        {
          product: "TB-500 5mg",
          goal: "Synergistic tissue healing (stack)",
          reason: "BPC-157 + TB-500 = potent healing stack. BPC builds tissue, TB-500 extends it systemic-wide"
        },
        {
          product: "GHK-CU 50mg",
          goal: "Collagen remodeling + structural healing",
          reason: "GHK-CU stimulates collagen synthesis; BPC-157 stimulates growth factors"
        },
        {
          product: "Ipamorelin 5mg",
          goal: "Recovery + muscle preservation during rehab",
          reason: "Ipamorelin drives HGH which synergizes with BPC-157's healing"
        }
      ],
      
      avoidWith: [
        {
          product: "Semaglutide (if gut-sensitive)",
          reason: "Both affect GI system; may cause GI distress if stacked"
        }
      ],
      
      researchNotes: "100+ peer-reviewed studies. Dosing: 250–500mcg daily. Typical timeline: 4-8 weeks shows tissue improvements. Best results with localized application + systemic administration.",
      
      safetyConsiderations: "Well-tolerated. No major side effects in research. Can be used long-term."
    },

    {
      id: "bpc157-10mg",
      name: "BPC-157 10mg",
      price: 68,
      market: "700–850",
      position: "MAJOR PRICING ROOM",
      format: "Lyophilized Powder",
      
      description: "High-dose BPC-157 for intensive tissue repair research. 10mg provides sustained healing signaling for severe injuries, chronic conditions, or comprehensive systemic recovery. Premium research concentration.",
      
      mechanism: "Enhanced growth factor cascade → accelerated tissue regeneration across systems",
      
      bestFor: ["Major injury recovery", "Chronic pain research", "Post-surgical healing", "Systemic tissue repair"],
      
      stackWith: [
        {
          product: "BPC-157 5mg + TB-500 10mg",
          goal: "Elite healing stack (advanced recovery)",
          reason: "Maximal synergy for severe injuries or post-operative rehab"
        },
        {
          product: "CJC-1295 no DAC 5mg",
          goal: "Tissue healing + HGH axis support",
          reason: "CJC-1295 amplifies natural HGH; BPC-157 directs it to injured tissues"
        }
      ],
      
      avoidWith: [
        {
          product: "NSAIDs (high dose)",
          reason: "NSAIDs reduce inflammation BPC-157 relies on; may blunt effects"
        }
      ],
      
      researchNotes: "Research dosing: 10mcg/kg daily shows rapid healing. Typical: major injuries heal 30-50% faster with BPC-157.",
      
      safetyConsiderations: "Extremely safe. Can be used indefinitely. Consider site-specific injection for localized injuries."
    },

    {
      id: "tb500-5mg",
      name: "TB-500 5mg",
      price: 55,
      market: "360–420",
      position: "UNDER MARKET",
      format: "Lyophilized Powder",
      
      description: "TB-500 (Thymosin Beta 4) is a naturally occurring peptide that regulates cell migration, tissue repair, and inflammation. Unlike BPC-157 which concentrates locally, TB-500 works systemically to promote healing throughout the entire body. It's particularly effective for soft tissue recovery.",
      
      mechanism: "Cell migration + anti-inflammatory signaling → systemic tissue repair → inflammation reduction",
      
      bestFor: ["Systemic healing", "Soft tissue repair", "Joint recovery", "Collagen restructuring", "Inflammation reduction"],
      
      stackWith: [
        {
          product: "BPC-157 5mg",
          goal: "Local + systemic healing synergy",
          reason: "BPC-157 = local, TB-500 = systemic. Combined = comprehensive recovery"
        },
        {
          product: "GHK-CU 50mg",
          goal: "Healing + collagen optimization",
          reason: "Both promote collagen; TB-500 distributes systemically"
        }
      ],
      
      avoidWith: [
        {
          product: "High-dose corticosteroids",
          reason: "Corticosteroids suppress inflammatory signals TB-500 relies on"
        }
      ],
      
      researchNotes: "Dosing: 2mg weekly shows strong results over 4-8 weeks. Often used for joint, tendon, and muscle recovery.",
      
      safetyConsiderations: "Very safe. Can enhance immune function slightly. Use with caution if immunosuppressed."
    },

    {
      id: "ghkcu-50mg",
      name: "GHK-CU 50mg",
      price: 32,
      market: "390–450",
      position: "EXTREMELY LOW",
      format: "Solution",
      
      description: "GHK-Cu (Copper Peptide) is a collagen-boosting peptide that signals skin and tissue cells to increase collagen synthesis, reduce inflammation, and improve structural integrity. It's widely used in research for skin health, wound healing, and anti-aging protocols. The copper component is essential for cross-linking collagen.",
      
      mechanism: "Collagen upregulation + copper-mediated cross-linking → tissue strength + structural repair",
      
      bestFor: ["Collagen synthesis research", "Skin health", "Wound healing", "Anti-aging", "Bone density studies"],
      
      stackWith: [
        {
          product: "BPC-157 5mg",
          goal: "Healing + collagen integrity",
          reason: "BPC-157 drives growth factors; GHK-Cu optimizes collagen quality"
        },
        {
          product: "TB-500 5mg",
          goal: "Systemic collagen remodeling",
          reason: "TB-500 facilitates cell migration; GHK-Cu builds collagen scaffold"
        },
        {
          product: "NAD+ 500mg",
          goal: "Cellular energy for collagen synthesis",
          reason: "NAD+ energizes fibroblasts; GHK-Cu directs them toward collagen"
        }
      ],
      
      avoidWith: [
        {
          product: "Retinoids (high dose, same phase)",
          reason: "Both stimulate collagen remodeling; can cause excessive skin turnover"
        }
      ],
      
      researchNotes: "Topical + systemic research shows increased skin elasticity in 4-6 weeks. Oral/injection: 50-100mg weekly.",
      
      safetyConsiderations: "Well-tolerated. Copper is essential; excess is rare with peptide dosing. Topical application safe long-term."
    }
  ],

  "HGH Secretagogues": [
    {
      id: "ipamorelin-2mg",
      name: "Ipamorelin 2mg",
      price: 24,
      market: "170–200",
      position: "VERY UNDER MARKET",
      format: "Lyophilized Powder",
      
      description: "Ipamorelin is a selective growth hormone secretagogue that stimulates the pituitary gland to release natural human growth hormone (HGH). Unlike exogenous HGH, Ipamorelin works with your body's natural feedback mechanisms, making it safer for long-term research. It's the most selective GHS available.",
      
      mechanism: "GHS receptor agonist → pituitary GH release → endogenous HGH elevation",
      
      bestFor: ["Natural HGH stimulation", "Muscle growth research", "Recovery optimization", "Fat loss + lean mass", "Aging research"],
      
      stackWith: [
        {
          product: "CJC-1295 no DAC 5mg",
          goal: "Synergistic HGH elevation (stack)",
          reason: "Ipamorelin = pulse GH release; CJC-1295 = sustained baseline. Combined = optimal HGH curve"
        },
        {
          product: "BPC-157 5mg",
          goal: "HGH-driven recovery + healing",
          reason: "Ipamorelin boosts HGH; BPC-157 channels it to recovery"
        },
        {
          product: "GHRP-2 5mg",
          goal: "Enhanced GH pulse (advanced stack)",
          reason: "Both GHS; creates powerful synchronized GH release"
        }
      ],
      
      avoidWith: [
        {
          product: "Somatostatin analogues",
          reason: "Somatostatin inhibits GH; directly opposes Ipamorelin"
        }
      ],
      
      researchNotes: "Dosing: 100-200mcg daily shows 2-3x natural GH baseline elevation. Peak effects at 30-60 min post-injection.",
      
      safetyConsiderations: "No suppression of natural GH axis. Very safe long-term. Tolerance develops slowly (~4-6 months)."
    },

    {
      id: "ipamorelin-5mg",
      name: "Ipamorelin 5mg",
      price: 49,
      market: "330–390",
      position: "LARGE GAP",
      format: "Lyophilized Powder",
      
      description: "Higher-dose Ipamorelin for advanced GH research. 5mg provides stronger, more sustained HGH elevation compared to 2mg. Ideal for experienced researchers or continuation studies requiring enhanced effects.",
      
      mechanism: "Enhanced GHS signaling → pronounced GH pulses → optimized muscle growth + recovery",
      
      bestFor: ["Advanced HGH research", "Muscle hypertrophy studies", "Athletic performance", "Body composition optimization"],
      
      stackWith: [
        {
          product: "CJC-1295 w/DAC 5mg",
          goal: "Elite HGH protocol (professional stack)",
          reason: "Ipamorelin (pulsatile) + CJC-1295 w/DAC (baseline) = pharmaceutical-grade HGH curve"
        },
        {
          product: "TB-500 5mg",
          goal: "HGH-driven recovery + systemic healing",
          reason: "Ipamorelin raises HGH; TB-500 directs repair"
        }
      ],
      
      avoidWith: [
        {
          product: "Corticosteroids",
          reason: "Corticosteroids suppress GH; diminish Ipamorelin effects"
        }
      ],
      
      researchNotes: "Research shows 5mg yields 4-6x natural GH elevation. Often used in athletic performance research.",
      
      safetyConsiderations: "Increased dosage may cause slight water retention. Well-tolerated otherwise."
    },

    {
      id: "cjc1295-nodac-5mg",
      name: "CJC-1295 no DAC 5mg",
      price: 93,
      market: "430–510",
      position: "UNDER MARKET",
      format: "Lyophilized Powder",
      
      description: "CJC-1295 without DAC is a GHRH (growth hormone-releasing hormone) analog that rapidly stimulates pituitary GH release. Unlike the DAC version which lasts 7+ days, no-DAC version has a 30-60 minute duration, making it ideal for stacking with Ipamorelin for optimized HGH secretion patterns.",
      
      mechanism: "GHRH analog → rapid pituitary GH stimulation → short-duration GH spike",
      
      bestFor: ["Rapid HGH elevation", "Ipamorelin stacking", "GH pulse optimization", "Athletic recovery"],
      
      stackWith: [
        {
          product: "Ipamorelin 5mg",
          goal: "Dual-mechanism HGH elevation (elite stack)",
          reason: "CJC-1295 (GHRH) + Ipamorelin (GHS) = synergistic GH release"
        },
        {
          product: "GHRP-2 5mg",
          goal: "Maximum GH pulse (aggressive stack)",
          reason: "Three mechanisms: GHRH + GHS + GHRP = potent GH elevation"
        }
      ],
      
      avoidWith: [
        {
          product: "Somatostatin (high dose)",
          reason: "Directly opposes GH elevation"
        }
      ],
      
      researchNotes: "Dosing: 100mcg daily. Often used with Ipamorelin for enhanced results. Peak GH at 15-30 min post-injection.",
      
      safetyConsiderations: "Very safe. No negative feedback on natural GH axis. Can be stacked indefinitely."
    }
  ],

  "Nootropics & Cognitive": [
    {
      id: "semax-5mg",
      name: "Semax 5mg",
      price: 54,
      market: "260–310",
      position: "BELOW MARKET",
      format: "Lyophilized Powder",
      
      description: "Semax is a neuroprotective peptide derived from ACTH that enhances cognitive function, stress resilience, and neural repair. It increases BDNF (brain-derived neurotrophic factor), promoting neuroplasticity and cognitive enhancement. Used extensively in Russian research for cognition and neuroprotection.",
      
      mechanism: "BDNF upregulation + neuroprotection → cognitive enhancement + stress resilience",
      
      bestFor: ["Cognitive enhancement", "Stress management research", "Neuroprotection", "Learning optimization", "Age-related cognitive decline"],
      
      stackWith: [
        {
          product: "NAD+ 500mg",
          goal: "Neural energy + cognition optimization",
          reason: "NAD+ energizes brain; Semax enhances neural plasticity"
        },
        {
          product: "DSIP 5mg",
          goal: "Cognitive enhancement + sleep quality",
          reason: "Semax boosts focus; DSIP improves sleep consolidation"
        }
      ],
      
      avoidWith: [
        {
          product: "Sedating antihistamines (high dose)",
          reason: "May blunt cognitive-enhancing effects"
        }
      ],
      
      researchNotes: "Dosing: 500mcg-1mg daily. Research shows improved memory consolidation, processing speed in 2-4 weeks.",
      
      safetyConsiderations: "Well-tolerated. Promotes neurogenesis. Can be used long-term."
    },

    {
      id: "nad-500mg",
      name: "NAD+ 500mg",
      price: 78,
      market: "390–460",
      position: "LOW",
      format: "Lyophilized Powder",
      
      description: "NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme central to cellular energy production and DNA repair. It declines with age, contributing to aging and neurological decline. NAD+ research shows restoration of mitochondrial function, enhanced longevity markers, and improved cognitive performance.",
      
      mechanism: "Mitochondrial NAD+ restoration → energy production → sirtuin activation → cellular repair",
      
      bestFor: ["Cellular energy optimization", "Anti-aging research", "Mitochondrial health", "Cognitive support", "Longevity studies"],
      
      stackWith: [
        {
          product: "Semax 5mg",
          goal: "Brain energy + cognition",
          reason: "NAD+ energizes neurons; Semax enhances plasticity"
        },
        {
          product: "BPC-157 5mg",
          goal: "Tissue repair + cellular energy",
          reason: "NAD+ provides energy for BPC-157-driven repair"
        }
      ],
      
      avoidWith: [
        {
          product: "Niacin (high dose, same phase)",
          reason: "Both elevate NAD; may cause flushing"
        }
      ],
      
      researchNotes: "Dosing: 250-500mg daily. Research shows NAD+ restoration in 4-8 weeks. Improves mitochondrial markers.",
      
      safetyConsiderations: "Very safe. Enhances cellular function. Can be used indefinitely."
    }
  ],

  "Specialty & Rare": [
    {
      id: "foxo4dri-10mg",
      name: "FOXO4-DRI 10mg",
      price: 329,
      market: "1,450–1,600",
      position: "SIGNIFICANT PRICING ROOM",
      format: "Lyophilized Powder",
      
      description: "FOXO4-DRI is a senolytic peptide that targets senescent (aging) cells—cells that no longer divide but persist and secrete inflammatory factors. FOXO4-DRI disrupts protein-protein interactions, causing senescent cells to undergo apoptosis (cell death). This is cutting-edge longevity research.",
      
      mechanism: "Senescent cell targeting → apoptosis induction → inflammation reduction → tissue regeneration",
      
      bestFor: ["Cellular senescence research", "Longevity studies", "Age-related disease modeling", "Inflammatory disease research"],
      
      stackWith: [
        {
          product: "NAD+ 500mg",
          goal: "Senescence clearance + cellular rejuvenation",
          reason: "FOXO4-DRI clears old cells; NAD+ energizes new ones"
        },
        {
          product: "BPC-157 10mg",
          goal: "Senescence removal + tissue regeneration",
          reason: "FOXO4-DRI removes damaged cells; BPC-157 rebuilds tissue"
        }
      ],
      
      avoidWith: [
        {
          product: "Immunosuppressants (high dose)",
          reason: "FOXO4-DRI relies on immune recognition; immunosuppression blunts effects"
        }
      ],
      
      researchNotes: "Cutting-edge peptide. Dosing: 2-5mg weekly. Research shows senescent cell reduction in 4-8 weeks.",
      
      safetyConsiderations: "Emerging safety profile. Well-tolerated in studies. Not for immunocompromised individuals."
    }
  ]
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = productDatabase;
}
