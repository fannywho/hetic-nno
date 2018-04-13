function hoverIcon() {
  const itSecurity = document.querySelector('.themes-label--itSecurity');
  const dataProtection = document.querySelector('.themes-label--dataProtection');
  const algorithm = document.querySelector('.themes-label--algorithm');
  const itCulture = document.querySelector('.themes-label--itCulture');
  const digitalCulture = document.querySelector('.themes-label--digitalCulture');

  const itSecurityIcon = document.querySelector('.theme-icon--itSecurity');
  const dataProtectionIcon = document.querySelector('.theme-icon--dataProtection');
  const algorithmIcon = document.querySelector('.theme-icon--algorithm');
  const itCultureIcon = document.querySelector('.theme-icon--itCulture');
  const digitalCultureIcon = document.querySelector('.theme-icon--digitalCulture');

  const tags = [itSecurity, dataProtection, algorithm, itCulture, digitalCulture];
  const icons = [itSecurityIcon, dataProtectionIcon, algorithmIcon, itCultureIcon, digitalCultureIcon];

  tags.forEach((tag, index) => {
    tag.addEventListener('mouseover', () => {
      icons[index].style.opacity = '1';
    })
    tag.addEventListener('mouseout', () => {
      icons[index].style.opacity = '0.3';
    })
  });
}

hoverIcon();
