//  Generated on 2014-06-30 using generator-angular-fullstack 1.4.3
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    sourceFolder: 'source',
    distFolder: 'build',

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= distFolder %>',            
          ]
        }]
      },
      server: '<%= distFolder %>'
    },

    //concat source files
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          // '<%= sourceFolder %>/js/animation/**/*.js',
          'libs/json2.min.js',

        // CORE
          '<%= sourceFolder %>/js/core/VCO.js',
          '<%= sourceFolder %>/js/core/VCO.Util.js',
          '<%= sourceFolder %>/js/data/VCO.Data.js',
          '<%= sourceFolder %>/js/core/VCO.Class.js',
          '<%= sourceFolder %>/js/core/VCO.Events.js',
          '<%= sourceFolder %>/js/core/VCO.Browser.js',
          '<%= sourceFolder %>/js/core/VCO.Load.js',

        // LANGUAGE
          '<%= sourceFolder %>/js/language/VCO.Language.js',

        // ANIMATION
          '<%= sourceFolder %>/js/animation/VCO.Ease.js',
          '<%= sourceFolder %>/js/animation/VCO.Animate.js',

        // DOM
          '<%= sourceFolder %>/js/dom/VCO.Point.js',
          '<%= sourceFolder %>/js/dom/VCO.DomMixins.js',
          '<%= sourceFolder %>/js/dom/VCO.Dom.js',
          '<%= sourceFolder %>/js/dom/VCO.DomUtil.js',
          '<%= sourceFolder %>/js/dom/VCO.DomEvent.js',

        // UI
          '<%= sourceFolder %>/js/ui/VCO.Draggable.js',
          '<%= sourceFolder %>/js/ui/VCO.Swipable.js',
          '<%= sourceFolder %>/js/ui/VCO.MenuBar.js',
          '<%= sourceFolder %>/js/ui/VCO.Message.js',

        // MEDIA
          '<%= sourceFolder %>/js/media/VCO.MediaType.js',
          '<%= sourceFolder %>/js/media/VCO.Media.js',

        // MEDIA TYPES
          '<%= sourceFolder %>/js/media/types/VCO.Media.Blockquote.js',
          '<%= sourceFolder %>/js/media/types/VCO.Media.Flickr.js',
          '<%= sourceFolder %>/js/media/types/VCO.Media.Instagram.js',
          '<%= sourceFolder %>/js/media/types/VCO.Media.Profile.js',
          '<%= sourceFolder %>/js/media/types/VCO.Media.GoogleDoc.js',
          '<%= sourceFolder %>/js/media/types/VCO.Media.GooglePlus.js',
          '<%= sourceFolder %>/js/media/types/VCO.Media.IFrame.js',
          '<%= sourceFolder %>/js/media/types/VCO.Media.Image.js',
          '<%= sourceFolder %>/js/media/types/VCO.Media.SoundCloud.js',
          '<%= sourceFolder %>/js/media/types/VCO.Media.Storify.js',
          '<%= sourceFolder %>/js/media/types/VCO.Media.Text.js',
          '<%= sourceFolder %>/js/media/types/VCO.Media.Twitter.js',
          '<%= sourceFolder %>/js/media/types/VCO.Media.Vimeo.js',
          '<%= sourceFolder %>/js/media/types/VCO.Media.DailyMotion.js',
          '<%= sourceFolder %>/js/media/types/VCO.Media.Vine.js',
          '<%= sourceFolder %>/js/media/types/VCO.Media.Website.js',
          '<%= sourceFolder %>/js/media/types/VCO.Media.Wikipedia.js',
          '<%= sourceFolder %>/js/media/types/VCO.Media.YouTube.js',
          '<%= sourceFolder %>/js/media/types/VCO.Media.Slider.js',

        // STORYSLIDER
          '<%= sourceFolder %>/js/slider/VCO.Slide.js',
          '<%= sourceFolder %>/js/slider/VCO.SlideNav.js',
          '<%= sourceFolder %>/js/slider/VCO.StorySlider.js',

        // LEAFLET
          
          // LEAFLET SRC
            // Leaflet Core
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/Leaflet.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/core/Util.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/core/Class.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/core/Events.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/core/Browser.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/geometry/Point.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/geometry/Bounds.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/geometry/Transformation.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/dom/DomUtil.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/geo/LatLng.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/geo/LatLngBounds.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/geo/projection/Projection.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/geo/projection/Projection.SphericalMercator.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/geo/projection/Projection.LonLat.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/geo/crs/CRS.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/geo/crs/CRS.Simple.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/geo/crs/CRS.EPSG3857.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/geo/crs/CRS.EPSG4326.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/map/Map.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/dom/DomEvent.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/dom/Draggable.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/core/Handler.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/control/Control.js',

            // Additonal Projections EPSG:3395 projection (used by some map providers).
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/geo/projection/Projection.Mercator.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/geo/crs/CRS.EPSG3395.js',

            // TileLayerWMS WMS tile layer.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/tile/TileLayer.js',

            // TileLayerCanvas Tile layer made from canvases (for custom drawing purposes)
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/tile/TileLayer.Canvas.js',

            // ImageOverlay Used to display an image over a particular rectangular area of the map.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/ImageOverlay.js',

            // Marker Markers to put on the map.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/marker/Icon.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/marker/Icon.Default.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/marker/Marker.js',

            // DivIcon Lightweight div-based icon for markers.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/marker/DivIcon.js',

            // Popup Used to display the map popup (used mostly for binding HTML data to markers and paths on click).
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/Popup.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/marker/Marker.Popup.js',

            // LayerGroup Allows grouping several layers to handle them as one.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/LayerGroup.js',

            // FeatureGroup Extends LayerGroup with mouse events and bindPopup method shared between layers.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/FeatureGroup.js',

            // Path Vector rendering core (SVG-powered), enables overlaying the map with SVG paths.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/vector/Path.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/vector/Path.SVG.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/vector/Path.Popup.js',

            // PathVML VML fallback for vector rendering core (IE 6-8)
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/vector/Path.VML.js',

            // Path Canvas fallback for vector rendering core (makes it work on Android 2+)
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/vector/canvas/Path.Canvas.js',

            // Polyline Polyline overlays.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/geometry/LineUtil.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/vector/Polyline.js',

            // Polygon Polygon overlays
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/geometry/PolyUtil.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/vector/Polygon.js',

            // MultiPoly MultiPolygon and MultyPolyline layers.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/vector/MultiPoly.js',

            // Rectangle
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/vector/Rectangle.js',

            // Circle
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/vector/Circle.js',

            // CircleMarker
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/vector/CircleMarker.js',

            // VectorsCanvas Canvas fallback for vector layers (polygons, polylines, circles, circlemarkers)
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/vector/canvas/Polyline.Canvas.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/vector/canvas/Polygon.Canvas.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/vector/canvas/Circle.Canvas.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/vector/canvas/CircleMarker.Canvas.js',

            // GeoJSON GeoJSON layer, parses the data and adds corresponding layers above.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/GeoJSON.js',

            // MapDrag Makes the map draggable (by mouse or touch).
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/map/handler/Map.Drag.js',

            // MouseZoom Scroll wheel zoom and double click zoom on the map.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/map/handler/Map.DoubleClickZoom.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/map/handler/Map.ScrollWheelZoom.js',

            // TouchZoom Enables smooth touch zoom / tap / longhold / doubletap on iOS, IE10, Android
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/dom/DomEvent.DoubleTap.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/dom/DomEvent.Pointer.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/map/handler/Map.TouchZoom.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/map/handler/Map.Tap.js',

            // BoxZoom Enables zooming to bounding box by shift-dragging the map.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/map/handler/Map.BoxZoom.js',

            // Keyboard Enables keyboard pan/zoom when the map is focused.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/map/handler/Map.Keyboard.js',

            // ControlZoom Basic zoom control with two buttons (zoom in / zoom out).
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/control/Control.Zoom.js',

            // ControlAttrib Attribution control.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/control/Control.Attribution.js',

            // ControlScale Scale control.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/control/Control.Scale.js',

            // ControlLayers Layer Switcher control.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/control/Control.Layers.js',

            // AnimationPan Core panning animation support.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/dom/PosAnimation.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/map/anim/Map.PanAnimation.js',

            // AnimationTimer Timer-based pan animation fallback for browsers that don\'t support CSS3 transitions.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/dom/PosAnimation.Timer.js',

            // AnimationZoom Smooth zooming animation. Works only on browsers that support CSS3 Transitions.
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/map/anim/Map.ZoomAnimation.js',
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/layer/tile/TileLayer.Anim.js',

            // Geolocation Adds Map#locate method and related events to make geolocation easier.'
              '<%= sourceFolder %>/js/map/leaflet/leaflet-src/map/ext/Map.Geolocation.js',
          
        // LEAFLET EXTENTIONS
          '<%= sourceFolder %>/js/map/leaflet/extentions/VCO.Leaflet.TileLayer.Zoomify.js',
          '<%= sourceFolder %>/js/map/leaflet/extentions/VCO.Leaflet.MiniMap.js',
          
        // TILES
          '<%= sourceFolder %>/js/map/tile/VCO.TileLayer.Mapbox.js', 
          '<%= sourceFolder %>/js/map/tile/VCO.TileLayer.Stamen.js',
          
        // MAP
          '<%= sourceFolder %>/js/map/VCO.MapMarker.js',
          '<%= sourceFolder %>/js/map/VCO.Map.js',

        // LEAFLET IMPLIMENTATION
          '<%= sourceFolder %>/js/map/leaflet/VCO.MapMarker.Leaflet.js',
          '<%= sourceFolder %>/js/map/leaflet/VCO.Map.Leaflet.js',

        //MAIN
        '<%= sourceFolder %>/js/VCO.StoryMap.js',

        ],
        dest: '<%= distFolder %>/js/storymap.js',
      },
    },

    uglify: {
      js: {
        files: {
          '<%= distFolder %>/js/storymap-min.js': ['<%= distFolder %>/js/storymap.js']
        }
      }
    },

    copy: {
      css: {
        expand: true,
        cwd: '<%= sourceFolder %>/css',
        src: '**',
        dest: '<%= distFolder %>/css'
      },
      gfx:{
        expand: true,
        cwd: '<%= sourceFolder %>/gfx',
        src: '**',
        dest: '<%= distFolder %>/gfx'
      },
      locale:{
        expand: true,
        cwd: '<%= sourceFolder %>/js/language/locale',
        src: '**',
        dest: '<%= distFolder %>/js/locale'
      }
    },

    less: {
      dist: {
        options: {
          paths: ["<%= sourceFolder %>/less"],
        },
        files: {
          '<%= distFolder %>/css/storymap.css': "<%= sourceFolder %>/less/VCO.StoryMap.less"
        }
      }
      // font:{
      //   options: {
      //     paths: ["<%= sourceFolder %>/less/fonts"],
      //   },
      //   files: {
      //     '<%= distFolder %>/css/fonts/*.css': "<%= sourceFolder %>/less/fonts/*.less"
      //   }
      // }
    }
  });

  grunt.registerTask('build', [
    'clean:dist',
    'concat:dist',
    'uglify:js',
    'less:dist',
    'copy:css',
    'copy:gfx',
    'copy:locale'
  ]);

  grunt.registerTask('default', [
    'build'    
  ]);
};
