const request = require("request");
const cheerio = require("cheerio");
const jspdf = require("jspdf");

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
    console.log("         -----------------------       ");
    for(let i = 0; i<5; i++){
        let relativeLinkOfIssue = selecTool(anchorElemArrOfIssues[i]).attr("href");
        console.log("ISSUE NAME -> "+selecTool(anchorElemArrOfIssues[i]).text());
        let fullLinkOfIssues = "https://github.com" + relativeLinkOfIssue;
        console.log(fullLinkOfIssues);
        
    }
    console.log("~~~~~~");
}

module.exports = {
    isuues : getIssues
}