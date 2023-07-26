L.Control.Watermark = L.Control.extend({
  onAdd: function (map) {
    var container = L.DomUtil.create("input");
    container.type = "button";
    container.title = "center";
    container.value = "center";

    container.onclick = function () {
      console.log("buttonClicked");
      center = !center;
      if (center) {
        container.style.backgroundColor = "blue";
        container.style.color = "white";
      } else {
        container.style.backgroundColor = "white";
        container.style.color = "black";
      }
    };

    return container;
  },

  onRemove: function (map) {
    // Nothing to do here
  },
});

L.control.watermark = function (opts) {
  return new L.Control.Watermark(opts);
};

L.control.watermark({ position: "bottomleft" }).addTo(map);
