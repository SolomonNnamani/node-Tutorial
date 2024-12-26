//fs module
//Heading:sychronous or blocking

//readFileSync is for displaying whatever content that lies within the file. examples are below
const {readFileSync,writeFileSync} = require('fs')
console.log("start")
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
//console.log(first, second)

//writeFileSync is for creation of a new file,adding content to it as well. Example
writeFileSync(
/*     folder   new-file            text content inside file               doubles the content          */
    './content/result-sync.txt', `Here is the result: ${first}, ${second}`,{flag: 'a'}
)
//If the file is not in existence beefore, node will create one. like the one above.
//But if exist. node overrides previous content with new content
console.log("done with the task")
console.log("starting the next one")
//BEST APPROACH FOR SINGLE USER AND CAN NOT FUNCTION FOR MUTIPLE. LEADS TO CRASH