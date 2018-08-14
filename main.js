document.getElementById("title").innerHTML = "<h3>News</h3>";

var xhttp = new XMLHttpRequest();

function getAllNews() {
    var url = "https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=62247117f01649aea8bf7b6e1a04f4d9";
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var root = JSON.parse(this.responseText);
            var articles = root.articles;
            for(i = 0; i < articles.length; i++) {
                var card = `
                <div class="col s12 m6 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="`+articles[i].urlToImage+`">
                        </div>
                        <div class="card-content">
                            <span class="card-title">`+articles[i].title+`</span>
                            <p>`+articles[i].description+`</p>
                        </div>
                        <div class="card-action">
                            <a href="`+articles[i].url+`" target="_blank">Continue Reading</a>
                        </div>
                    </div>
                </div>
                `;
                document.getElementById("resp").innerHTML += card;
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function searchNews() {
    var query = document.getElementById("search_query").value;
    var url = "https://newsapi.org/v2/everything?q="+query+"&apiKey=62247117f01649aea8bf7b6e1a04f4d9";
    document.getElementById("resp").innerHTML = " ";
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var root = JSON.parse(this.responseText);
            var articles = root.articles;
            for(i = 0; i < articles.length; i++) {
                var card = `
                <div class="col s12 m6 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="`+articles[i].urlToImage+`">
                        </div>
                        <div class="card-content">
                            <span class="card-title">`+articles[i].title+`</span>
                            <p>`+articles[i].description+`</p>
                        </div>
                        <div class="card-action">
                            <a href="`+articles[i].url+`" target="_blank">Continue Reading</a>
                        </div>
                    </div>
                </div>
                `;
                document.getElementById("resp").innerHTML += card;
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

getAllNews();