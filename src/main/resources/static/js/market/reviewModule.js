/* marketDetail.html */

let reviewService = (function(){
    function getReviewList(productId, callback, error) {
        $.ajax({
            url: "/review/" + productId,
            type: "get",
            data: JSON.stringify(productId, page),
            contentType: "application/json; charset=utf-8",
            success: function (reviews, status, xhr) {
                if(callback){
                    callback(reviews);
                }
            },
            error: function (xhr, status, err) {
                if(error){
                    error(err);
                }
            }
        });
    }

    function getReviewStarRate(productId, callback, error){
        $.ajax({
            url: "/review/all/" + productId,
            type: "post",
            data: JSON.stringify(productId),
            contentType: "application/json; charset=utf-8",
            success: function (reviews, status, xhr) {
                if(callback){
                    callback(reviews);
                }
            },
            error: function (xhr, status, err) {
                if(error){
                    error(err);
                }
            }
        });
    }

    function getPhotoReview(productId, callback, error){
        $.ajax({
            url: "/review/photo/" + productId,
            type: "post",
            data: JSON.stringify(productId),
            contentType: "application/json; charset=utf-8",
            success: function (reviews, status, xhr) {
                if(callback){
                    callback(reviews);
                }
            },
            error: function (xhr, status, err) {
                if(error){
                    error(err);
                }
            }
        });
    }

    function getMoreReview(productId, page, callback, error){
        $.ajax({
            url: "/review/" + productId + "/" + page,
            type: "get",
            data: JSON.stringify(productId, page),
            contentType: "application/json; charset=utf-8",
            success: function (reviews, status, xhr) {
                if(callback){
                    callback(reviews);
                }
            },
            error: function (xhr, status, err) {
                if(error){
                    error(err);
                }
            }
        });
    }

    function save(review, callback, error){
        $.ajax({
            url: "/review/new",
            type: "post",
            data: JSON.stringify(review),
            contentType: "application/json; charset=utf-8",
            success: function(result, status, xhr){
                if(callback){
                    callback(result);
                }
            },
            error: function(xhr, status, err){
                if(error){
                    error(err);
                }
            }
        });
    }

    function uploadReviewFile(file, callback, error){
        var data = new FormData();
        data.append("file", file);

        $.ajax({
            url: "/review/upload",
            type: "post",
            data: data,
            enctype: 'multipart/form-data',
            cache: false,
            contentType: false,
            processData: false,
            success: function (file, status, xhr) {
                console.log("upload 성공")
                if(callback){
                    callback(file);
                }
            },
            error: function (xhr, status, err) {
                if(error){
                    error(err);
                }
            }
        });
    }

    function timeForToday(value) {
        const today = new Date();
        const timeValue = new Date(value);

        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 1) return '방금전';
        if (betweenTime < 60) {
            return `${betweenTime}분전`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
            return `${betweenTimeHour}시간전`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
            return `${betweenTimeDay}일전`;
        }

        return `${Math.floor(betweenTimeDay / 365)}년전`;
    }
    return{getReviewList:getReviewList,getReviewStarRate:getReviewStarRate,getMoreReview:getMoreReview,
        getPhotoReview:getPhotoReview ,save:save, uploadReviewFile:uploadReviewFile, timeForToday:timeForToday}
})();