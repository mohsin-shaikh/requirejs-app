requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        helper: '../helper',
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'jquery-3.6.0.min'
    }
});


requirejs(["helper/util", "jquery", "helper/temp"], function(util, $, temp) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".

    console.log({util, temp});
    
    printTable({
        "name": "John Smith",
        "age": 35,
        "children": 2
    });

    $("h1").html("Hello World");
});