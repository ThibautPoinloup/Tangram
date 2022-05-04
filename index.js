function toggleTheme(value) {
    const sheets = document.getElementsByTagName('link');
    sheets[0].href = value;
}


// Implement drag and drop for the image
$('.triangle1').on('mousedown', function(e) {
    var $this = $(this),
        $window = $(window),
        mouseX = e.pageX,
        mouseY = e.pageY,
        width = $this.outerWidth(),
        height = $this.outerHeight()
        elemX = $this.offset().left + width - mouseX,
        elemY = $this.offset().top + height - mouseY;

    e.preventDefault();
    $window.on('mousemove.drag', function(e2) {
        $this.offset({
            left: e2.pageX + elemX - width,
            top: e2.pageY + elemY - height
        });
    }).one('mouseup', function() {
        $window.off('mousemove.drag');
    });
});