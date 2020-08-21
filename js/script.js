const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
	el.addEventListener("click", e => {
		e.preventDefault();

		const a = document.querySelector(".tabs li.active")
		a.classList.remove(".active");
		document.querySelector(".tabs-panel.active").classList.remove("active");

		const parentListItem = el.parentElement;
		parentListItem.classList.add("active");
		const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

		const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
		panel[0].classList.add("active");
	});
}




function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

$('img.img-svg').each(function () {
	var $img = $(this);
	var imgClass = $img.attr('class');
	var imgURL = $img.attr('src');
	$.get(imgURL, function (data) {
		var $svg = $(data).find('svg');
		if (typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', imgClass + ' replaced-svg');
		}
		$svg = $svg.removeAttr('xmlns:a');
		if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
			$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
		}
		$img.replaceWith($svg);
	}, 'xml');
});

