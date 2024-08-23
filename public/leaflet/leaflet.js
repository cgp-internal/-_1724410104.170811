// Leaflet.js library for interactive mapping.

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' ? define(['exports'], factory) :
  (factory((global.L = {})));
}(this, function (exports) {
  'use strict';

  // Constants
  var version = '1.7.1';

  // Leaflet class
  function Leaflet(map) {
    this.map = map;
  }

  Leaflet.prototype = {
    initialize: function() {
      this.map._leaflet_id = Leaflet.version;
    },

    addLayer: function(layer) {
      this.map.addLayer(layer);
    },

    removeLayer: function(layer) {
      this.map.removeLayer(layer);
    }
  };

  // Leaflet layer class
  function Layer(options) {
    this.options = options;
  }

  Layer.prototype = {
    onAdd: function(map) {
      this._map = map;
    },

    onRemove: function(map) {
      this._map = null;
    }
  };

  // Leaflet marker class
  function Marker(latlng, options) {
    this._latlng = latlng;
    this.options = options;
  }

  Marker.prototype = {
    setLatLng: function(latlng) {
      this._latlng = latlng;
    },

    getLatLng: function() {
      return this._latlng;
    }
  };

  // Export Leaflet
  exports.Leaflet = Leaflet;
  exports.Layer = Layer;
  exports.Marker = Marker;
  exports.version = version;
}));