const request = require("request");
const cheerio = require("cheerio");
const issue = require("./issues");

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

    for(let i = 0; i<8; i++){
        let relativeLinkOfRep = selecTool(anchorElemOfRepoArr[i]).attr("href");
        let fullLinkOfRep = "https://github.com" +relativeLinkOfRep +"/issues";
        //console.log(fullLinkOfRep);
        issue.isuues(fullLinkOfRep);
    }
}

module.exports = {
    gt : getTopics
}