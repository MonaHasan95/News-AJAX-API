                                /*-----------------------------------*/
                                /*-----------------------------------*/
                                /* Please read the comments carefully*/
                                /*-----------------------------------*/
                                /*-----------------------------------*/


var req = new XMLHttpRequest(); /*http client*/
var search = document.getElementById("search");
var Catlink = document.getElementsByClassName("nav-link");
var Countrylink= document.getElementsByClassName("list-group-item");
var CountryShortcut=["us","ar","au","at","be","br","bg","ca","cn","co","cu","cz","eg","fr","de","gr","hk","hu","in","id","ie","il","it","jp","lv","lt","my","mx","ma","nl","nz","ng","no","ph","pl","pt","ro","ru","sa","rs","sg","sk","si","za","kr","se","ch","tw","th","tr","ae","ua","gb","ve"];



var cat="";
var country="us";
var SearchBoolean=0;
getNews(country,"",SearchBoolean);
chooseNews();

search.addEventListener("keyup", function(e)
    {
        SearchBoolean=1;
        getNews("",search.value,SearchBoolean);
    }
)


function chooseNews()
{
    for(var j=0; j<54;j++)
    {
        Countrylink[j].addEventListener("click",function(e)
            {
            /*In this section I'm comparing the country's full name
              that the user clicked on with the ones in the HTML's li elements.
              I've created indices for the full names in the HTML's li elements.
              I've also matched them with the indices of the contries
              shortcut names I stored in an array.
              I've done this to: - Display the country's name at the top
                                   of the news and the full name in the list
                                   for a good usability experience */
            /*------------------------------------------------------------------------------------*/
                for(var i=0; i<55;i++)
                {                         
                    if(e.target.innerHTML == Countrylink[i].innerHTML)
                    {
                        if(document.getElementById("headlineCountry").innerHTML=="" && document.getElementById("headlineCat").innerHTML != "")
                        /*- I created this condition incase the user clicks on a country right after a search.
                      - I created the exact same one below but incase the user clicks on a category right       after a search.
                      - In this condition I check whether the  headlineCountry element which
                            appears at the top of the news is empty.
                      - If it's empty it means that the user just searched since it gets cleared in the         search while the headlineCat element contains the search text.
                      - In this case I'll add the country's name and the default category to the headlines
                        and adjust the values those will get used in "getNews()" function-*/
                        {
                            document.getElementById("headlineCat").innerHTML="General";
                            document.getElementById("headlineCountry").innerHTML=e.target.innerHTML+"'s";
                            country=CountryShortcut[i];
                            cat="";
                        }
                        
                        /*Incase the user didn't perform any search*/
                        else
                        {
                            document.getElementById("headlineCountry").innerHTML=e.target.innerHTML+"'s";
                            country=CountryShortcut[i];
                        }
                        
                        break;

                    }
                }
            /*------------------------------------------------------------------------------------*/
                getNews(country,cat,SearchBoolean);
            });
    }


    /*I didn't do this section in a for loop because it's time consuming*/
    /*-----------------------------------------------------------*/
        Catlink[0].addEventListener("click",function(e)
            {
                if(document.getElementById("headlineCountry").innerHTML=="")
                {
                    document.getElementById("headlineCountry").innerHTML="America's"
                    country=CountryShortcut[0];
                }
                cat=e.target.innerHTML;
                document.getElementById("headlineCat").innerHTML=cat;
                getNews(country,cat,SearchBoolean);
            });
    
        Catlink[1].addEventListener("click",function(e)
            {
                if(document.getElementById("headlineCountry").innerHTML=="")
                {
                    document.getElementById("headlineCountry").innerHTML="America's"
                    country=CountryShortcut[0];
                }
                cat=e.target.innerHTML;
                document.getElementById("headlineCat").innerHTML=cat;
                getNews(country,cat,SearchBoolean);
            });
    
        Catlink[2].addEventListener("click",function(e)
            {
                if(document.getElementById("headlineCountry").innerHTML=="")
                {
                    document.getElementById("headlineCountry").innerHTML="America's"
                    country=CountryShortcut[0];
                }
                cat=e.target.innerHTML;
                document.getElementById("headlineCat").innerHTML=cat;
                getNews(country,cat,SearchBoolean);
            });
    
        Catlink[3].addEventListener("click",function(e)
            {
                if(document.getElementById("headlineCountry").innerHTML=="")
                {
                    document.getElementById("headlineCountry").innerHTML="America's"
                    country=CountryShortcut[0];
                }
                cat=e.target.innerHTML;
                document.getElementById("headlineCat").innerHTML=cat;
                getNews(country,cat,SearchBoolean);
            });
    
        Catlink[4].addEventListener("click",function(e)
            {
                if(document.getElementById("headlineCountry").innerHTML=="")
                {
                    document.getElementById("headlineCountry").innerHTML="America's"
                    country=CountryShortcut[0];
                }
                cat=e.target.innerHTML;
                document.getElementById("headlineCat").innerHTML=cat;
                getNews(country,cat,SearchBoolean);
            });
        Catlink[5].addEventListener("click",function(e)
            {
                if(document.getElementById("headlineCountry").innerHTML=="")
                {
                    document.getElementById("headlineCountry").innerHTML="America's"
                    country=CountryShortcut[0];
                }
                cat=e.target.innerHTML;
                document.getElementById("headlineCat").innerHTML=cat;
                getNews(country,cat,SearchBoolean);
            });
        Catlink[6].addEventListener("click",function(e)
            {
                if(document.getElementById("headlineCountry").innerHTML=="")
                {
                    document.getElementById("headlineCountry").innerHTML="America's"
                    country=CountryShortcut[0];
                }
                cat=e.target.innerHTML;
                document.getElementById("headlineCat").innerHTML=cat;
                getNews(country,cat,SearchBoolean);
            });

}

var data;
function getNews(CT,CAT,Search)
{
    /*--Incase the user didn't search and chose a cat or country-*/
    if(Search==0)
    {
        var urlRequest;
        if(CAT == "") {
            urlRequest = "https://newsdata.io/api/1/news?apikey=pub_63519a669ca70c8c60ff0f8017dfac2c7f90b&country="+CT+"&language=en";
        }
        else { 
            urlRequest = "https://newsdata.io/api/1/news?apikey=pub_63519a669ca70c8c60ff0f8017dfac2c7f90b&country="+CT+"&language=en&category="+CAT+"";
        }
        req.open("GET",urlRequest);
        req.onreadystatechange =function()
        {
            if(req.status==200 && req.readyState==4)
            {
                data=JSON.parse(req.response);
                data=data.results;
                displayData();
            }
        }

        req.send(); 
    }
    
    /*--Incase the user searched-*/
    else
    {
        var searchText=CAT;
         req.open("GET","https://newsdata.io/api/1/news?apikey=pub_63519a669ca70c8c60ff0f8017dfac2c7f90b&q="+searchText+"&language=en");
       
        req.onreadystatechange =function()
        {
            if(req.status==200 && req.readyState==4)
            {
                data=JSON.parse(req.response);
                data=data.results;
                document.getElementById("headlineCat").innerHTML=searchText+"'s";
                document.getElementById("headlineCountry").innerHTML="";
                displayData();
            }
        }

        req.send(); 
        
        SearchBoolean=0;
    }
}

function displayData()
{
    var temp="";
    
    for(var i=0; i<data.length; i++)
    {
        temp+=`<div class="col-3  text-center">
                    <a href="`+data[i].link+`" target="_blank">
                        <img src="`+data[i].image_url+`" class="img-fluid">
                        
                        <div class="p-2">
                            <h5>`+data[i].title+`</h5>
                            <p class="text-muted">`+data[i].description+`</p>
                        </div>
                    </a>
                </div>`;
      
    
}
     
    document.getElementById("data").innerHTML=temp;
}

