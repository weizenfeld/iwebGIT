var iWebkit;

if (!iWebkit) {
	
	iWebkit = window.onload = function () {
			function fullscreen() {
				var a = document.getElementsByTagName("a");
				for (var i = 0; i < a.length;i++) {
					if (a[i].className.match("noeffect")) {
					}
				else {
						a[i].onclick = function () {
							window.location = this.getAttribute("href");
							return false;
						};
					}
				}
			}

			function hideURLbar() {
				window.scrollTo(0, 0.9);
			}

                       


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


                        function get_json() {

                        var html = '';

                        $.getJSON("includes/products.php" ,  function(data){

                        $.each(data, function(entryIndex, entry){

                        html +=

                          '<li class="store">' +
                          '<a  href="article.php?info=' + entry['articlenumber'] + '">' + '</a>' +
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

                        //einzelne Artikelinformation ziehen und anzeigen
                        function get_json_article() {

                        var url = (document.URL);
                        //hier werden die letzen 5 URL Zeichen gezogen -> Artikelnummer
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
                        '<li class="menu"><a href="fullimage.php?info=' + entry['articlenumber'] + '">' +
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



                        //Produkt-Slider auf der Indexseite
                        function get_carousel() {

                        var html = '';

                        $.getJSON("includes/carousel.php" ,  function(data){

                        //$('#angebot').empty();

                        $.each(data, function(entryIndex, entry){

                        html +=

                          '<li>' +
                          '<a href="article.php?info='+ entry['articlenumber'] + '">'+
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
                                loadSite();
                                window.onload=get_carousel();
                                window.onload=get_json();
                                window.onload=get_json_article();

                                
                                

			};
			iWebkit.init();
		};



}


//Wenn Bild fehlt durch standart Image ersetzen
function ImgError(source){
    source.src = "images/No-Image-Available.jpg";
    source.onerror = "";
    return true;
}

