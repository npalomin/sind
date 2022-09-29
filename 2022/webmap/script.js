mapboxgl.accessToken = 'pk.eyJ1Ijoid2FzaGluZ3RvbnBvc3QiLCJhIjoibWJkTGx1SSJ9.6cMdwgs-AYrRtQsEkXlHqg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 15,
        center: [-71.97722138410576, -13.517379300798098]
    });

    map.on('load', function() {
        // add source and layer for museums
        map.addSource('museums', {
            type: 'vector',
            url: 'mapbox://mapbox.2opop9hr'
        });
        map.addLayer({
            'id': 'Layer 1',
            'type': 'circle',
            'source': 'museums',
            'layout': {
                // make layer invisible by default
                'visibility': 'none'
            },
            'paint': {
                'circle-radius': 8,
                'circle-color': 'rgba(55,148,179,1)'
            },
            'source-layer': 'museum-cusco'
        });

        // add source and layer for contours
        map.addSource('contours', {
            type: 'geojson',
            data: 'https://raw.githubusercontent.com/npalomin/public/master/trt1.geojson'
        });
        map.addLayer({
            'id': 'Layer 2',
            'type': 'line',
            'source': 'contours',
            'layout': {
                // make layer invisible by default
                'visibility': 'none',
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#877b59',
                'line-width': 5
            }
        });
        map.addLayer({
            'id': 'Layer 3',
            'type': 'line',
            'source': 'contours',
            'source-layer': 'contour',
            'layout': {
                // make layer invisible by default
                'visibility': 'none',
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': 'yellow',
                'line-width': 2
            }
        });
        
        
    });
    
    

    // enumerate ids of the layers
    var toggleableLayerIds = ['Layer 1', 'Layer 2', 'Layer 3'];

    // set up the corresponding toggle button for each layer
    for (var i = 0; i < toggleableLayerIds.length; i++) {
        var id = toggleableLayerIds[i];

        var link = document.createElement('a');
        link.href = '#';
        link.className = '';
        link.textContent = id;

        link.onclick = function(e) {
            var clickedLayer = this.textContent;
            e.preventDefault();
            e.stopPropagation(); 
            for (var j = 0; j < toggleableLayerIds.length; j++) {
                if (clickedLayer === toggleableLayerIds[j]) {
                	layers.children[j].className = 'active';
                	map.setLayoutProperty(toggleableLayerIds[j], 'visibility', 'visible');
                }
                else {
                	layers.children[j].className = '';
                	map.setLayoutProperty(toggleableLayerIds[j], 'visibility', 'none');
                }
            }
        };

        var layers = document.getElementById('menu');
        layers.appendChild(link);
        
        
    }