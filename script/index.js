//function main() {
    document.addEventListener("DOMContentLoaded", (event) =>{
 
        //-------------Fetching the Starwars API-------------------------------------------
          fetch("https://swapi.dev/api/people")
              .then((response) => response.json())
              .then((data) => renderPeople(data.results));
       
      //---------------Populating the Starwars Data-----------------------------------------
          let renderPeople = async (people) => {
              let html = " ";
      
              let pic = [{
                      src: "https://preview.redd.it/xl6by2r4npm81.jpg?auto=webp&s=4c66a28cb49ebba83089153f8c344c07a90a9c1c"
                  },
                  {
                      src: "https://rare-gallery.com/mocahbig/391941-darth-nihilus-lightsaber-star-wars-knights-of-the-old-republic.jpg"
                  },
                  {
                      src: "https://live.staticflickr.com/65535/49856681852_1f3d7a0cc1_b.jpg"
                  },
                  {
                      src: "https://cdnb.artstation.com/p/assets/images/images/036/399/035/large/olga-nadine-nihilusito2.jpg?1617579122"
                  },
                  {
                      src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fb4e5de1-4c74-4468-b8f4-6dcf8fadbfb9/dbz0yor-2f0bb643-3356-4a54-9359-1d93ba3578ed.jpg/v1/fill/w_1024,h_973,q_75,strp/face_darth_nihilus_by_art_pz_dbz0yor-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTczIiwicGF0aCI6IlwvZlwvZmI0ZTVkZTEtNGM3NC00NDY4LWI4ZjQtNmRjZjhmYWRiZmI5XC9kYnoweW9yLTJmMGJiNjQzLTMzNTYtNGE1NC05MzU5LTFkOTNiYTM1NzhlZC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.541UYZ097jl5Cs0RE_Ta0qOhcMySrO1Q2SATCAtV0KM"
                  },
                  {
                      src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/487aa2f9-0160-4d28-82eb-ccb721985d56/dedzr8b-4210cbe8-ba08-414d-bfbd-cb2cbed8d198.jpg/v1/fill/w_1280,h_1921,q_75,strp/darth_revan_by_stonercosplay_dedzr8b-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMSIsInBhdGgiOiJcL2ZcLzQ4N2FhMmY5LTAxNjAtNGQyOC04MmViLWNjYjcyMTk4NWQ1NlwvZGVkenI4Yi00MjEwY2JlOC1iYTA4LTQxNGQtYmZiZC1jYjJjYmVkOGQxOTguanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.o6W48g_NRbTNBBqgTxHXyY02aleZqGO4EoeWXFWgbU0"
                  },
                  {
                      src: "https://preview.redd.it/eqgs7vou6z181.jpg?auto=webp&s=27801a5036bff2e99dcd52a5ddb35641426aa2ce"
                  },
                  {
                      src: "https://sffgazette.com/images/articles/banners/1683.jpg"
                  },
                  {
                      src: "https://ogimg.infoglobo.com.br/in/2976825-422-58e/FT1086A/760/Darth-Vader-vilao-de-Star-wars.jpg"
                  },
                  {
                      src: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/08/28/10/r5d4starwars2808a.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart"
                  }
              ]
      
              people.forEach((person, i) => {  
                  let htmlPart = '<div class = "person">'+
                          '<img src="'+pic[i].src+'" alt="person name"> <br/>'+
                          '<button onclick="disp(this)" class="buton">'+person.name+'</button><div class="details"  style="display:none">'+
                          '<p>Name: '+person.name+'</p>'+
                          '<p>Gender: '+person.gender+'</p>'+
                          '<p>Height: '+person.height+'</p>'+
                          '</div> </div>'
                  html += htmlPart;
              });
      
              document.querySelector(".container").innerHTML = html;
          };
      });
      
      
      //---------Function handling the onClick Button------------------------
      let disp = (_this)=>{
          if(_this.nextSibling.style.display == 'none'){
              _this.nextSibling.style.display = 'block'
          }else{
              _this.nextSibling.style.display = 'none'
          }
      
      }
      
//}

module.exports = { main }
