let movies = [

    {
        name:"Avengers Endgame",
        poster:"https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg",
        rating:8.7
    },
    {
        name:"Lagaan",
        poster:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg",
        rating:9.1
    },
    {
        name:"Oppenheimer",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTox5N6MOrwaGAZ-QvCIphCVOz7o4uhW_BBcpWqZiBuhHgbw_A7K7amjqNrIcfVp1a3vik&usqp=CAU",
        rating:9.2
    },
    {
        name:"Moon Light",
        poster:"https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
        rating:7.2
    },
    {
        name:"Bohemian Raphsody",
        poster:"https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/bohemian-rhapsody-web.jpg",
        rating:6.5
    },
    {
        name:"The Avengers",
        poster:"https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg",
        rating:7.6
    },
    {
        name:"Jhon Wick",
        poster:"https://rukminim2.flixcart.com/image/850/1000/k0lbdzk0/poster/4/w/g/medium-john-wick-poster-for-room-office-13-inch-x-19-inch-rolled-original-imafkc6fd8mc6jga.jpeg?q=90",
        rating:7.9
    },
    {
        name:"Maleficient",
        poster:"https://m.media-amazon.com/images/M/MV5BMjAwMzAzMzExOF5BMl5BanBnXkFtZTgwOTcwMDA5MTE@._V1_.jpg",
        rating:6.4
    },
    {
        name:"Leo",
        poster:"https://m.media-amazon.com/images/I/71c2cxxNQIL._AC_UF894,1000_QL80_.jpg",
        rating:8.7
    }
    


];



function searchMovie()
{
    let movieName = document.getElementById('search').value;
    
    if(movieName!=="")
    {

        let result =movies.filter(function(movie)
                    {
                        return movie.name.toUpperCase().includes(movieName.toUpperCase())
                    })

        if(result.length==0)
        {
            
        }


       displayMovies(result);


    }
    else 
    {
        displayMovies(movies);
    }
    


}


function displayMovies(data)
{
    
    document.getElementById("movies").innerHTML="";

    let htmlString = ``;


    for(let i=0;i<data.length;i++)
    {


        htmlString=htmlString+`
            <div class="movie">
                <div class="overlay">

                    <div class="video">

                    </div>

                    <div class="details">

                        <h1>${data[i].name}</h1>
                        <h2>IMDB : ${data[i].rating}</h2>
                        <p>Rami Malek . Jhon Jacobs . Emma Stone</p>

                    </div>

                </div>
                <img class="poster" src="${data[i].poster}" alt="poster">
            </div>
        `
    }

    console.log(htmlString);

    document.getElementById("movies").innerHTML=htmlString;

}


displayMovies(movies);









// let movieDIV = document.createElement("div");
//     movieDIV.classList.add("movie");


//     let overlayDIV = document.createElement("div");  
//     overlayDIV.classList.add("overlay")

//     movieDIV.appendChild(overlayDIV);
    

//     console.log(movieDIV);










