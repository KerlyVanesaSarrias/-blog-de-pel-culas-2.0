fetch('/components/header.html')
  .then(res => res.text())
  .then(data => {
    const header = document.getElementById('header');
    if (header) header.innerHTML = data;
  });

fetch('/components/footer.html')
  .then(res => res.text())
  .then(data => {
    const footer = document.getElementById('footer');
    if (footer) footer.innerHTML = data;
  });