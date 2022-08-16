window.onload = function () {
  window.addEventListener("scroll", (e) => {
    console.log(window.screenY);
  });

  lax.init();
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  lax.addElements(".logo", {
    scrollY: {
      scale: [
        [0, 80],
        [1, 3],
      ],
      opacity: [
        [0, 70],
        [1, 0],
      ],
      translateY: [
        [0, 80],
        [0, 200],
      ],
    },
  });

  lax.addElements(".ultron", {
    scrollY: {
      // scale: [
      //   [0, 80],
      //   [1, 3],
      // ],
      opacity: [
        [0, 80],
        [0, 1],
      ],
      translateY: [
        [0, 400],
        [0, 80],
      ],
    },
  });

  lax.addElements(".loki", {
    scrollY: {
      // scale: [
      //   [0, 80],
      //   [1, 3],
      // ],
      opacity: [
        [40, 120],
        [0, 1],
      ],
      translateY: [
        [0, 400],
        [0, -80],
      ],
    },
  });

  lax.addElements(".thanos", {
    scrollY: {
      // scale: [
      //   [0, 80],
      //   [1, 3],
      // ],
      opacity: [
        [80, 160],
        [0, 1],
      ],
      translateY: [
        [0, 400],
        [0, 80],
      ],
    },
  });

  lax.addElements(".scroll-tip", {
    scrollY: {
      // scale: [
      //   [0, 80],
      //   [1, 3],
      // ],
      opacity: [
        [0, 600],
        [1, 0],
      ],
      translateY: [
        [0, 800],
        [-200, 0],
      ],
      "letter-spacing": [
        [0, 600],
        [0, 150],
        {
          cssUnit: "px",
        },
      ],
    },
  });

  lax.addElements(".ironman-title", {
    scrollY: {
      filter: [
        [600, 700, 800, 900, 1000, 1100, 1200],
        [0, 50, 0, 50, 0, 50, 0],
        {
          cssFn: function (value) {
            return `drop-shadow(0 0 ${value}px yellow)`;
          },
        },
      ],
      translateY: [
        [1200, 1700],
        [200, "elCenterY"],
      ],
    },
  });
};
