import sketch from "sketch";
import util from "util";
import * as datetimeUtils from "./datetime-utils";

const { DataSupplier } = sketch;
const document = sketch.getSelectedDocument();
var UI = require("sketch/ui");
const timePeriods = {
  "Seconds ago": 7000,
  "Minutes ago": 47000,
  "Hours ago": 3031000,
  "Days ago": 80203000,
  "Week ago": 600213000
};

const descreteTimePeriods = {
  "day": 86400000
};

export function onStartup() {
  DataSupplier.registerDataSupplier(
    "public.text",
    "Date and Time",
    "SupplyDateAndTime"
  );

  DataSupplier.registerDataSupplier(
    "public.text",
    "Date and Time - ISO",
    "SupplyDateAndTimeISO"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Date and Time - UTC",
    "SupplyDateAndTimeUTC"
  );
  DataSupplier.registerDataSupplier("public.text", "Time", "SupplyTime");
  DataSupplier.registerDataSupplier(
    "public.text",
    "Time With Seconds",
    "SupplyTimeWithSeconds"
  );
  DataSupplier.registerDataSupplier(
      "public.text",
      "Weekdays",
      "SupplyWeekdays"
  );
}

export function onShutdown() {
  // Deregister the plugin
  DataSupplier.deregisterDataSuppliers();
}

export function onSupplyDateAndTimeISO(context) {
  supplyDataDialog(context, datetimeUtils.createDateAndTimeISO);
}

export function onSupplyDateAndTimeUTC(context) {
  supplyDataDialog(context, datetimeUtils.createDateAndTimeUTC);
}

export function onSupplyDateAndTime(context) {
  supplyDataDialog(context, datetimeUtils.createDateAndTime);
}

export function onSupplyTime(context) {
  supplyDataDialog(context, datetimeUtils.createTime);
}

export function onSupplyTimeWithSeconds(context) {
  supplyDataDialog(context, datetimeUtils.createTimeWithSeconds);
}

export function onSupplyWeekdays(context) {
  supplyData(context, datetimeUtils.createWeekdays, descreteTimePeriods.day);
}

const supplyDataDialog = (context, dataFunction) => {
  UI.getInputFromUser(
    "Please specify how far apart the time data should roughly be.",
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
        supplyData(context, dataFunction, timePeriods[value]);
      }
    }
  );
};

const supplyData = (context, dataFunction, value) => {
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

  console.log("test", items);

  items.forEach((item, index) => {
    let data = dataFunction(value, index);
    DataSupplier.supplyDataAtIndex(dataKey, data, item.originalIndex);
  });
};
