var oPagination = {
    iTotalItems: 0,
    iTotalItemsPerPage: 10,
    iStartPageIndex: 1
}


// Pagination function
    $(".pagination .page-item").click(function(){
        var iCurrentPageNumber = 0;
        if(!$(this).hasClass("prevButton") && !$(this).hasClass("nextButton")){
            // Remove active class from pagination item
            $(".pagination").find(".active").removeClass("active");
            // Make current page-item to active item
            $(this).addClass("active");
            if(1==parseInt($(".pagination").find(".active .page-link").text())){
                $(this).prev(".page-item").addClass("disabled");
            } else if(10 == parseInt($(".pagination").find(".active .page-link").text())){
                $(this).next(".page-item").addClass("disabled");
            } else {
                $(".pagination").find(".prevButton").removeClass("disabled");
                $(".pagination").find(".nextButton").removeClass("disabled");
            }

        } else if($(this).hasClass("prevButton")){
            if(!$(this).hasClass("disabled")){
                if(oPagination.iStartPageIndex + 1 !== parseInt($(".pagination").find(".active .page-link").text())){
                    $(this).removeClass("disabled");
                    $(".pagination .next-button").removeClass("disabled");
                } else {
                    // Disable prev button if offset - 1 page item is clicked
                    $(this).addClass("disabled");
                }
                $(".pagination").find(".active").prev(".page-item").addClass("active");
                $($(".pagination").find(".active")[1]).removeClass("active");
            }
        } else {
            if(!$(this).hasClass("disabled")){
                if(oPagination.iTotalItemsPerPage - 1 !== parseInt($(".pagination").find(".active .page-link").text())){
                    $(this).removeClass("disabled");
                    $(".pagination .prev-button").removeClass("disabled");
                } else {
                    // Disable next button if offset - 1 page item is clicked
                    $(this).addClass("disabled");
                }
                $(".pagination").find(".active").next(".page-item").addClass("active");
                $($(".pagination").find(".active")[0]).removeClass("active");
            }
        }
    });