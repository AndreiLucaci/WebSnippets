(function ($, document) {
	$(document).ready(function () {
		$("#clicker").on("click", function () {
			var texterValue = $("#texter").val();
			var iframeWindow = document.defaultView || document.parentWindow;;
			$(iframeWindow.parent.document).find(".left .hrefs a").first().text(texterValue);
		});
	});
}
)(jQuery, window.document);