$(document).ready(function () {

    var feed = new Instafeed({
        useHttp: false,
        get: 'user',
        userId: '1104168771',
        resolution: 'standard_resolution',
        clientId: 'b9241e661da84d13b112bc13a46e427a',
        accessToken: '1104168771.b9241e6.74e68238de3140078939d7b9a17108d3',
        template: '<div class="grid-item photo-{{orientation}} {{type}}"><a href="{{link}}"><img src="{{image}}" /></a></div>'
    });
    feed.run();

    $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer',
            gutter: 10
        }
    });


});