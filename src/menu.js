//module for creating the menu

const createMenuPage = () => {

    const content = document.getElementById("content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content")

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";
    pageContent.appendChild(heading);

    const menuList = document.createElement("ul");
    const menuItem1 = document.createElement("li");
    menuItem1.textContent = "Brummy Balti";

    const menuItem2 = document.createElement("li");
    menuItem2.textContent = "South Indian Idli and Sambar";

    const menuItem3 = document.createElement("li");
    menuItem3.textContent = "Palak Paneer";

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    pageContent.appendChild(menuList);
    content.appendChild(pageContent);

}

export default createMenuPage;