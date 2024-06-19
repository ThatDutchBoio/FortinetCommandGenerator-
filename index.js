(async function (){
    const prompt = require("prompt-async")
    const Users = require("./UsersJson.json")
    
    console.log(`
        // Tom's awesome fortigate command thingy script thingy!!! \\
            
            Commands being run:
            config user local
            edit {Users[i].user}
            {command}
            end

            @params
            @command: string (Command to be run on user, Default: "set username-sensitivity disable")
        `)
    prompt.start()

    let {command} = await prompt.get(["command"])
    // If no argument specified, set to default.
    command = (command)? command :  "set username-sensitivity disable"
    
    let res = ``
    for (i in Users.results){
        if (Users.results[i].user) {
            res += `
            config user local
            edit ${Users.results[i].user}
            ${command}
            end
            `
        }
    }
    
    console.log(res) 

})()