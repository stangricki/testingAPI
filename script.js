var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var phrase = [Jack, Philip]

var grammar = '#JSGF V1.0; grammar colors; public <phrase> = ' + phrase.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var button = document.querySelector('button');
var div = document.querySelector('div');
var phraseHTML= '';
phrase.forEach(function(v, i, a){
  console.log(v, i);
  phraseHTML += 'Udało się';
});

document.button.onclick = function() {
  recognition.start();
  console.log('Ready to receive a phrase command.');
}

recognition.onresult = function(event) {
  var last = event.results.length - 1;
  var phrase = event.results[last][0].transcript;
  diagnostic.textContent = 'Result received: ' + phrase + '.';
  div.innerHTML = phrase;
  console.log('Confidence: ' + event.results[0][0].confidence);
}