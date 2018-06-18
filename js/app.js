function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

function getProducts() {
  var dbParam, xmlhttp, myObj, x, txt = "";

  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          myObj = JSON.parse(this.responseText);

          for (x in myObj) {
            if(x%4 == 0){
              txt += "<div class='row text-center'>";
            }

            txt += "<div class='col-xs-12 col-sm-4 col-md-3'>";
            txt += "  <div class='thumbnail'>";
            txt += "    <a href='product_gallery.php?pid="+myObj[x].id+"'><img src='image/product/"+myObj[x].img+"' width='50%' /></a>";
            txt += "    <p class='product_name' style='color:" + myObj[x].colour + "'>" + myObj[x].name + "</p>";
            txt += "    <p>" + myObj[x].function + "</p>";
            txt += "  </div>";
            txt += "</div>";

            if(x>0 && x%4 == 3){
              txt += "</div>";
            }
          }

          document.getElementById("products").innerHTML = txt;
      }
  }
  xmlhttp.open("GET", "/js/data.json", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send();
}

function getProductsforgallery(initialSlide) {
  var dbParam, xmlhttp, myObj, x, txt = "";
  var cnt = 0;

  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          myObj = JSON.parse(this.responseText);

          txt +="<div class='row'>";
          txt +="<div class='slider-banner slider-for'>";

          for (x in myObj) {
            txt +="	<div>";
            //txt +="		<div class='col-sm-1'></div>";
            txt +="		<div class='col-sm-4'>";
            txt +="			<img src='image/product/"+myObj[x].img+"'>";
            txt +="		</div>";
            txt +="		<div class='col-sm-8' style='text-align:justify;'>";
            txt +="			<p class='g_product_name' style='color:" + myObj[x].colour + "'>"+myObj[x].name+"</p>";
            txt += "    <p class='g_product_func'>" + myObj[x].function + "</p>";
            txt += "    <p class='g_product_desc'>" + myObj[x].description + "</p>";
            txt +="		</div>";
            //txt +="		<div class='col-sm-1'></div>";
            txt +="	</div>";

            cnt++;
          }

          txt +="</div>";
          txt +="<div class='slider slider-nav'>";

          for (x in myObj) {
            txt +="	<div>";
            txt +="		<img src='image/product/"+myObj[x].img+"' width='20%' />";
            txt +="   <p class='thumbnail_p' style='color:" + myObj[x].colour + "'>"+ myObj[x].name +"</p>"
            txt +="	</div>";
          }

          txt +="</div>";
          txt +="</div>";

          document.getElementById("products").innerHTML = txt;

          if(initialSlide < 1){
            initialSlide = 1;
          }else if(initialSlide > cnt){
            myObj = cnt - 1;
          }

          if (screen.width >= 700) {
            startSlick(initialSlide-1);
          }
      }
  }
  xmlhttp.open("GET", "/js/data.json", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send();
}

function startSlick(initialSlide){
  $('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.slider-nav',
   initialSlide: initialSlide
  });
  $('.slider-nav').slick({
   slidesToShow: 5,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   dots: false,
   centerMode: true,
   focusOnSelect: true,
   initialSlide: initialSlide
  });
}

$(function() {
  var form = $('#email_form');

  $(form).submit(function(event) {
    event.preventDefault();

    var formData = $(form).serialize();
    $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
    })
    .done(function(response) {
      alert("The mail has been sent successfully.");
      location.href = "/";
    })
    .fail(function(data) {
      alert("An error occured and your message could not be sent.");
    });
  });
});
