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
         let urlToImage = article.urlToImage;
         let title = article.title;
         let description = article.description;
         let author = article.author;
         let url1 = article.url;
      output += `
           <section class="card">
           <li class="article">
           <img src="${urlToImage}" class="article-img" alt="image not found">
          <div>
          <h2 class="article-title">${title}</h2>
          <p class="article-description">${description}</p>
          <p><span class="article-author"><a class="article-link" href="${url1}">${author}</a></span></p>
          </div>
          </li>
          </section>`;
        });
       
        content.innerHTML=output;
      }
     
      else 
        { 
           content.innerHTML='<li class="not-found">No article was found based on the search.</li>';
           
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


  