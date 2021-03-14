$(document).ready(function(){
<<<<<<< Updated upstream
    $('.header').html(`

        <div class="navRow">

            <div class="navColumn">
                <img src="images/logo.png" alt="logo">
            </div>

            <div class="navColumn">
=======
    $('.nav').html(`
            <nav>
>>>>>>> Stashed changes
                <div class="toggle">
                    <i class="fas fa-bars mobileMenu" area-hidden="true"></i>
                </div>
                <ul>
                    <li><a href = "index.html">Home</a></li>
                    <li><a href = "about.html">About</a></li>
                    <li><a href = "floorPlans.html">Floor Plans</a></li>
                    <li><a href = "gallery.html">Gallery</a></li>
                    <li><a href = "contact.html">Contact</a></li>
<<<<<<< Updated upstream
                </ul>
            </div>

       </div>
    `);

     // COLLAPSEABLE MENU
     $('.mobileMenu').click(function(){
        $('ul').toggleClass('active');
    });
})
=======
                </ul>  
            </nav> 
    `);

    $('.mobileMenu').click(function(){
        $('ul').toggleClass('active');
      });
   
})


















>>>>>>> Stashed changes
