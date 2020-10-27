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
const headArr = siteContent["cta"]["h1"].split(" ");
// console.log(headArr);
mainHeader.innerText = `${headArr[0]}\n${headArr[1]}\n${headArr[2]}`;

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

bottomC.querySelector("div:nth-of-type(3) h4").textContent = siteContent["main-content"]["vision-h4"];

bottomC.querySelector("div:nth-of-type(3) p").textContent = siteContent["main-content"]["vision-content"];


//Updating contact section

const contSect = document.querySelector(".contact");

contSect.querySelector("h4").textContent = siteContent["contact"]["contact-h4"];

const addArr = siteContent["contact"]["address"].split(" ");

// console.log(addArr);

contSect.querySelector("p").innerText = `${addArr[0]} ${addArr[1]} ${addArr[2]} ${addArr[3]}\n${addArr[4]} ${addArr[5]}`


contSect.querySelector("p:nth-of-type(2)").textContent = siteContent["contact"]["phone"];

contSect.querySelector("p:last-of-type").textContent = siteContent["contact"]["email"];

//Updating Footer

document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];


//Creating 2 new elements and then appending and prepending

const blogLink = document.createElement("a");
blogLink.textContent = "Blog";
blogLink.setAttribute("href","#");
document.querySelector("nav").appendChild(blogLink);

const storeLink = document.createElement("a");
storeLink.textContent= "Store";
storeLink.href= "#";
document.querySelector("nav").prepend(storeLink);

//Updating nav text to green

document.querySelectorAll("nav a").forEach(item => item.style.color = "green");