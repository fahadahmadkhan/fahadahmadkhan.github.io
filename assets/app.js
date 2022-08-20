////////// Animate Effect

var wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 0,
  mobile: false,
  live: true,
  scrollContainer: null,
});
wow.init();

////////// Extra Hide/Show

$(document).ready(function () {
  $("input[type=checkbox]").click(function () {
    $(".extra").toggle();
  });

  ////////// Add to Cart

  $(".add-cart-btn").on("click", function () {
    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      html: " Your Bowl has been added to the cart. <br> Proceed to Checkout?",
      confirmButtonText: '<a href="../pages/cart.html">Go to Cart</a>',
      confirmButtonColor: "#ee8d31",
      footer: '<a href="../index.html">Back to Home</a>',
      allowOutsideClick: false,
    });
  });

  ////////// Add to Cart - Cart

  $(".add-cart-btn2").on("click", function () {
    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      html: " Your Bowl has been added to the cart. <br> Proceed to Checkout?",
      confirmButtonText: '<a href="../pages/cart.html">Back to Cart</a>',
      confirmButtonColor: "#ee8d31",
      footer: '<a href="../index.html">Go to Home</a>',
      allowOutsideClick: false,
    });
  });

  ////////// Update Cart

  $(".update-order-btn").on("click", function () {
    Swal.fire({
      icon: "info",
      title: "Bowl Updated!",
      html: " Your Bowl has been updated. <br> Proceed to Checkout?",
      confirmButtonText: '<a href="../pages/cart.html">Back to Cart</a>',
      confirmButtonColor: "#ee8d31",
      allowOutsideClick: false,
    });
  });

  ////////// CheckOut

  $(".checkout-btn").on("click", function () {
    Swal.fire({
      icon: "success",
      title: "Thanks for your order!",
      html: " We are building your healthy bowl. It will be delivered in about 30 mins.",
      confirmButtonText: '<a href="../index.html">Go to Home</a>',
      confirmButtonColor: "#ee8d31",
      allowOutsideClick: false,
    });
  });

  ////////// Remove from Cart

  $(".remove-item").on("click", function () {
    Swal.fire({
      icon: "question",
      title: "Are you sure?",
      html: "This item will be removed from the cart.",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      cancelButtonColor: "#7c7c7c",
      confirmButtonText: "Remove",
      confirmButtonColor: "#ee8d31",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "info",
          title: "Item has been removed!",
          confirmButtonText: "Back to Cart",
          confirmButtonColor: "#ee8d31",
        });
      }
      // closeOnClickOutside: false,
      // closeOnEsc: false,
      // allowOutsideClick: false,
    });
  });

  ////////// Testimonial

  $("#testimonial-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });

  ////////// Header on Scroll

  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      document.getElementById("header-fixed").style.display = "block";
    } else {
      document.getElementById("header-fixed").style.display = "none";
    }
  }

  ////////// Quantity

  $("#minus").on("click", function (e) {
    let val = parseInt($("#quantity-val").val());
    if (val > 1) {
      $("#quantity-val").val(val - 1);
    }
  });

  $("#plus").on("click", function (e) {
    let val = parseInt($("#quantity-val").val());
    if (val < 3) {
      $("#quantity-val").val(val + 1);
    }
  });
});
