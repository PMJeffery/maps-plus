# Maps++ for Splunk

## Based on Maps+ for Splunk by Scott Haskell [Code hosted at Github](https://github.com/sghaskell/maps-plus)


# DO NOT USE FOR PRODUCTION - TEMPORARY FIX!!

## * WILL BREAK EXISTING MAPS+ VIZ, BUT CAN BE FIXED (SEE BELOW)
## * DOES NOT WORK IN DASHBOARD STUDIO AT ALL

## Temporary staging for Internal Splunk/Cisco use.
* This is not a final version of Maps+, but a temporary place to host the project while more permanent fixes are implemented and tested.
* Use this repo at your own risk

# How to use

## Prerequisites
* Backup/Download "leaflet_map_app" (Maps+) from Splunk Cloud/Enterprise
* Disable/Delete/Remove "leaflet_map_app" from Splunk Cloud/Enterprise
* Splunk Cloud - request stack restart
* Splunk Enterprise - Restart splunkd service via CLI or Web UI

* Download ZIP file and install like any other Splunk App.

## Fix Existing Maps+ Visualizations
* Due to changing the name of the folder from "leaflet_map_app" to "maps_plus" existing Maps+ viz will not render.
* CLONE existing dashboards with Maps+ visualizations
  * Open Classic Dashboard and View Source
    * CTRL+H "leaflet_maps_app.maps-plus", replace with "maps_plus.maps-plus"