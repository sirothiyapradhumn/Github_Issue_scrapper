const request = require("request");
const cheerio = require("cheerio");
const issue = require("./issues");
const fs = require("fs");
const path = require("path");

function getTopics(url){
    request(url,cb);
}


function cb (err, res, body){
    if(err){
        console.log(err);
    }
    else {
        extractTopics(body);
    }
}

function extractTopics(html){
    let selecTool = cheerio.load(html);
    let anchorElemOfRepoArr = selecTool('a[class="text-bold wb-break-word"]');
    let headerElem = selecTool('h1[class="h1"]');
    let techName = headerElem.text().trim();
    //console.log("tech--- "+techName);
    for(let i = 0; i<8; i++){
        let relativeLinkOfRep = selecTool(anchorElemOfRepoArr[i]).attr("href");
        
        
        let fullLinkOfRep = "https://github.com" +relativeLinkOfRep +"/issues";
        let repo = fullLinkOfRep.split("/")[4];
        //console.log("repo ----- "+repo);
        console.log(fullLinkOfRep);
        issue.isuues(fullLinkOfRep, techName, repo);
        
        //break;
    }

}

module.exports = {
    gt : getTopics
}