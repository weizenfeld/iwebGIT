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
                        function get_json() {

                                var html = '';

                                  $.getJSON("includes/products.php" ,  function(data){

                                  $.each(data, function(entryIndex, entry){

                              html +=
                            
                                  '<li class="store">' +
                                  '<a  href="#?info=' + entry['articlenumber'] + '" onclick="javascript:ShowAnzeige();  get_json_article();">' + '</a>' +
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


//                      <!-- #########  ANZEIGE ARTIKEL IM SLIDER  ########## --> 
                        function get_carousel() {

                                var html = '';

                                  $.getJSON("includes/carousel.php" ,  function(data){

                                  $.each(data, function(entryIndex, entry){

                               html +=

                                  '<li>' +
                                  '<a href="#?info='+ entry['articlenumber'] + '"onclick="javascript:get_json_article(); javascript:ShowAnzeige();">'+
                                  '<img src="' + entry['image'] + '" alt="Artikel" name="article" width="70" height="99"  onerror="ImgError(this);"/></a>'+
                                  //'<img src="' + entry['image'] + '" alt="Artikel" name="article" width="70" height="99" /></a>'+
                                  '</li>'

                                   });
                                    $('#articleimages').html(html);

                                });

                        }
  
			iWebkit.init = function () {
				fullscreen();
				hideURLbar();
                                get_carousel();
                                get_json();
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
     }
     
    //    <!-- #########  INHALT DIV ARTICLE CONTAINER   ########## --> 
    function ShowAnzeige(){
        document.getElementById('mainmenu').style.display = 'none';
        document.getElementById('divName').style.display = 'none';
        document.getElementById('menu').style.display = 'inline';
        document.getElementById('azeige').style.display = 'inline';
        document.getElementById('image').style.display = 'none';
        document.getElementById('contakte').style.display = 'none';
        document.getElementById('back').style.display = 'none';
        document.getElementById('search').style.display = 'none';     
     }
     
     
    //    <!-- #########  INHALT DIV IMAGE CONTAINER   ########## --> 
    function ShowImage(){
        document.getElementById('mainmenu').style.display = 'none';
        document.getElementById('divName').style.display = 'none';
        document.getElementById('menu').style.display = 'inline';
        document.getElementById('azeige').style.display = 'none';
        document.getElementById('image').style.display = 'inline';
        document.getElementById('contakte').style.display = 'none';
        document.getElementById('back').style.display = 'inline';
        document.getElementById('search').style.display = 'none';     
     }
     
     
    //   <!-- ######### ANZEIGE  FULLIMAGE  ##########  -->     
    function get_image(){
    //  hier werden die letzen 5 URL Zeichen gezogen -> Artikelnummer
        var url = (document.URL);
        var no = url;
        var nolenght = url.substr(-5,1)
        var urls = new Array();
        urls.push(no.substr(-5,1), no.substr(-4,1), no.substr(-3,1), no.substr(-2,1), no.substr(-1,1));
        var info = (urls[0] + urls[1] + urls[2] + urls[3] + urls[4]);

        var html = '';

         $.getJSON('includes/getarticlenumber.php?info=' + info +'' ,  function(data){

         $.each(data, function(entryIndex, entry){

            html +=
                
                '<img alt="'+ entry['label'] + '" style="margin-top: 10px; margin-bottom: 8px;" src="' + entry['image'] + '" onerror="ImgError(this);"></img>' 
                 }); 
                 $('#fullimage').html(html);
              });
      }
                        
                       
    //    <!-- #########  ANZEIGE ARTIKEL EINZELN  ########## -->                     
    function get_json_article() {
        //hier werden die letzen 5 URL Zeichen gezogen -> Artikelnummer
        var url = (document.URL);
        var no = url;
        var nolenght = url.substr(-5,1)
        var urls = new Array();
        urls.push(no.substr(-5,1), no.substr(-4,1), no.substr(-3,1), no.substr(-2,1), no.substr(-1,1));
        var info = (urls[0] + urls[1] + urls[2] + urls[3] + urls[4]);

        var html = '';

         $.getJSON('includes/getarticlenumber.php?info=' + info +'' ,  function(data){

         $.each(data, function(entryIndex, entry){

            html +=

                '<ul class="pageitem">' +
                '<li class="articlediscr"><p>' + entry['discr_short'] + '</p>'  +
                '</li>' +
                '<li id="articleimage">' +
                '<img  alt="'+ entry['type'] + '" width="100" src="' + entry['image']+ '" onerror="ImgError(this);"/>' +
                '</li>' +
                '<li class="menu"><a href="#?info='             + entry['articlenumber'] + '" onclick="javascript:ShowImage();  get_image(); ">' + 
                '<img alt="'+ entry['type']+ '" src="' + entry['image']+ '" onerror="ImgError(this);" /><span class="name">Photos'+
                '</span></a><span class="arrow"></span></li>' +
                '<li class="textbox ">' +
                'Label:&nbsp; &nbsp; &nbsp;' +
                 entry['label'] +
                '</li>' +
                '<li class="textbox"><p>' +
                'Color:&nbsp; &nbsp; &nbsp;' +
                 entry['color'] + '</p>' +
                '</li>' +
                '<li class="textbox "><p>' +
                'Size: &nbsp; &nbsp; &nbsp;&nbsp;' +
                 entry['size'] + '</p>' +
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
                            

     
     

