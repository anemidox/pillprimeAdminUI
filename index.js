import { Home } from './components/home/Home.js';
import { Product } from './components/product/Product.js';
import { Login } from './components/login/Login.js';
import { Setting } from './components/setting/Setting.js';
import { Statistic } from './components/statistic/Statistic.js';
import { Data } from './components/data/Data.js';

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
    document.getElementById('dashboardRender').innerHTML = '';
    document.getElementById('productRender').innerHTML = '';
    document.getElementById('loginRender').innerHTML = '';
    document.getElementById('settingRender').innerHTML = '';
    document.getElementById('statisticRender').innerHTML = '';
    document.getElementById('dataRender').innerHTML = '';
  },
  renderSpecificItem: (content, renderID) => {
    module.setAllRenderersNull();
    document.getElementById(renderID).innerHTML = content;
  },
  renderOnePageLoadOrURLChange: () => {
    var currentPath = location.hash.substr(1);
    if (currentPath === 'dashboard') {
      module.renderSpecificItem('<my-home></myhome>', 'dashboardRender');
    } else if (currentPath === 'product') {
      module.renderSpecificItem('<my-product></my-product>', 'productRender');
    } else if (currentPath === 'login') {
      module.renderSpecificItem('<my-login></my-login>', 'loginRender');
    } else if (currentPath === 'setting') {
      module.renderSpecificItem('<my-setting></my-settings>', 'settingRender');
    } else if (currentPath === 'statistic') {
      module.renderSpecificItem('<my-statistic></my-statistic>', 'statisticRender');
    } else if (currentPath === 'data') {
      module.renderSpecificItem('<my-data></-data>', 'dataRender');
    } else {
      module.renderSpecificItem('<p>Page not found</p>', 'homeRender'); // Simple 404 handling
    }
  }
};
