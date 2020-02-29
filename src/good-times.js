import sketch from "sketch";
import util from "util";
import * as datetimeUtils from "./datetime-utils";

const { DataSupplier } = sketch;
const document = sketch.getSelectedDocument();
var UI = require("sketch/ui");
const timePeriods = {
  Seconds: 7000,
  Minutes: 47000,
  Hours: 3031000,
  Days: 129416000,
  Week: 600213000
};

const mode = {
  past: 1,
  future: -1
};

export function onStartup() {
  DataSupplier.registerDataSupplier(
    "public.text",
    "Past_Date and Time",
    "SupplyPastDateAndTime"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Past_Date and Time - ISO",
    "SupplyPastDateAndTimeISO"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Past_Date and Time - UTC",
    "SupplyPastDateAndTimeUTC"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Past_Date",
    "SupplyPastDate"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Past_Time",
    "SupplyPastTime"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Past_Time With Seconds",
    "SupplyPastTimeWithSeconds"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Future_Date and Time",
    "SupplyFutureDateAndTime"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Future_Date and Time - ISO",
    "SupplyFutureDateAndTimeISO"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Future_Date and Time - UTC",
    "SupplyFutureDateAndTimeUTC"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Future_Date",
    "SupplyFutureDate"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Future_Time",
    "SupplyFutureTime"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Future_Time With Seconds",
    "SupplyFutureTimeWithSeconds"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Kalender(de)_Monate lang",
    "SupplyKalenderMonthsLong"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Kalender(de)_Monate kurz",
    "SupplyKalenderMonthsShort"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Kalender(de)_Wochentage lang",
    "SupplyKalenderWeekdaysLong"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Kalender(de)_Wochentage kurz",
    "SupplyKalenderWeekdaysShort"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Kalender(de)_Tage aktueller Monat",
    "SupplyKalenderDaysCurrentMonth"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Kalender(de)_Kalenderblatt aktuelle Woche",
    "SupplyKalenderSheetCurrentWeek"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Kalender(de)_Kalenderplatt aktueller Monat",
    "SupplyKalenderSheetCurrentMonth"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Calendar(en)_Months long",
    "SupplyCalendarMonthsLong"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Calendar(en)_Months short",
    "SupplyCalendarMonthsShort"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Calendar(en)_Weekdays long",
    "SupplyCalendarWeekdaysLong"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Calendar(en)_Weekdays short",
    "SupplyCalendarWeekdaysShort"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Calendar(en)_Days current month",
    "SupplyCalendarDaysCurrentMonth"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Calendar(en)_Calendar Sheet Week",
    "SupplyCalendarSheetCurrentWeek"
  );
  DataSupplier.registerDataSupplier(
    "public.text",
    "Calendar(en)_Calendar Sheet Month",
    "SupplyCalendarSheetCurrentMonth"
  );
}

export function onShutdown() {
  // Deregister the plugin
  DataSupplier.deregisterDataSuppliers();
}

/*************************************/
// Random PAST Date and Time Functions
/*************************************/

export function onSupplyPastDateAndTimeISO(context) {
  supplyDataDialog(context, datetimeUtils.createDateAndTimeISO, mode.past);
}

export function onSupplyPastDateAndTimeUTC(context) {
  supplyDataDialog(context, datetimeUtils.createDateAndTimeUTC, mode.past);
}

export function onSupplyPastDateAndTime(context) {
  supplyDataDialog(context, datetimeUtils.createDateAndTime, mode.past);
}

export function onSupplyPastDate(context) {
  supplyDataDialog(context, datetimeUtils.createDateAndTime, mode.past);
}

export function onSupplyPastTime(context) {
  supplyDataDialog(context, datetimeUtils.createTime, mode.past);
}

export function onSupplyPastTimeWithSeconds(context) {
  supplyDataDialog(context, datetimeUtils.createTimeWithSeconds, mode.past);
}

/*************************************/
// Random PAST Date and Time Functions
/*************************************/

export function onSupplyFutureDateAndTimeISO(context) {
  supplyDataDialog(context, datetimeUtils.createDateAndTimeISO, mode.future);
}

export function onSupplyFutureDateAndTimeUTC(context) {
  supplyDataDialog(context, datetimeUtils.createDateAndTimeUTC, mode.future);
}

export function onSupplyFutureDateAndTime(context) {
  supplyDataDialog(context, datetimeUtils.createDateAndTime, mode.future);
}

export function onSupplyFutureDate(context) {
  supplyDataDialog(context, datetimeUtils.createDateAndTime, mode.future);
}

export function onSupplyFutureTime(context) {
  supplyDataDialog(context, datetimeUtils.createTime, mode.future);
}

export function onSupplyFutureTimeWithSeconds(context) {
  supplyDataDialog(context, datetimeUtils.createTimeWithSeconds, mode.future);
}

/*************************************/
// Kalender Functions - deutsch
/*************************************/

export function onSupplyKalenderMonthsLong(context) {
  supplyData(context, datetimeUtils.createMonthsDElong, mode.future);
}

export function onSupplyKalenderMonthsShort(context) {
  supplyData(context, datetimeUtils.createMonthsDEshort, mode.future);
}

export function onSupplyKalenderWeekdaysLong(context) {
  supplyData(context, datetimeUtils.createWeekdaysDElong, mode.future);
}

export function onSupplyKalenderWeekdaysShort(context) {
  supplyData(context, datetimeUtils.createWeekdaysDEshort, mode.future);
}

export function onSupplyKalenderDaysCurrentMonth(context) {
  supplyData(context, datetimeUtils.createDays, mode.future);
}
export function onSupplyKalenderSheetCurrentWeek() {
  supplyData(context, datetimeUtils.createKalenderSheetWeek, mode.future);
}

export function onSupplyKalenderSheetCurrentMonth() {
  supplyData(context, datetimeUtils.createKalenderSheetMonth, mode.future);
}
/*************************************/
// Calendar Functions - english
/*************************************/

export function onSupplyCalendarMonthsLong(context) {
  supplyData(context, datetimeUtils.createMonthsENlong, mode.future);
}

export function onSupplyCalendarMonthsShort(context) {
  supplyData(context, datetimeUtils.createMonthsENshort, mode.future);
}

export function onSupplyCalendarWeekdaysLong(context) {
  supplyData(context, datetimeUtils.createWeekdaysENlong, mode.future);
}

export function onSupplyCalendarWeekdaysShort(context) {
  supplyData(context, datetimeUtils.createWeekdaysENshort, mode.future);
}

export function onSupplyCalendarDaysCurrentMonth(context) {
  supplyData(context, datetimeUtils.createDays, mode.future);
}

export function onSupplyCalendarSheetCurrentWeek() {
  supplyData(context, datetimeUtils.createCalendarSheetWeek, mode.future);
}

export function onSupplyCalendarSheetCurrentMonth() {
  supplyData(context, datetimeUtils.createCalendarSheetMonth, mode.future);
}

/*************************************/
// Lets Supply Some Data!
/*************************************/

const supplyDataDialog = (context, dataFunction, mode) => {
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
        supplyData(context, dataFunction, timePeriods[value] * mode);
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

  items.sort((a, b) => a.layer.frame.x - b.layer.frame.x);
  items.sort((a, b) => a.layer.frame.y - b.layer.frame.y);

  console.log("test", items);

  items.forEach((item, index) => {
    let data = dataFunction(index, value);
    DataSupplier.supplyDataAtIndex(dataKey, data, item.originalIndex);
  });
};
