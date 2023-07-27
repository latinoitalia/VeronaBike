var layerGroup = L.layerGroup();

function addEv7() {
  var ev7Icon = L.divIcon({
    className: "bl-div-icon",
    html: "EV7",
    iconSize: [35, 20],
  });
  var ev7a = L.marker([45.28, 10.73], { icon: ev7Icon })
    .addTo(map)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "eurovelo-7.html";
    });
  var ev7b = L.marker([45.38, 10.7], { icon: ev7Icon })
    .addTo(map)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "eurovelo-7.html";
    });
  var ev7c = L.marker([45.45, 10.695], { icon: ev7Icon })
    .addTo(map)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "eurovelo-7.html";
    });
  var ev7d = L.marker([45.55, 10.719], { icon: ev7Icon })
    .addTo(map)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "eurovelo-7.html";
    });

  var ev7e = L.marker([45.62, 10.857], { icon: ev7Icon })
    .addTo(map)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "eurovelo-7.html";
    });
  fetch("ev7.geojson")
    .then((res) => res.json())
    .then((data) => {
      // add GeoJSON layer to the map once the file is loaded
      L.geoJson(data, {
        style: function (feature) {
          return { color: "red", weight: 3, opacity: 1 };
        },
      })
        .addTo(map)
        .on("click", function (ev) {
          preventDefault();
          window.location.href = "eurovelo-7.html";
        });
    });
}

function addAida() {
  var aidaIcon = L.divIcon({
    className: "bl-div-icon",
    html: "AIDA",
    iconSize: [40, 20],
  });
  var aidaa = L.marker([45.45, 10.5515], { icon: aidaIcon })
    .addTo(map)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "aida.html";
    });
  var aidab = L.marker([45.412, 10.85], { icon: aidaIcon })
    .addTo(map)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "aida.html";
    });
  var aidac = L.marker([45.4, 11.125], { icon: aidaIcon })
    .addTo(map)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "aida.html";
    });

  var aidad = L.marker([45.53, 11.48], { icon: aidaIcon })
    .addTo(map)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "aida.html";
    });

  fetch("aida.geojson")
    .then((res) => res.json())
    .then((data) => {
      // add GeoJSON layer to the map once the file is loaded
      L.geoJson(data, {
        style: function (feature) {
          return { color: "red", weight: 3, opacity: 1 };
        },
      })
        .addTo(map)

        .on("click", function (ev) {
          preventDefault();
          window.location.href = "aida.html";
        });
    });
}

function addEv8() {
  var ev8Icon = L.divIcon({
    className: "bl-div-icon",
    html: "EV8",
    iconSize: [35, 20],
  });
  var ev8 = L.marker([45.0515, 11.2], { icon: ev8Icon })
    .addTo(map)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "destrapo.html";
    });
  fetch("destrapo.geojson")
    .then((res) => res.json())
    .then((data) => {
      // add GeoJSON layer to the map once the file is loaded
      L.geoJson(data, {
        style: function (feature) {
          return { color: "red", weight: 3, opacity: 1 };
        },
      })
        .addTo(map)

        .on("click", function (ev) {
          preventDefault();
          window.location.href = "destrapo.html";
        });
    });
}

function addI1() {
  var i1Icon = L.divIcon({
    className: "bl-div-icon",
    html: "I1",
    iconSize: [20, 20],
  });
  L.marker([45.469, 10.9], { icon: i1Icon })
    .addTo(map)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "regione-veneto-i1.html";
    });

  L.marker([45.55, 10.81915], { icon: i1Icon })
    .addTo(map)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "regione-veneto-i1.html";
    });

  var i2Icon = L.divIcon({
    className: "bl-div-icon",
    html: "I2",
    iconSize: [20, 20],
  });
  L.marker([45.477, 11.48], { icon: i2Icon })
    .addTo(map)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "regione-veneto-i1.html";
    });
  L.marker([45.4215, 11.2], { icon: i2Icon })
    .addTo(map)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "regione-veneto-i1.html";
    });
  fetch("i1.geojson")
    .then((res) => res.json())
    .then((data) => {
      // add GeoJSON layer to the map once the file is loaded
      L.geoJson(data, {
        style: function (feature) {
          return { color: "darkmagenta", weight: 3, opacity: 1 };
        },
      })
        .addTo(map)

        .on("click", function (ev) {
          preventDefault();
          window.location.href = "regione-veneto-i1.html";
        });
    });
}

function addCludiaAugusta(show) {
  var ccalg = L.featureGroup();
  var ccaIcon = L.divIcon({
    className: "bl-div-icon",
    html: "Claudia Augusta",
    iconSize: [100, 20],
  });
  var claudia = L.marker([45.18, 11.0611], { icon: ccaIcon })
    .addTo(ccalg)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "ciclovia-claudia-augusta.html";
    });
  fetch("cca.geojson")
    .then((res) => res.json())
    .then((data) => {
      L.geoJson(data, {
        style: function (feature) {
          return { color: "blue", weight: 3, opacity: 1 };
        },
        pane: "local",
      })
        .addTo(ccalg)

        .on("click", function (ev) {
          preventDefault();
          window.location.href = "ciclovia-claudia-augusta.html";
        });
    });

  layerGroup.addLayer(ccalg);
  if (show) {
    map.addLayer(layerGroup);
  }
}

function addCdr(show) {
  var cdrlg = L.featureGroup();
  var cdrIcon = L.divIcon({
    className: "bl-div-icon",
    html: "CDR",
    iconSize: [33, 20],
  });
  var cdra = L.marker([45.35, 10.8], { icon: cdrIcon })
    .addTo(cdrlg)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "ciclovia-delle-risorgive.html";
    });

  var cdrb = L.marker([45.365, 11.06], { icon: cdrIcon })
    .addTo(cdrlg)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "ciclovia-delle-risorgive.html";
    });
  fetch("cdr.geojson")
    .then((res) => res.json())
    .then((data) => {
      // add GeoJSON layer to the map once the file is loaded
      L.geoJson(data, {
        style: function (feature) {
          return { color: "blue", weight: 3, opacity: 1 };
        },
        pane: "local",
      })
        .addTo(cdrlg)

        .on("click", function (ev) {
          preventDefault();
          window.location.href = "ciclovia-delle-risorgive.html";
        });
    });

  layerGroup.addLayer(cdrlg);
  if (show) {
    map.addLayer(layerGroup);
  }
}

function addAdige() {
  var adigeIcon = L.divIcon({
    className: "bl-div-icon",
    html: "Adige sud",
    iconSize: [65, 20],
  });
  var adige = L.marker([45.32, 11.265], { icon: adigeIcon })
    .addTo(map)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "verona-zevio-fiume-adige.html";
    });

  fetch("adigesud.geojson")
    .then((res) => res.json())
    .then((data) => {
      // add GeoJSON layer to the map once the file is loaded
      L.geoJson(data, {
        style: function (feature) {
          return { color: "darkmagenta", weight: 3, opacity: 1 };
        },
        pane: "local",
      })
        .addTo(map)
        .on("click", function (ev) {
          preventDefault();
          window.location.href = "verona-zevio-fiume-adige.html";
        });
    });
}

function addVeronaMantova() {
  var vrmnIcon = L.divIcon({
    className: "bl-div-icon",
    html: "Verona Mantova",
    iconSize: [100, 20],
  });
  var vrmn = L.marker([45.22, 10.817], { icon: vrmnIcon })
    .addTo(map)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "ciclovia-verona-mantova.html";
    });
  fetch("vrma.geojson")
    .then((res) => res.json())
    .then((data) => {
      // add GeoJSON layer to the map once the file is loaded
      L.geoJson(data, {
        style: function (feature) {
          return { color: "darkmagenta", weight: 3, opacity: 1 };
        },
        pane: "local",
      })
        .addTo(map)

        .on("click", function (ev) {
          preventDefault();
          window.location.href = "ciclovia-verona-mantova.html";
        });
    });
}

function addTerreDiCustoza(show) {
  var custoza = L.featureGroup();

  var vigneIcon = L.divIcon({
    className: "bl-div-icon",
    html: "vigne e parchi",
    iconSize: [85, 20],
  });
  var vigne = L.marker([45.474, 10.755], { icon: vigneIcon })
    .addTo(custoza)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "bike-tra-vigne-e-parchi-gabanel.html";
    });

  var blc29Icon = L.divIcon({
    className: "bl-div-icon",
    html: "29",
    iconSize: [25, 20],
  });
  var c29 = L.marker([45.42, 10.7565], { icon: blc29Icon })
    .addTo(custoza)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "Ciclabile-29-Terre-di-Custoza.html";
    });
  var c29a = L.marker([45.48, 10.8065], { icon: blc29Icon })
    .addTo(custoza)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "Ciclabile-29-Terre-di-Custoza.html";
    });

  var c35Icon = L.divIcon({
    className: "bl-div-icon",
    html: "35",
    iconSize: [25, 20],
  });
  var c35 = L.marker([45.44, 10.8365], { icon: c35Icon })
    .addTo(custoza)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "Ciclabile-35-Terre-di-Custoza.html";
    });

  var c30Icon = L.divIcon({
    className: "bl-div-icon",
    html: "30",
    iconSize: [25, 20],
  });
  var c30 = L.marker([45.44, 10.794], { icon: c30Icon })
    .addTo(custoza)
    .on("click", function (ev) {
      preventDefault();
      window.location.href = "Ciclabile-30-Terre-di-Custoza.html";
    });

  fetch("29.geojson")
    .then((res) => res.json())
    .then((data) => {
      // add GeoJSON layer to the map once the file is loaded
      L.geoJson(data, {
        style: function (feature) {
          return { color: "blue", weight: 3, opacity: 1 };
        },
        pane: "local",
      })
        .addTo(custoza)

        .on("click", function (ev) {
          preventDefault();
          window.location.href = "Ciclabile-29-Terre-di-Custoza.html";
        });
    });

  fetch("35.geojson")
    .then((res) => res.json())
    .then((data) => {
      // add GeoJSON layer to the map once the file is loaded
      L.geoJson(data, {
        style: function (feature) {
          return { color: "blue", weight: 3, opacity: 1 };
        },
        pane: "local",
      })
        .addTo(custoza)

        .on("click", function (ev) {
          preventDefault();
          window.location.href = "Ciclabile-35-Terre-di-Custoza.html";
        });
    });

  fetch("30.geojson")
    .then((res) => res.json())
    .then((data) => {
      // add GeoJSON layer to the map once the file is loaded
      L.geoJson(data, {
        style: function (feature) {
          return { color: "blue", weight: 3, opacity: 1 };
        },
        pane: "local",
      })
        .addTo(custoza)

        .on("click", function (ev) {
          preventDefault();
          window.location.href = "Ciclabile-30-Terre-di-Custoza.html";
        });
    });

  fetch("bussolengo-lago.geojson")
    .then((res) => res.json())
    .then((data) => {
      // add GeoJSON layer to the map once the file is loaded
      L.geoJson(data, {
        style: function (feature) {
          return { color: "blue", weight: 3, opacity: 1 };
        },
        pane: "local",
      })
        .addTo(custoza)

        .on("click", function (ev) {
          preventDefault();
          window.location.href = "bike-tra-vigne-e-parchi-gabanel.html";
        });
    });

  layerGroup.addLayer(custoza);
  if (show) {
    map.addLayer(layerGroup);
  }

  //map.removeLayer(layerGroup);
}

function layerZoom() {
  map.on("zoomend", function (e) {
    console.log(e.target._zoom);
    zoomlevel = e.target._zoom;

    if (map.getZoom() > 10) {
      console.log("maggiore di 10");
      map.addLayer(layerGroup);
    } else {
      map.removeLayer(layerGroup);
    }
  });
}
