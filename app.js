const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


//customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command:'add',
    describe: 'add a new quote',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
         body: {
             describe: 'Note body',
             demandOption: true,
             type:'string'
         }

    },
    handler: function(argv){
        //console.log('Title: ', argv.title)
        //console.log('Body: ', argv.body)
        notes.addNote(argv.title, argv.body )

    }
})

//Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler: function(){
        console.log('removing the note')
    }
})

// add , remove , read , list
/**
 * Challenge 5: (Argument parcing with Yargs p1) Add two new commands
 * 
 * 1. Setup command to support "list command (print placeholder message for now)"
 * 2. Setup command to support "read command (print placeholder message for now)"
 * 3. Test your work by running both commands and ensure correct output
 * 
 */

yargs.command({
    command:'list',
    describe: 'list messages',
    handler: function(){
        console.log('list the messages of the note')
    }
})

    yargs.command({
        command:'read',
        describe: 'read messages',
        handler: function(){
            console.log('read the messages of the note')
        }

})


console.log(yargs.argv)