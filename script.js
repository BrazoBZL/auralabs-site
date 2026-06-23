async function loadCatalog(){
  try{
    const res = await fetch('catalog-data.json');
    const data = await res.json();

    const categoryGrid = document.getElementById('categoryGrid');
    if(categoryGrid){
      categoryGrid.innerHTML = data.categories.map(cat => `
        <div class="category-card">
          <h3>${cat.name.replace(' & ', '<br>& ')}</h3>
          <p>${cat.count} research listings available.</p>
        </div>
      `).join('');
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
