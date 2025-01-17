"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetUrl = exports.isMobileViewport = exports.translate = exports.showEmptyRings = exports.getItemPageNames = exports.rings = exports.quadrants = exports.radarNameShort = exports.radarName = void 0;
exports.radarName = process.env.RADAR_NAME || 'subshell Technology Radar';
exports.radarNameShort = exports.radarName;
exports.quadrants = [
    'languages',
    'frameworks-and-libraries',
    'cloud',
    'tools',
    'paradigms-and-methods'
];
exports.rings = [
    'all',
    'established',
    'trial',
    'assess',
    'hold',
    'deprecated'
];
exports.getItemPageNames = (items) => items.map(item => `${item.quadrant}/${item.name}`);
exports.showEmptyRings = false;
const messages = {
    'languages': 'Languages',
    'frameworks-and-libraries': 'Frameworks and Libraries',
    'cloud': 'Cloud',
    'tools': 'Tools',
    'paradigms-and-methods': 'Paradigms and Methods'
};
exports.translate = (key) => (messages[key] || '-');
function isMobileViewport() {
    // return false for server side rendering
    if (typeof window == 'undefined')
        return false;
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width < 1200;
}
exports.isMobileViewport = isMobileViewport;
function assetUrl(file) {
    return process.env.PUBLIC_URL + '/' + file;
    // return `/techradar/assets/${file}`
}
exports.assetUrl = assetUrl;
