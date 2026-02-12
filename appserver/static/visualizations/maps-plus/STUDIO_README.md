# Maps+ for Splunk - Dashboard Studio Configuration

Splunk Dashboard Studio does not support the graphical format menu used in Classic XML dashboards. Instead, you must configure the visualization by editing the dashboard's source JSON or using the Configuration panel (if available for custom options).

## How to Configure

1.  Select the **Maps+** visualization in your Dashboard Studio canvas.
2.  Look for a **Configuration** or **Options** section in the right sidebar.
3.  If specific options are missing from the UI, you can add them directly to the source.
    *   Click the **Source** button (code icon) to view the dashboard JSON.
    *   Locate the `options` block within your visualization's definition.
    *   Add the desired property keys and values.

## Configuration Options

Here is a list of available configuration options. You can use the short name (e.g., `cluster`) instead of the full namespace (e.g., `display.visualizations.custom.maps++.maps-plus.cluster`).

### Map Fundamentals
| Option | Description | Default | Values |
| :--- | :--- | :--- | :--- |
| `mapTile` | Base map tile provider URL | Open Streetmap | URL string |
| `mapTileOverride` | Custom map tile URL (overrides default) | None | URL string |
| `mapAttributionOverride` | Custom map attribution text | None | String |
| `renderer` | Rendering engine | `svg` | `svg`, `canvas` |
| `scrollWheelZoom` | Enable zooming with mouse wheel | `1` | `0` (Disabled), `1` (Enabled) |
| `fullScreen` | Enable full screen mode | `0` | `0`, `1` |
| `defaultHeight` | Initial map height (pixels) | `600` | Integer |
| `mapCenterZoom` | Initial zoom level | `6` | Integer (1-18) |
| `mapCenterLat` | Initial center latitude | `39.50` | Float |
| `mapCenterLon` | Initial center longitude | `-98.35` | Float |
| `minZoom` | Minimum zoom level | `1` | Integer |
| `maxZoom` | Maximum zoom level | `19` | Integer |

### Clustering
| Option | Description | Default | Values |
| :--- | :--- | :--- | :--- |
| `cluster` | Enable marker clustering | `1` | `0`, `1` |
| `allPopups` | Show all popups on load (requires clustering disabled) | `0` | `0`, `1` |
| `multiplePopups` | Allow multiple open popups | `0` | `0`, `1` |
| `animate` | Animate cluster separation | `1` | `0`, `1` |
| `singleMarkerMode` | Style single markers as clusters | `0` | `0`, `1` |
| `disableClusteringAtZoom` | Disable clustering at specific zoom | `0` | `0`, `1` |
| `disableClusteringAtZoomLevel`| Zoom level to disable clustering | None | Integer |
| `maxClusterRadius` | Max pixel radius for a cluster | `80` | Integer |

### Markers & Tooltips
| Option | Description | Default | Values |
| :--- | :--- | :--- | :--- |
| `permanentTooltip` | Always show tooltips | `0` | `0`, `1` |
| `stickyTooltip` | Tooltip follows mouse | `1` | `0`, `1` |

### Heatmap
| Option | Description | Default | Values |
| :--- | :--- | :--- | :--- |
| `heatmapEnable` | Enable heatmap layer | `0` | `0`, `1` |
| `heatmapOnly` | Show only heatmap (hide markers) | `0` | `0`, `1` |
| `heatmapMinOpacity` | Minimum opacity | `1.0` | Float (0.0 - 1.0) |
| `heatmapRadius` | Point radius | `25` | Integer |
| `heatmapBlur` | Blur amount | `15` | Integer |
| `heatmapColorGradient` | Color gradient definition | `{"0.4":"blue",...}` | JSON String |

### Path Lines
| Option | Description | Default | Values |
| :--- | :--- | :--- | :--- |
| `showPathLines` | Draw lines between points | `0` | `0`, `1` |
| `pathIdentifier` | Field to group paths by | None | String |
| `pathColorList` | List of colors for paths | `#0003F0,...` | CSV String |
| `pathSplits` | Split path based on time gap | `0` | `0`, `1` |
| `pathSplitInterval` | Time gap in seconds to split path | `60` | Integer |

### Interactions
| Option | Description | Default | Values |
| :--- | :--- | :--- | :--- |
| `drilldown` | Enable drilldown on markers | `0` | `0`, `1` |
| `drilldownAction` | Mouse event for drilldown | `dblclick` | `click`, `dblclick` |
| `contextMenu` | Enable right-click context menu | `1` | `0`, `1` |
| `layerControl` | Show layer control widget | `1` | `0`, `1` |
| `layerControlCollapsed` | Collapse layer control by default | `1` | `0`, `1` |

### Advanced / Third-Party
| Option | Description | Default | Values |
| :--- | :--- | :--- | :--- |
| `googlePlacesSearch` | Enable Google Places search | `0` | `0`, `1` |
| `bingMaps` | Enable Bing Maps base layer | `0` | `0`, `1` |
| `bingMapsTileLayer` | Bing Maps imagery set | `CanvasLight` | String |
| `kmlOverlay` | List of KML/KMZ files to overlay | None | CSV String |
| `measureTool` | Enable measurement tool | `1` | `0`, `1` |

### Cluster Colors
| Option | Description | Default |
| :--- | :--- | :--- |
| `rangeOneBgColor` | Background color for small clusters | `#B5E28C` |
| `rangeOneFgColor` | Text color for small clusters | `#6ECC39` |
| `warningThreshold` | Count threshold/limit for medium clusters | `55` |
| `rangeTwoBgColor` | Background for medium clusters | `#F1D357` |
| `rangeTwoFgColor` | Text color for medium clusters | `#F0C20C` |
| `criticalThreshold` | Count threshold/limit for large clusters | `80` |
| `rangeThreeBgColor` | Background for large clusters | `#FD9C73` |
| `rangeThreeFgColor` | Text color for large clusters | `#F18017` |
