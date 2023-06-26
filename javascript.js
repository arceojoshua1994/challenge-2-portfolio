let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('navbar');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let class = sec.getAttribute('class');
    
    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('navbar [href*=' + class + ']').classList.add ('active');  
      });
    };
  });
};