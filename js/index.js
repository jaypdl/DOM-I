const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Adding Nav text
const nav = document.querySelectorAll("nav a");
nav.forEach((item,ind) => item.textContent = siteContent["nav"][`nav-item-${ind +1}`]);

//Updating CTA section
const mainHeader = document.querySelector("h1");
mainHeader.textContent = siteContent["cta"]["h1"];

mainHeader.nextElementSibling.textContent = siteContent["cta"]["button"];

document.querySelector("#cta-img").src = siteContent["cta"]["img-src"];

//Updating .top-content

const topC = document.querySelector(".top-content");

topC.querySelector("h4").textContent = siteContent["main-content"]["features-h4"];

topC.querySelector("p").textContent = siteContent["main-content"]["features-content"];

topC.querySelector(".text-content").nextElementSibling.querySelector("h4").textContent = siteContent["main-content"]["about-h4"];

topC.querySelector(".text-content").nextElementSibling.querySelector("p").textContent = siteContent["main-content"]["about-content"];

//Middle image
document.querySelector("#middle-img").src = siteContent["main-content"]["middle-img-src"];

//Updating bottom content

const bottomC = document.querySelector(".bottom-content");

bottomC.querySelector("h4").textContent = siteContent["main-content"]["services-h4"];

bottomC.querySelector("p").textContent = siteContent["main-content"]["services-content"];

bottomC.querySelector("div:nth-child(2) h4").textContent = siteContent["main-content"]["product-h4"];

bottomC.querySelector("div:nth-child(2) p").textContent = siteContent["main-content"]["product-content"];

