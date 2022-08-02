import * as Tone from 'tone'
import {keysInOrder} from "./constants"


export function addEventListners( keyBoardLayout){
    const allkeySynth = {}
    const {notes, keys} = keyBoardLayout

    notes.forEach((key)=> {
        allkeySynth[key] = {synth: makeSynth(), pressed: false}
      })
  
            
  notes.forEach((note, noteIndex)=>{
  const noteElem = document.getElementById(note)

  const keySynth = allkeySynth[note]
  noteElem.addEventListener("mousedown", (e)=> {
    handleNote(e, note, "mousedown", keySynth, noteElem)
  })
  
  noteElem.addEventListener("mouseup", (e)=> {
    handleNote(e, note, "mouseup", keySynth, noteElem)
  })
  noteElem.addEventListener("mouseover", (e)=> {
    handleNote(e, note, "mouseup", keySynth, noteElem)
  })

window.addEventListener("keydown", (key)=> {
if(key.key == keys[noteIndex]){
    handleNote(key, note, "mousedown", keySynth, noteElem)
}
})
window.addEventListener("keyup", (key)=> {
if(key.key == keys[noteIndex]){
    handleNote(key, note, "mouseup", keySynth, noteElem)
}
})


            })
            
   
}


function handleNote(e, note, eventType, audioSynth, noteElem) {
    const synth = audioSynth.synth
const now = Tone.now()

if(e.type.includes("down") && !audioSynth.pressed){
    audioSynth.pressed = true
 noteElem.classList.add("pressed")
synth.triggerAttack(note, now)
} else if (e.type.includes("up") || e.type.includes("over")) {
 noteElem.classList.remove("pressed")

    audioSynth.pressed = false
    synth.releaseAll(now)
}

}
function makeSynth(){

  const sampler = new Tone.Sampler({
			urls: {
				A0: "A0.mp3",
				C1: "C1.mp3",
				"D#1": "Ds1.mp3",
				"F#1": "Fs1.mp3",
				A1: "A1.mp3",
				C2: "C2.mp3",
				"D#2": "Ds2.mp3",
				"F#2": "Fs2.mp3",
				A2: "A2.mp3",
				C3: "C3.mp3",
				"D#3": "Ds3.mp3",
				"F#3": "Fs3.mp3",
				A3: "A3.mp3",
				C4: "C4.mp3",
				"D#4": "Ds4.mp3",
				"F#4": "Fs4.mp3",
				A4: "A4.mp3",
				C5: "C5.mp3",
				"D#5": "Ds5.mp3",
				"F#5": "Fs5.mp3",
				A5: "A5.mp3",
				C6: "C6.mp3",
				"D#6": "Ds6.mp3",
				"F#6": "Fs6.mp3",
				A6: "A6.mp3",
				C7: "C7.mp3",
				"D#7": "Ds7.mp3",
				"F#7": "Fs7.mp3",
				A7: "A7.mp3",
				C8: "C8.mp3"
			},
			release: 1,
			baseUrl: "https://tonejs.github.io/audio/salamander/"
		}).toDestination();

    return sampler
}
export function makePianoNotes(){
    const letters = [ "C", "D", "E", "A", "B",]
    const flats = ["C", "D", "E"]
    const rounds = 14;
    const allNotes = []

    for(let i = 0;i<rounds; i++){
        letters.forEach(letter=> {
            const note = `${letter}${i}`
            if(flats.includes(letter) ) allNotes.push(`${letter}#${i}`)
            allNotes.push(note)
        })
    }
    return allNotes
}

export const getKeyboardLayout = (notesStartIndex, notesStopIndex, keyStartIndex, keyStopIndex)=> {
const allNotes = makePianoNotes()
    return {notes: allNotes.slice(notesStartIndex, notesStopIndex), keys: keysInOrder.slice(keyStartIndex, keyStopIndex)}

}

