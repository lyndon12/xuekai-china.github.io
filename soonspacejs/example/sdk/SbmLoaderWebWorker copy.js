
let mainWorkerHref = null
let info = null

this.addEventListener('message', async function (e) {
	const { data } = e

	mainWorkerHref = data.href
	info = data.info

	fetchData(info)

}, false);

function fetchData(info) {

	const { url } = info

	const bundleScriptUrl = getBundleScriptUrl(url)

	console.log(bundleScriptUrl)

	fetch(bundleScriptUrl)
		.then(res => res.arrayBuffer())
		.then(buffer => {
			this.postMessage({
				buffer,
				info
			})
		})
}

function getBundleScriptUrl(url) {

	const isNetWork = url.includes('http')

	if (isNetWork) return url
	else {

		const uris = url.split('/')
		const mainWorkerHrefUris = mainWorkerHref.split('/')
		mainWorkerHrefUris.pop()

		const newUris = []

		for (let i in uris) {
			if (uris[i] === '..') {
				mainWorkerHrefUris.pop()
			} else {
				newUris.push(uris[i])
			}
		}

		return [...mainWorkerHrefUris, ...newUris].join('/')

	}

}
