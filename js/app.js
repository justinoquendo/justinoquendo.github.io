//PRELOADER
var loader = document.getElementById("loader");

window.addEventListener("load", function () {
  loader.style.height = "100px";
  loader.style.width = "100px";
  loader.style.borderRadius = "50%";
  loader.style.visibility = "hidden";
});

//BIG SCREEN EFFECT ON SCROLL
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("white");
    $("#logoBig").css("display", "block");
    $(".links").css("display", "inline");
  } else {
    $("nav").removeClass("white");
    $("#logoBig").css("display", "none");
    $(".links").css("display", "none");
  }
});

//HIDDEN MENU EFFECT
$(document).ready(function () {
  $(".menu h4").click(function () {
    $("nav ul").toggleClass("active");
  });
});

//SMOOTH SCROLL
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
        return false;
      }
    }
  });
});

//SCROLL ANIMATION
window.sr = ScrollReveal();
sr.reveal(".navbar", {
  duration: 2000,
  origin: "bottom",
});
sr.reveal(".showcase-left", {
  duration: 2000,
  origin: "top",
  distance: "300px",
});
sr.reveal(".showcase-right", {
  duration: 2000,
  origin: "right",
  distance: "300px",
});
sr.reveal(".showcase-btn", {
  duration: 2000,
  delay: 1000,
  origin: "bottom",
});
sr.reveal("#testimonial div", {
  duration: 2000,
  origin: "bottom",
});
sr.reveal(".info-left", {
  duration: 2000,
  origin: "left",
  distance: "300px",
  viewFactor: 0.2,
});
sr.reveal(".info-right", {
  duration: 2000,
  origin: "right",
  distance: "300px",
  viewFactor: 0.2,
});

//PARTICLE EFFECT
particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "image",
        stroke: {
          width: 0,
          color: "#ffffff",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/music-player.png",
          width: 5,
          height: 5,
          color: "#ffffff",
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 0.1,
          opacity_min: 0.6,
          sync: false,
        },
      },
      size: {
        value: 20,
        random: true,
        anim: {
          enable: false,
          speed: 20,
          size_min: 5,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  }
);

//TYPING EFFECT
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

//MAP FUNCTIONALITY
var attribution = new ol.control.Attribution({
  collapsible: false,
});

var map = new ol.Map({
  controls: ol.control.defaults({ attribution: false }).extend([attribution]),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  target: "map",
  view: new ol.View({
    center: ol.proj.fromLonLat([-74.818342, 40.2016686]),
    maxZoom: 18,
    zoom: 16,
  }),
});

var layer = new ol.layer.Vector({
  source: new ol.source.Vector({
    features: [
      new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat([-74.818342, 40.2016686])
        ),
      }),
    ],
  }),
});
map.addLayer(layer);

var container = document.getElementById("popup");
var content = document.getElementById("popup-content");
var closer = document.getElementById("popup-closer");

var overlay = new ol.Overlay({
  element: container,
  autoPan: true,
  autoPanAnimation: {
    duration: 250,
  },
});
map.addOverlay(overlay);

closer.onclick = function () {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};

map.on("singleclick", function (event) {
  if (map.hasFeatureAtPixel(event.pixel) === true) {
    var coordinate = event.coordinate;

    content.innerHTML = "<b>Justin's Studio!</b>";
    overlay.setPosition(coordinate);
  } else {
    overlay.setPosition(undefined);
    closer.blur();
  }
});
