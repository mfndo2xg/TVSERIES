
var series = {
    languages : 'ENG GEO UA',
    movies : [
        {
        name : 'Peaky Blinders',
        imdb : 'IMDB : 9.5',
        },
        {
        name : 'Top Boy',
        imdb : 'IMDB : 9.6',
        },
        {
        name : 'Narcos',
        imdb : 'IMDB : 9.4',
        }
    ]
}



document.getElementById('movie1').innerHTML = series.movies[0].name;
document.getElementById('imdb1').innerHTML = series.movies[0].imdb;
document.getElementById('language1').innerHTML = series.languages;

document.getElementById('movie2').innerHTML = series.movies[1].name;
document.getElementById('imdb2').innerHTML = series.movies[1].imdb;
document.getElementById('language2').innerHTML = series.languages;

document.getElementById('movie3').innerHTML = series.movies[2].name;
document.getElementById('imdb3').innerHTML = series.movies[2].imdb;
document.getElementById('language3').innerHTML = series.languages;


