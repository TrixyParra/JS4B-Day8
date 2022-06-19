// Classes 

/* 
const page = {
    title: 'My Cool Website',   // My Page 
    backgroundColor: 'black',  // '#ccc' 
    textColor: 'red',  // '#000' 
    list: ['item1', 'item2', 'item3', 'item4'],
} 

const page2 = {
    title: 'My Cool Website 2',   
    backgroundColor: 'white',  
    textColor: 'red', 
    list: ['item1', 'item2', 'item3', 'item4'],
} 
*/ 

/*
const body = document.body; 
const title = document.createElement('h1');
title.innerText = page.title; 
body.style.backgroundColor = page.backgroundColor; 
body.style.color = page.textColor;
body.appendChild(title); 
const ul = document.createElement('ul'); 
body.appendChild(ul);
page.list.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}) 

body.innerHTML = ''; // separates both pages into their own 
const body2 = document.body; 
const title2 = document.createElement('h1');
title2.innerText = page2.title; 
body2.style.backgroundColor = page2.backgroundColor; 
body2.style.color = page2.textColor;
body2.appendChild(title2); 
const ul2 = document.createElement('ul'); 
body2.appendChild(ul2);
page2.list.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item;
    ul2.appendChild(li);
}) 
*/ 

// Forming a Class - makes it easier than having to repeat code 

class Page {
    constructor(title, backgroundColor, textColor, list) {
        this.title = title; 
        this.backgroundColor = backgroundColor;
        this.textColor = textColor; 
        this.list = list;
    }
    render() {
        const body = document.body; 
        body.innerHTML = "";  // makes separate pages 
        myNav.render(); // render myNav on class Page to show on html 
        const title = document.createElement('h1');
        title.innerText = this.title;   // this.title instead of page.title - replace each page.__ with this.__ 
        body.style.backgroundColor = this.backgroundColor; 
        body.style.color = this.textColor;
        body.appendChild(title); 
        const ul = document.createElement('ul'); 
        body.appendChild(ul);
        this.list.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            ul.appendChild(li);
        }); 
    }
} 

const page1 = new Page('My Cool Website', 'black', 'red', ['item1', 'item2', 'item3', 'item4']); 
const page2 = new Page('My Cool Website 2', 'white', 'red', ['item1', 'item2', 'item3', 'item4']); 
// Each new page created can use the created class 
const page3 = new Page('My Cool Website 3', 'pink', 'yellow', ['item1', 'item2', 'item3', 'item4']); 
const page4 = new Page('My Cool Website 4', 'blue', 'white', ['item1', 'item2', 'item3', 'item4']); 

// page1.render(); 
// page2.render(); 
// page1.render(); // each new render will change to stated page 
// page3.render(); 
// page4.render(); 

// New Class 
class Navigation {
    constructor(pages) {
        this.pages = pages; 
    } 
    render() {
        const nav = document.createElement('nav'); 
        const ul = document.createElement('ul'); 
        nav.appendChild(ul); 
        this.pages.forEach((page) => {
            const li = document.createElement('li'); 
            li.innerText = page.title; 
            ul.appendChild(li); 
            ul.style.display = 'flex'; 
            ul.style.listStyleType = 'none'; 
            ul.style.justifyContent = 'space-around'; 
            li.addEventListener('click', () => {
                page.render();
            })
        }); 
        document.body.appendChild(nav); 
    }
} 

const myNav = new Navigation([page1, page2, page3, page4]); 

//myNav.render(); 
//page1.render();

page1.render(); 
page2.render();  // each new render will change to stated page 
page3.render(); 
page4.render(); 
//myNav.render(); 