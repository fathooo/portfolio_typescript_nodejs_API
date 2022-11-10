"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDiary = exports.findById = exports.getEntriesNonSensitive = exports.getEntries = void 0;
const diariesJson_json_1 = __importDefault(require("./diariesJson.json"));
const diaries = diariesJson_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const getEntriesNonSensitive = () => {
    return diaries.map(({ id, date, weather, visibility, temperature }) => ({
        id,
        date,
        weather,
        visibility,
        temperature
    }));
};
exports.getEntriesNonSensitive = getEntriesNonSensitive;
const findById = (id) => {
    const entry = diaries.find(d => d.id === id);
    if (entry != null) {
        const { comment } = entry, nonSensitive = __rest(entry, ["comment"]);
        return nonSensitive;
    }
    return undefined;
};
exports.findById = findById;
const addDiary = (date, weather, visibility, temperature, comment) => {
    const newDiaryEntry = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        date,
        weather,
        visibility,
        temperature,
        comment
    };
    diaries.push(newDiaryEntry);
    return newDiaryEntry;
};
exports.addDiary = addDiary;
