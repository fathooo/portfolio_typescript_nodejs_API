import { DiaryEntry, NewDiaryEntry, NonSensitive, Weather, Visibility } from '../types'

import diaryData from './diariesJson.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesNonSensitive = (): NonSensitive[] => {
  return diaries.map(({ id, date, weather, visibility, temperature }) => ({
    id,
    date,
    weather,
    visibility,
    temperature
  }))
}

export const findById = (id: number): NonSensitive | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...nonSensitive } = entry
    return nonSensitive
  }
  return undefined
}

export const addDiary = (date: string, weather: Weather, visibility: Visibility, temperature: number, comment: string): NewDiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    date,
    weather,
    visibility,
    temperature,
    comment
  }
  diaries.push(newDiaryEntry)
  return newDiaryEntry
}
