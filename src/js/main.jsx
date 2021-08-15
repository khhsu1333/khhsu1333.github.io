var path = require('path');

require("./typed.custom");

require("../css/main");
require("../css/athena");

var portfolio = require("../data/portfolio");

var content = '';
for (const obj of portfolio) {
    content += '<div class="row info-item"><div class="col-lg-2">';
    // left part
    content += ('<span>' + obj.date + '</span>');

    content += '</div><div class="col-lg-7">';
    // middle part
    content += ('<div class="header-2">' + obj.name + '</div>');
    content += ('<p>' + obj.description + '</p>');
    if (obj.media != undefined) {
        content += ('<a href="' + obj.media[0].link + '">' + obj.media[0].title + '</a>');
    }

    content += '</div><div class="col-lg-3">';
    // right part
    if (obj.image != undefined) {
        content += '<img src="' + require('./../' + obj.image) + '"/>';
    }

    content += '</div></div>';
}
$('#portfolio-container').html(content);

$(function() {
    $(".element").typed({
        strings: [
            'Hello!',
            'I am Andy',
            'I am a C++ programmer',
            'I am a Python programmer',
            'I love analyzing data',
            'I love watching movie',
            'Thanks for visiting :)',
            ''
        ],
        typeSpeed: 50,
        backSpeed: 10,
        cursorChar: "_",
    });
});
