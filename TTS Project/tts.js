const textarea = document.querySelector('#text')
let voicelist = document.querySelector('#voice')
let speechbtn = document.querySelector('.submit')

let synth = speechSynthesis
let isSpeaking = true

function voicespeech() {
    for (let voice of synth.getVoices()) {
        let option = document.createElement('option')
        option.text = voice.name
        voicelist.addEventListener(option)
        console.log(option)
    }
}
synth.addEventListener('voicechanged',voicespeech)

function texttospeech(text) {
    let utternance 	= new SpeechSynthesisUtterance(text)
    for(let voice of synth.getVoices()) {
        if (voice.name 	=== voicelist.value) {
            utternance.voice = voice
        }
    }
    speechSynthesis.speak(utternance)
}

speechbtn.addEventListener('click' , (e) => {
    e.preventDefault()
    if (textarea.value != '') {
        if (!synth.speaking) {
            texttospeech(textarea.value)
        }
        if (textarea.value.length > 80) {
            if (isSpeaking) {
                isSpeaking = false
                speechbtn.innerHTML = 'Pause Speech'
            } else {
                synth.pause()
                isSpeaking = true
                speechbtn.innerHTML = 'Resume Speech'
            }
            setInterval(() => {
                if (!synth.speaking && !isSpeaking) {
                    isSpeaking = true
                    speechbtn.innerHTML = 'Convert To Speech'
                }
            })
        } else {
            speechbtn.innerHTML = 'Convert To Speech'
        }
    }
})