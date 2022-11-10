export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export enum Visibility {
  Good = 'good',
  Average = 'average',
  Poor = 'poor'
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
  temperature: number
}

// export type NonSensitive = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type NonSensitive = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
