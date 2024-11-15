const draggableImages = document.querySelectorAll('.draggable-image');
const container = document.querySelector('.container');

draggableImages.forEach(image => {
    image.addEventListener('mousedown', (event) => {
        let shiftX = event.clientX - image.getBoundingClientRect().left;
        let shiftY = event.clientY - image.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            image.style.left = pageX - shiftX + 'px';
            image.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        image.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', onMouseMove);
        });

        image.ondragstart = function() {
            return false;
        };
    });
});
