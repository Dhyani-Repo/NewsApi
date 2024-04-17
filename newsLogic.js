const myKey = '0c8182064eae446e9ff7a5623a697646'

const blogContainer = document.getElementById("Container")
async function fetchRandomNews(){

    try{
        console.log("fetchRandomnews")
        const apiURL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${myKey}`;
        const response = await fetch(apiURL)
        const data = await response.json();
        console.log("no issue in fetchRandomNewsAPI")
        return data
    }
    catch(error){
        console.error("error fetching news from newsapi",error)
        return []
    }
    
}

function displayBlog(articles){

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



