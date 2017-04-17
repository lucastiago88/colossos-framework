
//Add Função menu TOOGLE

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled", 6000);
    });
    
    
    $(".closebtn").click(function(e){
        e.preventDefault();
        $("#wrapper").toggleClass("toggled", 6000);
    });
    



    
 $(document).ready(function() {
      $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });
    });

