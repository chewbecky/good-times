import sketch from "sketch";
import util from "util";
import BrowserWindow from "sketch-module-web-view";
import { getWebview } from 'sketch-module-web-view/remote'

const { DataSupplier } = sketch;
const document = sketch.getSelectedDocument();
var UI = require("sketch/ui");
const timePeriods = {
  "Week in Future": 604800,
  "Days in Future": -86400,
  "Hours in Future": -3600,
  "Minutes in Future": -60,
  "Seconds in Future": 5,
  "Seconds ago": 5,
  "Minutes ago": 60,
  "Hours ago": 3600,
  "Days ago": 86400,
  "Week ago": 604800
};

const webviewIdentifier = "{{ slug }}.webview";

export function onStartup() {
  // To register the plugin, uncomment the relevant type:
  DataSupplier.registerDataSupplier("public.text", "GoodTimes", "SupplyData");
  // DataSupplier.registerDataSupplier('public.image', 'GoodTimes', 'SupplyData')
}

export function onShutdown() {
  // Deregister the plugin
  DataSupplier.deregisterDataSuppliers();
  const existingWebview = getWebview(webviewIdentifier);
  if (existingWebview) {
    existingWebview.close();
  }
}
export function onSupplyData(context) {

    console.log("test");

  /* UI.getInputFromUser(
    "Please specify the desired period of time",
    {
      type: UI.INPUT_TYPE.selection,
      possibleValues: Object.keys(timePeriods)
    },
    (err, value) => {
      if (err) {
        // most likely the user canceled the input
        return;
      }
      if (value) {
        let dataKey = context.data.key;
        const originalDataItems = util
            .toArray(context.data.items)
            .map(sketch.fromNative);
        const selection = document.selectedLayers.layers;
        let items = [];

        originalDataItems.forEach((odi, index) => {
          let item = {};
          item.layer = selection[index];
          item.originalIndex = index;
          items.push(item);
        });

        console.log(items, selection);

        items.sort((a, b) => a.layer.frame.y - b.layer.frame.y);

        console.log(items);

        items.forEach((item, index) => {
          let data = new Date(Date.now() - (index * timePeriods[value]*1000)).toLocaleString();
          DataSupplier.supplyDataAtIndex(dataKey, data, item.originalIndex);
        });
      }
    }
  );*/
}

export default function () {
    console.log("test");

  const options = {
    identifier: webviewIdentifier,
    width: 800,
    height: 600,
    show: false
  };

  const browserWindow = new BrowserWindow(options);

  // only show the window when the page has loaded to avoid a white flash
  browserWindow.once("ready-to-show", () => {
    browserWindow.show();
  });

  const webContents = browserWindow.webContents;

  // print a message when the page loads
  webContents.on("did-finish-load", () => {
    UI.message("UI loaded!");
  });

  // add a handler for a call from web content's javascript
  webContents.on("nativeLog", s => {
    UI.message(s);
    webContents
        .executeJavaScript(`setRandomNumber(${Math.random()})`)
        .catch(console.error);
  });

  browserWindow.loadURL(require("../resources/webview.html"));

}


