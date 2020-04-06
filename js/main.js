new Vue ({
    el : "#trading-platform",
    data : {
        rerenderKey : 0,
        colormode : false,
        annmodal: false,
        mainmodal: false,
        wlistmodal: false,
        ordmodal : false,
        //inner main modal content
        imm : [dpw=false, rfr=false],
        //top statistics
        tss : [cur=true, cre=true, unr=true, mpl=true, mar=true, plo=true, odd=true, oam=false]
    },
    methods : {
        resetPos : function(e) {
            $(e).closest(".inner-cont").css("left", "0");
            $(e).closest(".inner-cont").css("top", "0");
            //resets active inner main modal content
            for(var i = 0; i < this.imm.length; i++) {
                this.imm[i] = false;
            }
        },
        resetInner : function(n) {
            //resets active inner main modal content
            for(var i = 0; i < this.imm.length; i++) {
                this.imm[i] = false;
            }
            //change active
            this.imm[n] = true;

            //rerender key to rerender element
            ++this.rerenderKey;
        }
    }
});

//CHECKBOXES
$(".left-check input").click(function(){
    if($(this).closest(".left-check").next().hasClass("active")){
        $(this).closest(".left-check").next().slideUp(200);
    }else {
        $(this).closest(".left-check").next().slideDown(200);
    }
    $(this).closest(".left-check").next().toggleClass("active");
});

//WLIST MODAL FILTER
var filterq = false;
$(window).click(function(){
    if(filterq) {
        $(".filter-cont").removeClass("active");
        filterq = false;
    }
});
$(".filter-cont").click(function(event){
    event.stopPropagation();    
    if(!filterq) {
        $(this).addClass("active");
        filterq = true;
    }
});

$(".wlist-filter-drop li").click(function(){
    $("#wlist-filter").val($(this).text());
});

$(".filter-cont .clear-button").click(function(){
    $("#wlist-filter").val("");
})

//MAIN MODAL ACCORDION
$(".left-accord .outer li h3").click(function(){
    var inner = $(this).next(".inner");
    if ($(inner).hasClass("active")){
        $(inner).slideUp(200);
    } else {$(inner).slideDown(200)}
    $(inner).toggleClass("active");
});

//MODAL DRAGGING
$(".inner-cont").draggable({handle : ".top"});

//ORDER TABLE DOCKING SIZES
$("#sdock").click(function(){
    if (!($(".table-orders").hasClass("sm"))){
        $(".table-orders").removeClass("lg");$(".table-games").removeClass("sm");
        $(".table-orders").removeClass("md");$(".table-games").removeClass("md");
        $(".table-orders").addClass("sm");$(".table-games").addClass("lg");
    }
});
$("#mdock").click(function(){
    if (!($(".table-orders").hasClass("md"))){
        $(".table-orders").removeClass("lg");$(".table-games").removeClass("lg");
        $(".table-orders").removeClass("sm");$(".table-games").removeClass("sm");
        $(".table-orders").addClass("md");$(".table-games").addClass("md");
    }
});
$("#ldock").click(function(){
    if (!($(".table-orders").hasClass("lg"))){
        $(".table-orders").removeClass("sm");$(".table-games").removeClass("lg");
        $(".table-orders").removeClass("md");$(".table-games").removeClass("md");
        $(".table-orders").addClass("lg");$(".table-games").addClass("sm");
    }
});