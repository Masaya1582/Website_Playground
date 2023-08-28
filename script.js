const openLinkButton = document.getElementById('open-link-button');

openLinkButton.addEventListener('click', () => {
  const externalLink = 'https://masasophi.com/';
  window.open(externalLink, '_blank');
});
