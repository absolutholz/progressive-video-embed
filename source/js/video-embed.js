export function VideoEmbed(elAnchor, src) {
	/**
	 * Replace an element with an iFrame with the passed src
	 *
	 * @param {HTMLElement} element
	 * @param {string} src
	 *
	 * @return {HTMLElement} - the new iFrame
	 */
	const replaceWithIframe = function replaceElementWithSourcedIframe() {
		// const iWidth = element.getBoundingClientRect().width;
		// const iHeight = element.getBoundingClientRect().height;
		const elIframe = document.createElement('iframe');

		elIframe.setAttribute('src', src);
		elIframe.setAttribute('scrolling', 'no');
		elIframe.setAttribute('frameborder', '0');
		// elIframe.setAttribute('width', iWidth);
		// elIframe.setAttribute('height', iHeight);
		elIframe.setAttribute('allowfullscreen', true);

		elAnchor.parentNode.replaceChild(elIframe, element);

		elAnchor.removeEventListener('click', _handleAnchorClick);

		return elIframe;
	}

	function _handleAnchorClick(event) {
		event.preventDefault();
		replaceWithIframe();
	}

	elAnchor.addEventListener('click', _handleAnchorClick);

	return Object.freeze({
		replaceWithIframe
	});
}
