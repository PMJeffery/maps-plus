# Maps+ for Splunk Changelog

==========================

## 4.0.0 (2026-02-07)

### Big fixes: formatter.html
* Fixed "Format" menu not rendering in Splunk Enterprise 10.x
  * Parsing issues with labels that included parentheses "()" in the name
    * Example: "Map (Continue)" would cause the "Format" menu to not render. 
  * Replaced parentheses with dash
    * Example: "Map (Continue)" -> "Map - Continue"
    * Replaced all instances in all formatter.html files
* Removed Stamen Map instances due to 404 errors with existing URLs.

### Updates
* Updated all npm packages to latest versions


### What does not work
* Because of folder name change, "leaflet_map_app" -> "maps_plus", existing Maps+ visualizations will not work.
  * See README.md on how to fix.
* Not all functions have been tested such as Google and Bing Map API features.