// Code your orbitCircumference function here:
let orbitCircumference = function(altitude = 2000) {
  return Math.round(2 * Math.PI * altitude)
}

// Code your missionDuration function here:
let missionDuration = function(orbitsCompleted, radius = 2000, speed = 28000) {
  let time = 0
  time = orbitCircumference(radius) / speed

  return Math.round((time * orbitsCompleted) * 100) / 100
}

console.log(`The mission will travel ${orbitCircumference() * 5} km around the planet, and it will take ${missionDuration(5)} hours to complete.`)

// Copy/paste your selectRandomEntry function here:
let selectRandomEntry = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}


// Code your oxygenExpended function here:
let oxygenExpended = function(candidate, alt, speed) {
  let time = missionDuration(3, alt, speed);
  let oxygen = Math.round(candidate.o2Used(time) * 1000) / 1000

  return `${candidate.name} will perform the spacewalk, which will last ${time} hours and require ${oxygen} kg of oxygen.`
}



// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 
 console.log(oxygenExpended(selectRandomEntry(crew)))