const bufferMap = new Map

self.addEventListener('message', async function (e) {

	const { href, info } = e.data

	fetchData(href, info)

}, false);

function fetchData(href, info) {

	const { url } = info
	const bundleScriptUrl = getBundleScriptUrl(href, url)

	if (bufferMap.has(bundleScriptUrl)) {

		self.postMessage({
			buffer: bufferMap.get(bundleScriptUrl),
			info
		})

	} else {

		fetch(bundleScriptUrl)
			.then(res => res.arrayBuffer())
			.then(buffer => {
				bufferMap.set(bundleScriptUrl, buffer)
				self.postMessage({
					buffer,
					info
				})
			})

	}

}

function getBundleScriptUrl(href, url) {

	const isNetWork = url.includes('http')

	if (isNetWork) return url
	else {

		const uris = url.split('/')
		const mainHrefUris = href.split('/')
		mainHrefUris.pop()

		const newUris = []

		for (let i in uris) {
			if (uris[i] === '..') {
				mainHrefUris.pop()
			} else {
				newUris.push(uris[i])
			}
		}

		return [...mainHrefUris, ...newUris].join('/')

	}

}
