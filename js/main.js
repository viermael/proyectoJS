 $(document).ready(function(){


    // slider
    if(window.location.href.indexOf('index') > -1){
       $('.bxslider').bxSlider({
    mode: 'horizontal',
    captions: true,
    slideWidth: 800,
    responsive: true
  });
}
    // Posts

    if(window.location.href.indexOf('index') > -1){
    var posts = [
        {
            title: 'prueba de titulo 1',
            date: 'Publicado el dia ' + moment().format("dddd ") + moment().date() + ' de '+ moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'El Pit Bull Terrier Americano (APBT, por sus siglas en inglés: American Pit Bull Terrier'

        },
        { 
            title: 'prueba de titulo 2',
            date: 'Publicado el dia ' + moment().format("dddd ") + moment().date() + ' de '+ moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'El Pit Bull Terrier Americano (APBT, por sus siglas en inglés: American Pit Bull Terrier'
        },
        { 
            title: 'prueba de titulo 3',
            date: 'Publicado el dia ' + moment().format("dddd ") + moment().date() + ' de '+ moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'El Pit Bull Terrier Americano (APBT, por sus siglas en inglés: American Pit Bull Terrier'
        },
        {   
            title: 'prueba de titulo 4',
            date: 'Publicado el dia ' + moment().format("dddd ") + moment().date() + ' de '+ moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'El Pit Bull Terrier Americano (APBT, por sus siglas en inglés: American Pit Bull Terrier'
        },

    ];
    


    posts.forEach((item, index) => {

      var post = `

          <article class="post">
          <h2>${item.title}</h2> 
          <span class="date">${item.date}</span>
          <p> ${item.content} </p>

          <a href="#" class="button-more">leer mas</a>
          </article>

          `;

        $("#posts").append(post);
    });
    }



    // Selector de tema

    var theme = $("#theme")
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });


     $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });


    // Scroll arriba de la web

     $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 1000);

        return false;
     });

     // login falso

     $("#login form").submit(function(){
       var form_name = $("#form_name").val();

       localStorage.setItem("form_name", form_name);

     });

     var form_name = localStorage.getItem("form_name");

     if(form_name != null && form_name != "undefined"){

        var about_parrafo = $("#about p");

         about_parrafo.html("<br><strong>Bienvenido, "+ form_name+"</strong>");
         about_parrafo.append("<a href='#' id='logout'> Cerrar sesion</a>");


         $("#login").hide();

         $("#logout").click(function(){
            localStorage.clear();
            location.reload();
         });
     }

     // acordeon
      if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();

      }

    // Reloj

       if(window.location.href.indexOf('reloj') > -1){
        

        setInterval(function(){
        
            var reloj = moment().format('MMMM Do YYYY, h:mm:ss a'); 
            $("#reloj").html(reloj);

        }, 500);
        
       }


    // Calculadora 

       let screen = document.getElementById('screen');
const buttons = document.querySelectorAll("#buttons a");
 
for (const button of buttons) {
    button.addEventListener('click', function(e) {
        e.preventDefault();
 
        if (e.target.dataset.key == 'equal') {
            screen.textContent = eval(screen.textContent);
            if (screen.textContent.length > 8) {
                screen.textContent = eval(screen.textContent).toFixed(8);
            }
        } else if (e.target.dataset.key == 'clear') {
            screen.textContent = '';
        } else {
            screen.textContent = screen.textContent + e.target.dataset.key;
        }   
    });

    // validacion
    if(window.location.href.indexOf('contacto') > -1){
    
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });

    }

}});