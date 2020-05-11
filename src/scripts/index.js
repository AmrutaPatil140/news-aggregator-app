let  apikey = "4ee7c47caecc4efa99bbea5a086496a5";
let input = document.getElementById('search');
let data = '';
input.addEventListener('keypress', validSearch);
async function validSearch(event) {
  if(event.which === 13 || event.keyCode === 13 ||event.key === "Enter")
  {
    data = document.getElementById('search').value;
  }
  content.innerHTML=`<div id="loader" ></div>`;
    if (data !== "" ) {

        url = `https://newsapi.org/v2/everything?q=${data}&apiKey=${apikey}`;//searched News will display after enter
    }
    else {
        url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`;
    }
    const response = await fetch(url);
    const result = await response.json();
    getNews(result);
}
let content = document.getElementById('news-articles');
function getNews(news){
      let output="";
      if(news.totalResults>0){
        news.articles.forEach(article=>{
          output+= 
            ` <section class="card">
              <li class="articles"><a class="article-link" href="${article.url}" target="_blank">       
              <img src="${article.urlToImage}" class="article-img" alt="${article.title}"></img>
              <div class="container">
              <h2 class="article-title">${article.title}</h2><br>
              <p class="article-description">${article.description || "Description not available"}</p> <br>
              <span class="article-author">-${article.author? article.author: "Anon"}</span><br>
              </a>
              </div>
              </li>
              </section>
             `;
           
        });
        content.innerHTML=output;
      }
      else
        { 
           content.innerHTML='<li class="not-founded">No article was found based on the search.</li>';
       }
    }


 async function getPosts(){
    content.innerHTML=`<div id="loader"></div>`
    url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    getNews(result);
 }
window.open=getPosts();
