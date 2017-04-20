
//Add Função menu TOOGLE

    $("#menu-toggle").click(function(e) {
        e.stopPropagation();
        $("#wrapper").toggleClass("toggled", 6000);
    });
    
    
    $("#sidebar-wrapper").click(function(e){
        e.stopPropagation();
    });

    $("body,html").click(function(e){
        $("#wrapper").removeClass("toggled", 6000);
    });
    




    
 $(document).ready(function() {
      $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });
    });

