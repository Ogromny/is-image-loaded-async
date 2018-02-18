export default function isImageLoadedAsync(el) {
	if (el instanceof NodeList) {
		if (el.length < 1) {
			return Promise.reject(`Error: ${el} is empty.`)
		}

		return Promise.all(Array.prototype.map.call(el, img => isImageLoadedAsync(img)))
	} else if (el instanceof Node) {
		if (el.tagName.toLowerCase() !== "img") {
			return Promise.reject(`Error: ${el} is not a img tag.`)
		}

		return new Promise((resolve, reject) => {
			if (el.complete && el.naturalWidth) {
				return resolve(`Success: ${el.src} loaded.`)
			}

			el.addEventListener("error", () => reject(`Error: ${el.src} cannot be loaded.`))
			el.addEventListener("load", () => resolve(`Success: ${el.src} loaded.`))
		})
	} else {
		return Promise.reject(`Error: ${el} is not a Node know type.`)
	}
}