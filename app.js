const basePath = location.pathname.includes('Pages/') ? '../components/' : 'components/';

fetch(`${basePath}header.html`)
  .then(res => res.text())
  .then(data => document.getElementById('header').innerHTML = data);

fetch(`${basePath}footer.html`)
  .then(res => res.text())
  .then(data => document.getElementById('footer').innerHTML = data);