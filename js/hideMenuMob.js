function hideMenu() {
  let elementMenu = document.getElementById('sidebar');
  elementMenu.classList.remove('active');
}

function disableVisibility() {
  let elementHTMLTitle = document.getElementById('elementHTMLTitle');
  let elementHTMLText = document.getElementById('elementHTMLText');

  document.addEventListener('click', function (event) {
    if (event.target.id === 'insomnia-link') {
      elementHTMLTitle.style.display = 'none';
      elementHTMLText.style.display = 'none';
      let contentDiv = document.getElementById('content');
      let iframe = document.createElement('iframe');
      iframe.id = 'openPages';
      iframe.name = 'iframe';
      contentDiv.appendChild(iframe);
      hideMenu();
    } else if (
      event.target.tagName.toLowerCase() === 'a' &&
      event.target.id !== 'sidebarCollapse'
    ) {
      window.location.href = 'index.html';
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth <= 991.98) {
      hideMenu();
    }
  });
}
