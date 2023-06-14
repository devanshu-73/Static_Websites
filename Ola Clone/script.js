      // sec-5 -> jQuery to toggle image containers
      $(document).ready(function () {
        $('.image-container:first').addClass('active');
    });

    function toggleImages(itemIndex) {
        $('.image-container').removeClass('active');
        $('.image-container').eq(itemIndex).addClass('active');
    }