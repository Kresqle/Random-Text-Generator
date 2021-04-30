const generateButton = document.getElementById('generateButton')
const output = document.getElementById('output')
const trainSubject = document.getElementById('trainSubject')
const trainVerb = document.getElementById('trainVerb')
const trainComplement = document.getElementById('trainComplement')
const trainButton = document.getElementById('trainButton')

var array = {subject: [], verb: [], complement: []}

function train () {
  var split = (trainSubject.value).split(';')
  for (i = 0; i < split.length; i++) {
    array.subject.push(split[i])
  }
  
  var split = (trainVerb.value).split(';')
  for (i = 0; i < split.length; i++) {
    array.verb.push(split[i])
  }
  
  var split = (trainComplement.value).split(';')
  for (i = 0; i < split.length; i++) {
    array.complement.push(split[i])
  }

  console.log(array)
}

function generate () {
  var text = ''
  for (i = 0; i < 3; i++) {
    if (i == 0) {
      var rand = Math.floor(Math.random() * array.subject.length)
      text = text.concat('' + array.subject[rand])
    } else if (i == 1) {
      var rand = Math.floor(Math.random() * array.verb.length)
      text = text.concat(' ' + array.verb[rand])
    } else if (i == 2) {
      var rand = Math.floor(Math.random() * array.complement.length)
      text = text.concat(' ' + array.complement[rand])
    }
  }

  output.innerText = text
}

generateButton.addEventListener('click', button => {
  generate()
})

trainButton.addEventListener('click', button => {
  train()
})
