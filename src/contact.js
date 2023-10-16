const createContactPage = () => {
    const content = document.getElementById("content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const heading = document.createElement("h1");
    heading.textContent = "No reservations - first come, first served!"

    pageContent.appendChild(heading);
    content.appendChild(pageContent);
}


export default createContactPage;
