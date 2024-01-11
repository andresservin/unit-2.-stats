const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];

myInstruments.push("tuba");
myInstruments.push("basson");
myInstruments.splice(2,1);
myInstruments.unshift("saxophone");

function getFirstInstruments(instruments){
    return instruments[0];
}

function getLastInstruments(instruments){
    return instruments[instruments.length - 1];
}

function getFirstandLastInstruments (instruments){
    const output =[]
    output.push(instruments[0]);
    output.push(in)
}