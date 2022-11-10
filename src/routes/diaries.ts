import express from 'express'
import * as diaries from '../services/diaries'
import { toNewDiaryEntry } from '../config/diariesValidators'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaries.getEntries())
})

router.get('/:id', (req, res) => {
  const diary = diaries.findById(Number(req.params.id))
  if (diary != null) {
    res.send(diary)
  } else {
    res.sendStatus(404)
  }
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaries.addDiary(newDiaryEntry.date, newDiaryEntry.weather, newDiaryEntry.visibility, newDiaryEntry.temperature, newDiaryEntry.comment)
    res.json(addedDiaryEntry)
  } catch (e) {
    console.log(e)
    res.status(400).send(e)
  }
})

export default router
