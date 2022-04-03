let url = "https://github.com/topics";

const request = require("request");
const cheerio = require("cheerio");
const getTopics = require("./allTopics");
const fs = require("fs");
const path = require("path");

request(url,cb);

function cb (err, res, body){
    if(err){
        console.log(err);
    }
    else {
        handleHtml(body);
    }
}

let topicspath = path.join(__dirname, "Topic Name");
if(!fs.existsSync(topicspath)){
    fs.mkdirSync(topicspath);
}


function handleHtml(html){
    let selecTool = cheerio.load(html);
    let anchorElemArr = selecTool('a[class="no-underline d-flex flex-column flex-justify-center"]');
    //console.log(anchorElemArr.text());

    for(let i =0; i<anchorElemArr.length; i++){
        //console.log(selecTool(anchorElemArr[i]).text());
        //console.log(selecTool(anchorElemArr[i]).attr("href"));
        let relativeLink = selecTool(anchorElemArr[i]).attr("href");
        //let techName = relativeLink.split("/");
        //console.log(techName[2]);
        let fullLink = "https://github.com" + relativeLink;
        //console.log("From Main.js "+fullLink);
        
        getTopics.gt(fullLink);
        //break;
    }
}