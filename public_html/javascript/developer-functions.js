var iWebkit;

if (!iWebkit) {
	
	iWebkit = window.onload = function () {
            
			function fullscreen() {
				var a = document.getElementsByTagName("a");
				for (var i = 0; i < a.length;i++) {
					if (a[i].className.match("noeffect")) {
					}
				else {
//						a[i].onclick = function () {
//							window.location = this.getAttribute("href");
//							return false;
//						};
					}
				}
			}
//                      <!-- #########  BROWSER URL VERSTECKEN  ########## -->
			function hideURLbar() {
				window.scrollTo(0, 0.9);
			}

                       
//                      <!-- #########  SITE PREOLODER ZUR ZEIT NICH EINGEBAUT ########## -->
                         function loadSite() {
                                if (document.getElementById) {  // DOM3 = IE5, NS6
                                document.getElementById('hidepage').style.visibility = 'hidden';
                                }
                                else {
                                       if (document.layers) {  // Netscape 4
                                           document.hidepage.visibility = 'hidden';
                                }
                                else {  // IE 4
                                           document.all.hidepage.style.visibility = 'hidden';
                                }
                                     }
                        }
                        
                         

//                      <!-- ######### ANZEIGE  NEUE PRODUKTE  ##########  -->     
                        function get_product() {

                                var info = 'new';
                                var html = '';

                                  $.getJSON('includes/get_products.php?info=' + info +''  ,  function(data){
                                  $.each(data, function(entryIndex, entry){

                              html +=
                            
                                  '<li class="store">' +
                                  '<a  href="#" onclick="javascript:ShowAnzeige();  get_json_article(' + entry['articlenumber'] + '); return false">' + '</a>' +
                                  '<span class="image" style="background-image:url('+entry['image']+')">'+'</span>' +
                                  '<span class="comment">' +
                                    entry['label']  + '</span>' +
                                  '<span class="name">' + entry['type'] + '</span><br>' +
                                  '<span class="comment">' + entry['price']  + ' EUR  - Inkl 19% MwSt</span>' +
                                  '<span class="arrow">' + '</span>'+
                                  '</a>' +' </li>'

                                   }); 
                                    $('#angebot').html(html);

                                });
                        }


//                      <!-- #########  ANZEIGE ARTIKEL IM SLIDER  ########## --> 
                        function get_carousel() {
                                
                                var info = 'slide';
                                var html = '';
                                

                                  $.getJSON('includes/get_products.php?info=' + info +''   ,  function(data){

                                  $.each(data, function(entryIndex, entry){

                               html +=

                                  '<li>' +
                                  '<a href="#?" onclick="javascript:ShowAnzeige(); javascript:get_json_article('+ entry['articlenumber'] + '); return false">' +
                                  '<img class="img_carusel" src="' + entry['image'] + '" alt="Artikel" name="article"  onerror="ImgError(this);"/></a>'+
                                  '</li>'

                                   });
                                    $('#articleimages').html(html);

                                });
                        }
                        

                       
                           
  
			iWebkit.init = function () {
                                fullscreen();
				hideURLbar();
                                get_carousel();
                               // get_json();
                                get_product();
                                //loadSite();
                                //window.onload=get_image();
                                //window.onload=get_json_article();
                              
			};
			iWebkit.init();
		};



}


     //    <!-- #########  ERROR IMAGELOAD SHOW STANDART  ########## --> 
    function ImgError(source){
        source.src = "images/No-Image-Available.jpg";
        source.onerror = "";
        return true;
    }
     
     //    <!-- #########  INHALT DIV Home CONTAINER   ########## --> 
    function ShowMain(){
        document.getElementById('mainmenu').style.display = 'inline';
        document.getElementById('divName').style.display = 'inline';
        document.getElementById('menu').style.display = 'none';
        document.getElementById('image').style.display = 'none';
        document.getElementById('contakte').style.display = 'none';
        document.getElementById('azeige').style.display = 'none';
        document.getElementById('search').style.display = 'none';
        document.getElementById('impressum').style.display = 'none';
        document.getElementById('aw').style.display = 'none';
        document.getElementById('np').style.display = 'inline';
        

     }

     //    <!-- #########  INHALT DIV KONTAKTE CONTAINER   ########## --> 
    function ShowContact(){
        document.getElementById('mainmenu').style.display = 'none';
        document.getElementById('divName').style.display = 'none';
        document.getElementById('menu').style.display = 'inline';
        document.getElementById('image').style.display = 'none';
        document.getElementById('contakte').style.display = 'inline';
        document.getElementById('back').style.display = 'none';
        document.getElementById('search').style.display = 'none'; 
        document.getElementById('azeige').style.display = 'none';
        document.getElementById('impressum').style.display = 'none';
     }
     
    //    <!-- #########  INHALT DIV SEARCH CONTAINER   ########## --> 
    function ShowSearch(){
        document.getElementById('mainmenu').style.display = 'none';
        document.getElementById('divName').style.display = 'none';
        document.getElementById('menu').style.display = 'inline';
        document.getElementById('image').style.display = 'none';
        document.getElementById('contakte').style.display = 'none';
        document.getElementById('back').style.display = 'none';
        document.getElementById('search').style.display = 'inline'; 
        document.getElementById('azeige').style.display = 'none';
        document.getElementById('impressum').style.display = 'none';
     }
     
    //    <!-- #########  INHALT DIV ARTICLE CONTAINER   ########## --> 
    function ShowAnzeige(){
        
        $('body').append('<div id="progress">Loading...</div>');
        document.getElementById('mainmenu').style.display = 'none';
        document.getElementById('divName').style.display = 'none';
        document.getElementById('menu').style.display = 'inline';
        document.getElementById('azeige').style.display = 'inline';
        document.getElementById('image').style.display = 'none';
        document.getElementById('contakte').style.display = 'none';
        document.getElementById('back').style.display = 'none';
        document.getElementById('search').style.display = 'none';
        document.getElementById('impressum').style.display = 'none';
        $('#progress').remove();
        
     }
     
     
    //    <!-- #########  INHALT DIV IMAGE CONTAINER   ########## --> 
    function ShowImage(){
        $('body').append('<div id="progress">Loading...</div>');
        document.getElementById('mainmenu').style.display = 'none';
        document.getElementById('divName').style.display = 'none';
        document.getElementById('menu').style.display = 'inline';
        document.getElementById('azeige').style.display = 'none';
        document.getElementById('image').style.display = 'inline';
        document.getElementById('contakte').style.display = 'none';
        document.getElementById('back').style.display = 'inline';
        document.getElementById('search').style.display = 'none';
        document.getElementById('impressum').style.display = 'none'; 
        $('#progress').remove();
     }
     
     
         //    <!-- #########  INHALT DIV IMAGE CONTAINER   ########## --> 
    function ShowImpressum(){
        document.getElementById('mainmenu').style.display = 'none';
        document.getElementById('divName').style.display = 'none';
        document.getElementById('menu').style.display = 'inline';
        document.getElementById('azeige').style.display = 'none';
        document.getElementById('image').style.display = 'none';
        document.getElementById('contakte').style.display = 'none';
        document.getElementById('back').style.display = 'none';
        document.getElementById('search').style.display = 'none'; 
        document.getElementById('impressum').style.display = 'inline';
     }
     
            //    <!-- #########  INHALT DIV ProductLists CONTAINER   ########## --> 
    function ShowList(){
        document.getElementById('mainmenu').style.display = 'none';
        document.getElementById('divName').style.display = 'inline';
        document.getElementById('menu').style.display = 'inline';
        document.getElementById('azeige').style.display = 'none';
        document.getElementById('image').style.display = 'none';
        document.getElementById('contakte').style.display = 'none';
        document.getElementById('back').style.display = 'none';
        document.getElementById('search').style.display = 'none'; 
        document.getElementById('impressum').style.display = 'none';
        document.getElementById('aw').style.display = 'inline';
        document.getElementById('np').style.display = 'none';        
     }
     
     
    //   <!-- ######### ANZEIGE  FULLIMAGE  ##########  -->     
    function get_image(id){
        
        $('body').append('<div id="progress">Loading...</div>');
        var info = parseInt(id);
        var html = '';

         $.getJSON('includes/getarticlenumber.php?info=' + info +'' ,  function(data){

         $.each(data, function(entryIndex, entry){

            html +=
                
                '<img alt="'+ entry['label'] + '" style="margin-top: 10px; margin-bottom: 8px;" src="' + entry['image'] + '" onerror="ImgError(this);"></img>' 
                 }); 
                 $('#fullimage').html(html);
              });
              $('#progress').remove();
      }
                        
                       
    //    <!-- #########  ANZEIGE ARTIKEL EINZELN  ########## -->                     
    function get_json_article(id) {

        var info = parseInt(id);
        var html = '';

         $.getJSON('includes/getarticlenumber.php?info=' + info +'' ,  function(data){

         $.each(data, function(entryIndex, entry){

            html +=

                '<ul class="pageitem">' +
                '<li class="articlediscr"><p>' + entry['discr_short'] + '</p>'  +
                '</li>' +
                '<li id="articleimage">' +
                '<img  alt="'+ entry['type'] + '"  src="' + entry['image']+ '" onerror="ImgError(this);"/>' +
                '</li>' +
                '<li class="menu"><a href="#" onclick="javascript:ShowImage();  get_image(' + entry['articlenumber'] + '); return false">' + 
                '<img alt="'+ entry['type']+ '" src="' + entry['image']+ '" onerror="ImgError(this);" /><span class="name">Photos'+
                '</span></a><span class="arrow"></span></li>' +
                '<li class="textbox ">' +
                'Label:&nbsp; &nbsp; &nbsp;' +
                 entry['label'] +
                '</li>' +
                '<li class="textbox"><p>' +
                'Farbe:&nbsp; &nbsp; &nbsp;' +
                 entry['color'] + '</p>' +
                '</li>' +
                '<li class="textbox "><p>' +
                'Size: &nbsp; &nbsp; &nbsp;&nbsp;' +
                 entry['size'] + '</p>' +
                '</li>' +
                '<li class="textbox "><p>' +
                'Material: &nbsp;' +
                 entry['material'] + '</p>' +
                '</li>' +
                '<li class="textbox "><p>' +
                'Sohle: &nbsp; &nbsp;&nbsp;' +
                 entry['sole'] + '</p>' +
                '</li>' +
                '<li class="textbox "><p>' +
                'Preis:&nbsp; &nbsp; &nbsp;' +
                 entry['price'] +  'EUR - Inkl 19% MwSt</p>' +
                '</li>' +
                '<li class="textbox "><p>' +
                 entry['discription'] + '</p>' +
                '</li>' +
                '</ul>'

                 });

             $('#artikel').html(html);

            });
            }
            
 
    
        //   <!-- ######### ANZEIGE PRODUKTE / LABEL  ##########  -->     
    function get_product(id){
        
       var info = id;
       // var info = parseInt(id);
        var html = '';

         $.getJSON('includes/get_products.php?info=' + info +'' ,  function(data){

         $.each(data, function(entryIndex, entry){

            html +=
                

              '<li class="store">' +
              '<a  href="#" onclick="javascript:ShowAnzeige();  get_json_article(' + entry['articlenumber'] + '); return false">' + '</a>' +
              '<span class="image" style="background-image: url(' + entry['image'] + ')">' +'</span>' +
              '<span class="comment">' +
                entry['label']  + '</span>' +
              '<span class="name">' + entry['type'] + '</span><br>' +
              '<span class="comment">' + entry['price']  + ' EUR  - Inkl 19% MwSt</span>' +
              '<span class="arrow">' + '</span>'+
              '</a>' +' </li>'

               }); 
                $('#angebot').html(html);

            });
    }
    
function notEmpty(){
	var myTextField = document.getElementById('myText');
	if(myTextField.value != ""){
            
       
        var html = '';

         $.getJSON('includes/get_search.php?info=' + myTextField.value +'' ,  function(data){

         $.each(data, function(entryIndex, entry){

            html +=
                

              '<li class="store">' +
              '<a  href="#" onclick="javascript:ShowAnzeige();  get_json_article(' + entry['articlenumber'] + '); return false">' + '</a>' +
              '<span class="image" style="background-image: url(' + entry['image'] + ')">' +'</span>' +
              '<span class="comment">' +
                entry['label']  + '</span>' +
              '<span class="name">' + entry['type'] + '</span><br>' +
              '<span class="comment">' + entry['price']  + ' EUR  - Inkl 19% MwSt</span>' +
              '<span class="arrow">' + '</span>'+
              '</a>' +' </li>'

               }); 
                $('#searchID').html(html);

            });}
    
	else
		alert("Bitte einen Suchbegriff eingeben.")		
}
 
 
$(window).keypress(function(e){
    if(e.keyCode == 13) {
        notEmpty();
        return false;
    } 
});

    
     function slide(){
         
             $('#slider1').tinycarousel({ display:1, duration: 500, pager: true, interval: true, controls: true });}
             window.setTimeout("slide()", 5000);
//              $("div").fadeIn("slow");

