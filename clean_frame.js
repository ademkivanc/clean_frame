var body = document.getElementsByTagName('body');
var iframes = document.getElementsByTagName('iframe');
body[0].setAttribute("class", '');

for ( var i = 0; i < iframes.length; i++) {
	var src = iframes[i].getAttribute('src');
	console.log(src);
	if (src && src.search(/play|mail.ru|vk.com|embed/) >= 0) {
		body[0].innerHTML = '<iframe style="width:' + window.innerWidth
				+ 'px;height:' + window.innerHeight + 'px" src="' + src
				+ '" frameborder="0"></iframe> ';
		break;
	}
}