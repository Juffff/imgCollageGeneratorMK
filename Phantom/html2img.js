var webPage = require('webpage');
var page = webPage.create();

page.viewportSize = { width: 1920, height: 1080 };
page.open('index.html', function start(status) {
    page.render('imzg.png', {format: 'png', quality: '100'});
    phantom.exit();
});