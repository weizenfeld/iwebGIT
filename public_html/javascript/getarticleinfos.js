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
                            
                            
                         get_json_article();