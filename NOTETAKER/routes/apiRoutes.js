const fs = require('fs')
const path = require('path')
const notesData = require('../db/db.json')
const express = require('express')
const router = express.Router()

let notes = notesData
const addDb = () => {
    fs.writeFileSync(
        path.resolve(__dirname, "../db/db.json"), JSON.stringify(notes)
    )
}
router.get('/notes', (req, res) => {
    notes = notes.map((note, index) => ({ ...note, id: index }));
    res.json(notes)
    console.log(notes)
})

router.post('/notes', (req, res) => {
    notes.push(req.body)
    addDb(notes)
    res.json(notes)
    console.log(notes)
})

router.delete("/notes/:id", (req, res) => {
notes.splice(req.params.id, 1)
res.json(notes)
console.log(req.params.id)
})

module.exports = router