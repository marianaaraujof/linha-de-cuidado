window.onload = () => {
    //UBS
    $('#ubs-bloco').hover(function()
    {
    $('#ubs-bloco').css("background-image", "url(images/txt/ubstxt.png)");
    });
    $('#ubs-bloco').mouseleave(function(){
    $('#ubs-bloco').css("background-image", "url(images/blocos/UBS.png)"); 
    });
    $("#ubs-bloco").click(function(){
        $(".drops").append("<div class='drag'><img src='../images/icones/upa.png'><a href='javascript:void(0);' class='remove'>&times;</a></div>"); 
    });
    //ACS
    $('#acs-bloco').hover(function()
    {
    $('#acs-bloco').css("background-image", "url(images/txt/acstxt.png)");
    });
    $('#acs-bloco').mouseleave(function(){
    $('#acs-bloco').css("background-image", "url(images/blocos/ACSEFS.png)"); 
    });
    $("#acs-bloco").click(function(){
        $(".drops").append("<div class='drag'><img src='../images/icones/acs.png'><a href='javascript:void(0);' class='remove'>&times;</a></div>"); 
    });
    $(document).on("click", "a.remove" , function() {
        $(this).parent().remove();
    });
    $(".drag").draggable();
    $("#dropzone").droppable();
   
}