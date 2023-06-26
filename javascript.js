let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('navbar');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('navbar [href*=' + id + ']').classList.add ('active');  
      });
    };
  });
};

// Notes and takeaways: The code above enables the UI to scroll to corresponding sections when the sections are clicked in the navbar.