const myKey = '0c8182064eae446e9ff7a5623a697646'

const blogContainer = document.getElementById("Container")

async function fetchRandomNews() {

    try {
        console.log("fetchRandomnews")
        const apiURL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=35&apiKey=${myKey}`;
        const response = await fetch(apiURL)
        const data = await response.json();
        console.log("no issue in fetchRandomNewsAPI")
        console.log(data)
        return data.articles;
    }
    catch (error) {
        console.error("error fetching news from newsapi", error)
        return []
    }

}

function displayBlog(articles) {
    console.log("Articles received:", articles);
    blogContainer.innerHTML = "";

    articles.forEach(element => {
        if (element.author != null) {
            const blogCard = document.createElement("div");
            blogCard.classList.add("Card");

            const _picture = document.createElement("img");
            _picture.src = element.urlToImage;
            _picture.alt = element.title;

            const _heading = document.createElement("h6")
            _heading.innerText = element.title;

            const _paragraph = document.createElement("p")
            _paragraph.textContent = element.description;

            blogCard.appendChild(_picture);
            blogCard.appendChild(_heading);
            blogCard.appendChild(_paragraph);
            blogContainer.appendChild(blogCard);
        }

    });
}


(async () => {
    try {
        console.log("async run")
        const articles = await fetchRandomNews()
        displayBlog(articles)
    } catch (error) {
        console.error("Error fetching in async function", error)
    }
})();





