// Imports
import { $, $$ } from './helpers.js';
import { router, geocoder } from './here.js';
import { center } from '../../src/config.js';
import { calculateIsoline, marker } from '../../src/app.js';
import HourFilter from './HourFilter.js';
import MapRotation from './MapRotation.js';
import Search from './Search.js';

// Map initialization
const platform = new H.service.Platform({ apikey: hereCredentials.apikey });
const defaultLayers = platform.createDefaultLayers();
const map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
    center,
    zoom: 12,
    pixelRatio: window.devicePixelRatio || 1
});
const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
const provider = map.getBaseLayer().getProvider();

// Initialize router and geocoder
const router = platform.getRoutingService();
const geocoder = platform.getGeocodingService();

window.addEventListener('resize', () => map.getViewPort().resize());

// Marker setup
let polygon;
const marker = new H.map.Marker(center, { volatility: true });
marker.draggable = true;
map.addObject(marker);

// Event listeners for marker movement
map.addEventListener('dragstart', evt => {
    if (evt.target instanceof H.map.Marker) behavior.disable();
}, false);
map.addEventListener('dragend', evt => {
    if (evt.target instanceof H.map.Marker) {
        behavior.enable();
        calculateIsoline();
    }
}, false);
map.addEventListener('drag', evt => {
    const pointer = evt.currentPointer;
    if (evt.target instanceof H.map.Marker) {
        evt.target.setGeometry(map.screenToGeo(pointer.viewportX, pointer.viewportY));
    }
}, false);

// Manage initial state
$('#slider-val').innerText = formatRangeLabel($('#range').value, 'time');
$('#date-value').value = toDateInputFormat(new Date());

// Event listeners
$$('.isoline-controls').forEach(c => c.onchange = () => calculateIsoline());
$$('.view-controls').forEach(c => c.onchange = () => calculateView());

// Tab control for sidebar
const tabs = $$('.tab');
tabs.forEach(t => t.onclick = tabify);
function tabify(evt) {
    tabs.forEach(t => t.classList.remove('tab-active'));
    if (evt.target.id === 'tab-1') {
        $('.tab-bar').style.transform = 'translateX(0)';
        evt.target.classList.add('tab-active');
        $('#content-group-1').style.transform = 'translateX(0)';
        $('#content-group-2').style.transform = 'translateX(100%)';
    } else {
        $('.tab-bar').style.transform = 'translateX(100%)';
        evt.target.classList.add('tab-active');
        $('#content-group-1').style.transform = 'translateX(-100%)';
        $('#content-group-2').style.transform = 'translateX(0)';
    }
}

// Theme control
const themeTiles = $$('.theme-tile');
themeTiles.forEach(t => t.onclick = tabifyThemes);
function tabifyThemes(evt) {
    themeTiles.forEach(t => t.classList.remove('theme-tile-active'));
    evt.target.classList.add('theme-tile-active');
    if (evt.target.id === 'day') {
        const style = new H.map.Style('https://js.api.here.com/v3/3.1/styles/omv/normal.day.yaml')
        provider.setStyle(style);
    } else {
        const style = new H.map.Style('./resources/night.yaml');
        provider.setStyle(style);
    }
}

// Initialize components
const rotation = new MapRotation(map);
const hourFilter = new HourFilter();
new Search('Berlin, DEU');

// Export statements
export { calculateIsoline, marker, router, geocoder };
