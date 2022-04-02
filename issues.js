const request = require("request");
const cheerio = require("cheerio");

function getIssues(url){
    request(url,cb);
}

function cb (err, res, body){
    if(err){
        console.log(err);
    }
    else {
        extractTopicsIssues(body);
    }
}

function extractTopicsIssues(html){
    let selecTool = cheerio.load(html);
    let anchorElemArrOfIssues = selecTool('a[class="Link--primary v-align-middle no-underline h4 js-navigation-open markdown-title"]');

    for(let i = 0; i<5; i++){
        let relativeLinkOfIssue = selecTool(anchorElemArrOfIssues[i]).attr("href");
    }
}

module.exports = {
    isuues : getIssues
}