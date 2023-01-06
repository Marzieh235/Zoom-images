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


                zoomLens = document.createElement('div');
                zoomLens.classList.add('img-zoom-lens');
                zoomContainer.insertAdjacentElement('afterbegin', zoomLens);
                zoomContainer.addEventListener('mousemove', function (e) {
                    let x = e.clientX - imageBox.left;
                    let y = e.clientY - imageBox.top;


                    x = x - (zoomLens.offsetWidth / 2);
                    y = y - (zoomLens.offsetHeight / 2);


                    if (x > image.width - zoomLens.offsetWidth) { x = image.width - zoomLens.offsetWidth }
                    if (x < 0) { x = 0 }
                    if (y > image.height - zoomLens.offsetHeight) { y = image.height - zoomLens.offsetHeight }
                    if (y < 0) { y = 0 }

                    zoomLens.style.top = `${y}px`
                    zoomLens.style.left = `${x}px`

                })

                document.querySelector('body').insertAdjacentElement('beforeend', zoomContainer)
            })

        }
    })

    if (typeof (vanillaZoom) == 'undefined') {
        window.vanillaZoom = defineLibrary();
    } else {
        console.log('library already defined.')
    }
})(window)