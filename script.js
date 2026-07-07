async function loadCatalog(){
  try{
    const res = await fetch('catalog-data.json');
    const data = await res.json();

    const categoryGrid = document.getElementById('categoryGrid');
    // Map category slugs to compounds page image paths and catalog.html query slugs
    const categoryImageMap = {
      'weight-management-metabolic-research':    { img: 'assets/categories/compounds/metabolic.jpg',        slug: 'metabolic' },
      'recovery-regenerative-research':          { img: 'assets/categories/compounds/recovery.jpg',         slug: 'recovery' },
      'growth-hormone-secretagogues':            { img: 'assets/categories/compounds/growth-hormone.jpg',   slug: 'growth-hormone' },
      'cognitive-neuro-research':               { img: 'assets/categories/compounds/cognitive.jpg',         slug: 'cognitive' },
      'copper-peptides-aesthetic-research':      { img: 'assets/categories/compounds/copper-peptides.jpg',  slug: 'copper-peptides' },
      'longevity-bioregulators':                { img: 'assets/categories/compounds/longevity.jpg',         slug: 'longevity' },
      'advanced-research-compounds':            { img: 'assets/categories/compounds/advanced-research.jpg', slug: 'advanced-research' },
      'hormone-support':                        { img: 'assets/categories/compounds/hormone-support.jpg',   slug: 'hormone-support' },
    };

    if(categoryGrid){
      categoryGrid.innerHTML = data.categories.map(cat => {
        const map = categoryImageMap[cat.slug] || {};
        const img = map.img ? `<div class="category-image"><img src="${map.img}" alt="${cat.name}" loading="lazy"></div>` : '';
        const href = map.slug ? `catalog.html?category=${map.slug}` : 'catalog.html';
        return `
          <a class="category-card" href="${href}">
            ${img}
            <div class="category-content">
              <h2>${cat.name}</h2>
              <p>${cat.count} research listings available.</p>
              <span>Explore →</span>
            </div>
          </a>
        `;
      }).join('');
    }

    const filterBar = document.getElementById('filterBar');
    const catalogBody = document.getElementById('catalogBody');
    if(filterBar && catalogBody){
      const cats = [{name:'All', slug:'all'}, ...data.categories];
      filterBar.innerHTML = cats.map((cat, i) => `<button class="filter-btn ${i===0?'active':''}" data-category="${cat.name}">${cat.name}</button>`).join('');

      const renderRows = (category='All') => {
        const rows = data.compounds.filter(item => category === 'All' || item.primaryCategory === category);
        catalogBody.innerHTML = rows.map(item => `
          <tr>
            <td>${item.product}</td>
            <td>${item.primaryCategory}</td>
            <td>${item.variant || '—'}</td>
            <td>${item.format}</td>
            <td><span class="dot"></span>${item.status}</td>
          </tr>
        `).join('');
      };

      filterBar.addEventListener('click', e => {
        if(!e.target.matches('.filter-btn')) return;
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        renderRows(e.target.dataset.category);
      });

      renderRows();
    }
  }catch(err){
    console.warn('Catalog data could not load:', err);
  }
}
loadCatalog();
