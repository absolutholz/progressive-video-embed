import VideoEmbed from 'video-embed';
import serialize from 'serialize';

export function YouTubeEmbed() {
	const BASE_URL = 'https://www.youtube.com/embed/';
	const DEFAULT_PARAMETERS = { autoplay: 1, rel: 0 };

	/**
	 * Parse YouTube Video ID from a passed HREF string
	 *
	 * http://stackoverflow.com/questions/3452546/javascript-regex-how-to-get-youtube-video-id-from-url
	 *
	 * @param {string} sHref
	 *
	 * @returns string
	 */
	function parseId(sHref) {
		const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??(v=)?([^#\&\?]*).*/;
		const match = sHref.match(regExp);

		return match && match[match.length - 1].length === 11 ? match[match.length - 1] : false;
	}

	function initialize() {
		const videoId = parseId(element.getAttribute('href'));
		const params = serialize(DEFAULT_PARAMETERS);
		const src = `${BASE_URL}${videoId}?${params}`;

		return VideoEmbed(element, src);
	}

	return Object.freeze({
		BASE_URL,
		DEFAULT_PARAMETERS,
		parseId,
		initialize,
	});
}


/**
 *
 * @param {HTMLElement} element
 */
export function init(element) {
	return YouTubeEmbed(element).initialize();
}
