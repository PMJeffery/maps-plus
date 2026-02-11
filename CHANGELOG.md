Maps+ for Splunk Changelog
==========================

# 3.1.9 (2026-02-07) mjeffery@splunk.com
* Fixed "Format" menu not rendering in Splunk Enterprise 10.x
    - Corrected "(Continue)" to "Continue" in formatter.html for leaflet_maps and maps-plus folders
* Disabled Splunk Version check
* Updated all npm packages in respective /visualization/ directories
  * npm outdated  && npm update  && npm install 
* Tested maps_plus functionality in Splunk Enterprise 10.2 
    - "Format" menu renders and functions as before.
    - Not all functions were tested, but core visual features work.

# 3.0.0 (2019-05-09)
* Removed support for Splunk 6.x
* Added support for custom icons
* Added support for Icon only display
* Added support for Features (Polygon, Line or Point) using measure tool
    - Feature Definition displayed on measure completion
    - Draw features using feature Definition
* Added layerPriority field to stack vector layers (works with heatmaps, path lines, circle markers and features)
* Added layerDescription field to name layers in layer dialog (works with heatmaps, path lines, circle markers and features)
* Added layerIcon, layerIconSize, layerIconColor and layerIconPrefix to style groups in layer control
* Added pathLayer field to group paths
* Added Ant Path to visualize direction of path
* Dark Mode support
* Upgrade Leaflet to 1.5.1
* Upgrade leaflet.markercluster to 1.4.1
* Upgrade Font Awesome to v5.8.2 
* Upgrade Ionicons to v4.5.8
* Format menu changes now dynamically update map for 
    - Map Tile
    - Map Tile Override
    - Map Attribution Override
    - Scroll Wheel Zoom
    - Full Screen Mode
    - Context menu
    - Default Height
    - Map Zoom
    - Center lat
    - Center lon
    - Min Zoom
    - Max Zoom
    - Disable Clustering at Zoom
    - Cluster colors
    - Measure tool active and completed colors
    - Measure tool position