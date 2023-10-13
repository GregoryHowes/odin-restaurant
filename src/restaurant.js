const createRestaurantHomePage = () => {
    const content = document.getElementById("content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    //create and append image
    const image = document.createElement("img");
    image.src = "https://greatcurryrecipes.net/wp-content/uploads/2012/08/chickenbaltisc2-720x540.jpg.webp";
    image.alt = "A delicious brummie balti";
    pageContent.appendChild(image);

    //create and append headline
    const heading = document.createElement("h1");
    heading.textContent = "The Best Balti Outside of Brum";
    pageContent.appendChild(heading);

    //create and append copy text
    const copy = document.createElement("p");
    copy.textContent = "Come and get your balti. We're waiting for you!";
    pageContent.appendChild(copy);

    //add everything to the page
    content.appendChild(pageContent);
};

export default createRestaurantHomePage;