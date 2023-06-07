const searchIcon = document.getElementsByClassName("fa-magnifying-glass")[0];
const searchBar = document.getElementsByClassName("search")[0];

const menuIcon = document.getElementsByClassName("fa-bars")[0];
const card = document.getElementsByClassName("card")[0];
const flyout = document.getElementsByClassName("flyout")[0];



searchIcon.addEventListener("click", searchClick);
menuIcon.addEventListener("click", menuClick);

function searchClick() {

    if(searchBar.classList.contains("search-active")) {

        searchBar.style.visibility = "visible";

        setTimeout(() => (searchBar.style.visibility = "hidden"), 0300);
        

        searchBar.classList.remove("search-active");
    }

    else {
        searchBar.style.visibility = "visible";
        searchBar.classList.add("search-active");
    }
}

function menuClick() {
    if(card.classList.contains("shifted")) {
        card.classList.remove("shifted");
        flyout.classList.remove("tab-active");
    }

    else {
        card.classList.add("shifted");
        flyout.classList.add("tab-active");
    }
}

