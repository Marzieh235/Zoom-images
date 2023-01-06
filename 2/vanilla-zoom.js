(function (window) {
    let defineLibrary = () => ({
        init: function (imageId) {
            let image = document.querySelector(imageId);
            if (!image) {
                console.error(`image element dosen't exist`);
                return;
            }

            let zoomContainer, zoomResult, zoomLens;

            image.addEventListener('mouseenter', function (e) {
                let imageBox = this.getBoundingClientRect();

                zoomContainer = document.createElement('div');
                zoomContainer.classList.add('zoom-container');
                zoomContainer.style.width = `${imageBox.width}px`
                zoomContainer.style.height = `${imageBox.height}px`
                zoomContainer.style.position = 'absolute';
                zoomContainer.style.top = `${imageBox.top + window.pageYOffset}px`
                zoomContainer.style.left = `${imageBox.left + window.pageXOffset}px`



                document.querySelector('body').insertAdjacentElement('beforeend' , zoomContainer)
            })

        }
    })

    if (typeof (vanillaZoom) == 'undefined') {
        window.vanillaZoom = defineLibrary();
    } else {
        console.log('library already defined.')
    }
})(window)