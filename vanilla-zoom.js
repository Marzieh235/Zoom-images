(function (window) {
    let defineLibrary = () => ({
        init: function (galleryId) {
            let container = document.querySelector(galleryId);

            if (!container) {
                console.error('please add the correct element');
                return;
            }




            let firstImage = container.querySelector('.small-preview');
            let zoomImage = container.querySelector('.zoomed-image');


            if (!zoomImage) {
                console.error('please add a .zoomed-image tag');
                return;
            }

            if (!firstImage) {
                console.error('please add images with .small-preview class to your gallery');
                return;
            }

            zoomImage.style.backgroundImage = `url(${firstImage.src})`


            container.addEventListener('click', function (e) {
                let elem = e.target;

                if (elem.classList.contains('small-preview')) {
                    zoomImage.style.backgroundImage = `url(${elem.src})`

                }

            })

        }
    })

    if (typeof (vanillaZoom) == 'undefined') {
        window.vanillaZoom = defineLibrary();
    } else {
        console.log('Library already defined.')
    }

})(window)