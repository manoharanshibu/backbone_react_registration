import { jsdom } from 'jsdom'

let exposedProperties = ['window', 'navigator', 'document'];

//
// Dom
//
global.document = jsdom('<html><body><div id="scrollbar-measure"></div><section id="body-content"></section><aside id="modal-content"></aside></body></html>', { // eslint-disable-line max-len
    url: 'https://sportsbook-demo.amelco.co.uk'
})
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});
global.navigator = {
    userAgent: 'node.js'
};
global.window.navigator = global.navigator
global.window.WebSocket = () => {}
