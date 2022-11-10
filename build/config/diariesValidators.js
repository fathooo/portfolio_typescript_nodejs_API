"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewDiaryEntry = exports.isNumber = exports.isString = void 0;
const types_1 = require("../types");
const isString = (string) => {
    return typeof string === 'string';
};
exports.isString = isString;
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param);
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const isNumber = (param) => {
    return typeof param === 'number';
};
exports.isNumber = isNumber;
const parseComment = (commentFromRequest) => {
    if (!(0, exports.isString)(commentFromRequest)) {
        throw new Error('Incorrect or missing comment: $commentFromRequest');
    }
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!(0, exports.isString)(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date: $dateFromRequest');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!(0, exports.isString)(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather: $weatherFromRequest');
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!(0, exports.isString)(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility: $visibilityFromRequest');
    }
    return visibilityFromRequest;
};
const parseTemperature = (temperatureFromRequest) => {
    if (!(0, exports.isNumber)(temperatureFromRequest)) {
        throw new Error('Incorrect or missing temperature: $temperatureFromRequest');
    }
    return temperatureFromRequest;
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        temperature: parseTemperature(object.temperature)
    };
    return newEntry;
};
exports.toNewDiaryEntry = toNewDiaryEntry;
