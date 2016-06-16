var webPage = require('webpage');
var page = webPage.create();
page.viewportSize = {width: 800, height: 968};
page.open('../../outhtml/Adidas=Butsy =Kombinirovannyi=2125=4500=39=40=41=46=0.html', function start(status) {
    page.render('../../outIMG/Adidas=Butsy =Kombinirovannyi=2125=4500=39=40=41=46=0.png', {
        format: 'png',
        quality: '100'
    });
    phantom.exit();
});