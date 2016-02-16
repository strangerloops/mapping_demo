$(function(){

  map = L.map('map');

  var layer = Tangram.leafletLayer({
    scene: 'https://raw.githubusercontent.com/tangrams/cinnabar-style/gh-pages/cinnabar-style.yaml',
    attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>'
  });

  layer.addTo(map);

  map.setView([40.693817467738924, -73.92976999282837], 11);

  var features = {};

  geojson = L.geoJson(features, {style: style}).addTo(map);

  function style(feature) {
    var color;
    return {
      fillColor: '#000000',
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }
});