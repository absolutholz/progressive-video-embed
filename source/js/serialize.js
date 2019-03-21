/**
 *
 * @link https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
 *
 * @param {Object} params
 * @param {string} prefix
 *
 * @return string
 */
export function serialize(params, prefix = null) {
	const aEncodedArray = [];

	for (let param in params) {
		if (params.hasOwnProperty(param)) {
			const k = prefix ? `${prefix}[${param}]` : param;
			const v = params[param];

			aEncodedArray.push((v !== null && typeof v === "object") ?
				serialize(v, k) :
				encodeURIComponent(k) + "=" + encodeURIComponent(v));
		}
	}

	return aEncodedArray.join("&");
}
