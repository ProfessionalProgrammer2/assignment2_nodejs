const fs = require("fs");

fs.readFile("second.json", "utf-8", (err, data)=>{
    if(err)
        {
            console.error("Error Occured.");
            return false;
        }
    const jsoncontent = JSON.parse(data);
    console.log(jsoncontent);
})