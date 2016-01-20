var initImageList = [
        {
            name: "Pretty",
            url: "https://c1.staticflickr.com/9/8093/8494383957_ebbebaca4d_n.jpg"
        }, {
            name: "Wait here, I have gone to get help",
            url: "http://www.thejealouscurator.com/blog/wp-content/uploads/2013/12/newneonshow2.jpg"
        }, {
            name: "Pretty",
            url: "https://c1.staticflickr.com/5/4045/4644606033_c4c8bc47ff_n.jpg"
        }, {
            name: "Pretty",
            url: "http://data.whicdn.com/images/45650272/large.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/736x/c4/50/fd/c450fd19ba1c5d52c920a710bbdbd081.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/736x/f3/0c/5f/f30c5fe12d67a9fdaa4151dc983624b1.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/736x/35/8a/f1/358af1d5c23cff589cbec5c0d8e3fce9.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/736x/59/72/7d/59727de7e4dcfe7c9b42a8a9fec01e2b.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/736x/55/b5/18/55b51865cbbae1ecf8291b8bbc282b36.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/736x/45/3c/8a/453c8a9405d50dff039a94df1eb45f4c.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/736x/66/3b/f6/663bf6de82730427c471a70ddc67460b.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/736x/3b/a8/40/3ba8402498aefbb314dc3749d6284e82.jpg"
        }, {
            name: "Pretty Sneaks",
            url: "https://s-media-cache-ak0.pinimg.com/236x/f8/75/57/f8755743e3030f836b51a59b69f98aa6.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/736x/d1/fd/0f/d1fd0f5b44ca2418a8a1bdb509e8a357.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/736x/3d/74/b6/3d74b6d56eef4aed6eb008d6af414232.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/736x/0a/d5/89/0ad58965874b27b4d040eac160161d61.jpg"
        }, {
            name: "Pretty shoes",
            url: "https://s-media-cache-ak0.pinimg.com/736x/6e/f1/8d/6ef18da2bf4c7d204e8a9da530f1c5fc.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/736x/31/d7/12/31d712172ecafd8cdaa4f824e6d1a242.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/736x/f3/4f/bd/f34fbd71af700c6cc22d11184a4311ce.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/736x/e9/8c/6f/e98c6f9dfa693c1ea657cb3cc504f78a.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/236x/52/b4/9f/52b49f7dda85b19a8f4e433ae12390cb.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/236x/57/57/41/57574182e35327e7fe438bf84f1eb3ca.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/236x/df/85/8b/df858bcd62014cd8ddb395cbfc95182a.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/736x/53/2b/2e/532b2e9f1e0b0f581620cda2923ebed0.jpg"
        }, {
            name: "Yeah Yeah Yeah Yeah Yeah Yeah",
            url: "https://s-media-cache-ak0.pinimg.com/736x/1d/e7/3d/1de73d5ff0fdcab3c052b5fe0bb373d9.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/236x/14/55/7a/14557a7fe27bf43fa5a90d9728d5d495.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/736x/00/93/b0/0093b086c6ff2838793093f3ae53b06f.jpg"
        }, {
            name: "Pretty",
            url: "https://s-media-cache-ak0.pinimg.com/736x/d9/2f/bf/d92fbffe29d54aef95bb472977e4c14c.jpg"
        }
    ],
    addImageList = [
        {
            name: "Image1",
            url: "http://farm5.staticflickr.com/4010/4578838483_f9c66aece1_z.jpg"
        }, {
            name: "Image2",
            url: "http://farm8.staticflickr.com/7214/7030801869_0dbf5fa4a3_z.jpg"
        }
    ];

document.addEventListener("DOMContentLoaded", function(event) {

    var imageListContainer = document.querySelector("#image-list-container"),
        showMoreBtn = document.querySelector("#show-more");

    function init () {
        var listItems = generateListItems(initImageList);

        // add initial images to the list
        imageListContainer.appendChild(listItems);

    }

    function generateListItems (contentList) {
        var imageListItems = document.createDocumentFragment();

        // build list elements
        _.each(contentList, function (item, index) {
            var li = document.createElement("li");

            li.classList.add("item");
            li.innerHTML = "<div class='image-container'>" +
                                "<img src='" + item.url + "'>" +
                            "</div>" +
                            "<div class='image-title' title='" + item.name + "'>" + item.name + "</div>";
            imageListItems.appendChild(li);
        });

        return imageListItems;
    }

    showMoreBtn.addEventListener("click", function () {
        var addList = generateListItems(addImageList);

        // add images to the list
        imageListContainer.appendChild(addList);
        imageListContainer.scrollTop = imageListContainer.scrollHeight;
    });

    init();

    function layOutImages (contentList) {
console.log("I took this list:", contentList);
    }

});
