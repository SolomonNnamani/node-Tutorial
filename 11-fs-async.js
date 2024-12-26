//fs module
//Heading:asychronous or non-blocking

//readFile is for displaying whatever content that lies within the file. examples are below
const {readFile,writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err)
        return
        
    }
    const first = result

    readFile('./content/second.txt','utf8',(err,result) => {
        if(err){
            return
            console.log(err)
        }
        const second = result
        writeFile(
            "./content/result-asyc.txt",
             `Here is the result: ${first}, ${second}`,
             (err, result) => {
                if(err){
                    return
                    console.log(err)
                }
                console.log(result)
       } )
    })

})

//BEST APPROACH FOR MUTIPLE USERS AND OVERALL BETTER THAN SYNC