import { App } from './App.js';

document.getElementById('root').addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-item')) {
    location.href = location.origin + location.pathname + '#' + e.target.id;
  }
});

window.addEventListener('hashchange', () => {
  module.renderOnePageLoadOrURLChange();
});

window.onload = () => {
  module.renderOnePageLoadOrURLChange();
};

var module = {
  setAllRenderersNull: () => {
    document.getElementById('homeRender').innerHTML = '';
    document.getElementById('aboutRender').innerHTML = '';
    document.getElementById('itemRender').innerHTML = '';
    document.getElementById('userRender').innerHTML = '';
    document.getElementById('registerRender').innerHTML = '';
    document.getElementById('dataRender').innerHTML = '';
  },
  renderSpecificItem: (content, renderID) => {
    module.setAllRenderersNull();
    document.getElementById(renderID).innerHTML = content;
  },
  renderOnePageLoadOrURLChange: () => {
    var currentPath = location.hash.substr(1);
    if (currentPath === 'home') {
      module.renderSpecificItem('<my-app></my-app>', 'homeRender');
    } else if (currentPath === 'item') {
      module.renderSpecificItem('<app-item></app-item>', 'itemRender');
    } else if (currentPath === 'user') {
      module.renderSpecificItem('<app-user></app-user>', 'userRender');
    } else if (currentPath === 'cash') {
      module.renderSpecificItem('<app-cash></app-cash>', 'cashRender');
    } else if (currentPath === 'register') {
      module.renderSpecificItem('<app-register></app-register>', 'registerRender');
    } else if (currentPath === 'data') {
      module.renderSpecificItem('<app-data></app-data>', 'dataRender');
    } else {
      module.renderSpecificItem('<p>Page not found</p>', 'homeRender'); // Simple 404 handling
    }
  }
};
