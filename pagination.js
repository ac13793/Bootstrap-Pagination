var oPagination = {
    iTotalItems: 0,
    iTotalItemsPerPage: 10,
    iStartPageIndex: 1
}

// Pagination function
$(".pagination .page-item").click(function () {
    var iCurrentPageNumber = 0;
    if (!$(this).hasClass("prevButton") && !$(this).hasClass("nextButton") && !$(this).hasClass("firstButton") && !$(this).hasClass("lastButton")) {
        // Remove active class from pagination item
        $(".pagination").find(".active").removeClass("active");
        // Make current page-item to active item
        $(this).addClass("active");
        if (1 == parseInt($(".pagination").find(".active .page-link").text())) {
            $(this).prev(".page-item").addClass("disabled");
        } else if (10 == parseInt($(".pagination").find(".active .page-link").text())) {
            $(this).next(".page-item").addClass("disabled");
        } else {
            // Enable first, prev, next and last button
            $(".pagination").find(".firstButton, .prevButton, .nextButton, .lastButton").removeClass("disabled");
        }

    } else if ($(this).hasClass("prevButton")) {
        if (!$(this).hasClass("disabled")) {
            if (oPagination.iStartPageIndex + 1 !== parseInt($(".pagination").find(".active .page-link").text())) {
                $(this).removeClass("disabled");
            } else {
                // Disable prev button and first button if offset - 1 page item is clicked
                $(this).addClass("disabled");
                $(".pagination .firstButton").addClass("disabled");
            }
            $(".pagination .nextButton, .pagination .lastButton").removeClass("disabled");
            $(".pagination").find(".active").prev(".page-item").addClass("active");
            $($(".pagination").find(".active")[1]).removeClass("active");
        }
    } else if ($(this).hasClass("nextButton")) {
        if (!$(this).hasClass("disabled")) {
            if (oPagination.iTotalItemsPerPage - 1 !== parseInt($(".pagination").find(".active .page-link").text())) {
                $(this).removeClass("disabled");
            } else {
                // Disable next button and last button if offset - 1 page item is clicked
                $(this).addClass("disabled");
                $(".pagination .lastButton").addClass("disabled");
            }
            $(".pagination .prevButton, .pagination .firstButton").removeClass("disabled");
            $(".pagination").find(".active").next(".page-item").addClass("active");
            $($(".pagination").find(".active")[0]).removeClass("active");
        }
    } else if ($(this).hasClass("lastButton")) {
        if (!$(this).hasClass("disabled")) {
            // Remove active class from pagination item
            $(".pagination").find(".active").removeClass("active");
            // Add active class to last item
            $(".pagination .nextButton").prev(".page-item").addClass("active");
            // Disable next and last button and enable first and previous button
            $(".pagination .nextButton, .pagination .lastButton").addClass("disabled");
            // Enable first and prev button
            $(".pagination .prevButton, .pagination .firstButton").removeClass("disabled");
        }
    } else {
        if (!$(this).hasClass("disabled")) {
            // Remove active class from pagination item
            $(".pagination").find(".active").removeClass("active");
            // Add active class to first item
            $(".pagination .prevButton").next(".page-item").addClass("active");
            // Enable next and last button and enable first and previous button
            $(".pagination .nextButton, .pagination .lastButton").removeClass("disabled");
            // Disable first and prev button
            $(".pagination .prevButton, .pagination .firstButton").addClass("disabled");
        }
    }
});