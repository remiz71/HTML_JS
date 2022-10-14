const getMovieRequest = new XMLHttpRequest();
//console.dir(getMovieRequest);
getMovieRequest.open("GET", "http://www.omdbapi.com/?t=Joker&y=2019&apikey=365d77a0");
//getMovieRequest.addEventListener("readystatechange");
getMovieRequest.onreadystatechange = () => {
    if(getMovieRequest.readyState==XMLHttpRequest.DONE)
    {
        switch (getMovieRequest.status) {
            case 200:
            {
                console.dir(getMovieRequest.responseText);
            }
            break;
            case 400:
            {
                console.dir("URL не найден");
            }
            break;
            default:
                break;
        }
    }
}
getMovieRequest.send();