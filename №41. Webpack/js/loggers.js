function getModules() {
	this.tabs = function () {
		console.log('Get tabs')
	}

	this.slider = function () {
		console.log('Get sliders')
	}

	this.modal = function () {
		console.log('Get modals')
	}
}

module.exports = getModules
