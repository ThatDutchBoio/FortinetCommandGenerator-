(async function (){
    const prompt = require("prompt-async")
    //const Users = require("./UsersJson.json")
    const fs = require('fs');
    
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
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
    let {key} = await prompt.get(["key"])

    const headers = {
        "Authorization": `Bearer ${key}`,
        "Accept": "application/json"
    }
    let fRes = await fetch("https://IPhere/api/v2/monitor/user/fortitoken?vdom=root", {
        method: "GET",
        headers: headers

    })

    let body = await fRes.json()

    let {command} = await prompt.get(["command"])
    // If no argument specified, set to default.
    command = (command)? command :  "set username-sensitivity disable"
    
    let res = ``
    for (i in body.results){
        if (body.results[i].user) {
            res += `
            config user local
            edit ${body.results[i].user}
            ${command}
            end
            `
        }
    }
    
    //console.log(res) 
    fs.writeFileSync('output.txt', res, 'utf8');

})()
