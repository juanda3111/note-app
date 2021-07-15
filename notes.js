
const { execFile } = require('child_process')
const file = require('fs')
const { title } = require('process')

//const exec = ('child_process').exec
//console.log('test1')

const filenames= file.readdirSync('./');

console.log('archivos que estan aca: ')
let paraImprimir = ''
filenames.forEach((file) => {
    //console.log("File: ", file);
    
    if(paraImprimir ==''){
        paraImprimir = file
    } else{
        paraImprimir = paraImprimir + ', ' + file
    }
        
});
console.log(paraImprimir)

/**
const { exec } = require("child_process");
exec("dir ", (error, data, getter) => {
	if(error){
		console.log("error",error.message);
		return;
	}
	if(getter){
		console.log("data",data);
		return;
	}
	console.log("data",data);

});*/

const getNotes = function (){
    return 'your notes....'
}

const addNote = function (title , body){
const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    if(duplicateNotes.length === 0){
    notes.push({
        title: title,
        body: body
    })
        //console.log(notes)
        saveNotes(notes)
        console.log('New note added!')
        
    } else{
    console.log('Note title taken')
   

    
    }

}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    file.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function (){
    try {
    const dataBuffer = file.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    } 
    catch(e) {
        return []
    }

}

module.exports = {
    getNotes:getNotes,
    addNote: addNote
}

//module.exports = getNotes