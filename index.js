
let apikey= '7849ad3d0b024a1ebd2187e8a3d11d1f';
var loading=document.getElementById("loading");
function load() {

  loading.style.display = "none";
}


// Grab the news container
newsAccordian = document.getElementById("newsAccordian")

// create a get request
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`, true);
xhr.onload = function() {
  load()
  if(this.status === 200){
    let json=JSON.parse(this.responseText);
    let articles =json.articles;
    console.log(articles)
    let newsHtml=""; 
    articles.forEach((element,index) =>  {
  
      console.log(element["news"])
      let news = `<div class="container">
      <div class="accordion" id="newsAccordian">
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading${index}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
             <h3 style="color:black ">Breaking News ${index+1} :   &nbsp  </h3>  ${element["title"]}
            </button>
          </h2>
          <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#newsAccordian">
            <div class="accordion-body">
            ${element["content"]}. <a href="${element['url']}" target = "_blank"> Read more</a>
            </div>
          </div>
        </div>
        
      </div>  
    </div>`
    newsHtml+=news;
  });
    newsAccordian.innerHTML = newsHtml;

  }
  else{
    console.log('some error occured')
  }
}
xhr.send();

