const quote = document.getElementsByTagName("blockquote")[0];
const author = document.getElementsByClassName("author")[0];

const newQuote = document.querySelector(".quote")
const tweetBtn = document.querySelector(".tweet")

const apiLink = "https://quotes-api-self.vercel.app/quote";
let temp;

const getData = async ()=> {
    const response = await fetch(apiLink);
    let data = await response.json();
    temp = data.quote

    quote.innerText = data.quote;
    author.innerText = data.author;
    

}

getData();

newQuote.addEventListener("click",()=>{
    getData();
})
// window.open() -> open a new window
tweetBtn.addEventListener("click", ()=> {
    window.open(`https://twitter.com/intent/tweet?text=${temp}`, "tweet post", "width=400, height=400");
} )