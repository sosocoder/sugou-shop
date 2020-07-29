    lazyLoadInit({
        showTime: 1100,
        onLoadBackEnd: function(i, e) {
            console.log("onLoadBackEnd:" + i);
        },
        onLoadBackStart: function(i, e) {
            console.log("onLoadBackStart:" + i);
        }
    });