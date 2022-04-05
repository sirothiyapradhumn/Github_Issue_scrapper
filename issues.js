const request = require("request");
const cheerio = require("cheerio");
const jspdf = require("jspdf");
const fs = require("fs");
const path = require("path");

function getIssues(url, techName, repoName){
    
    request(url,cb);

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
        let arrForIssueLink = [];
        let arrForIssueName = [];
    
        for(let i = 0; i<5; i++){
            let relativeLinkOfIssue = selecTool(anchorElemArrOfIssues[i]).attr("href");
            let issueName = selecTool(anchorElemArrOfIssues[i]).text();
            arrForIssueName.push(issueName);
            let fullLinkOfIssues = "https://github.com" + relativeLinkOfIssue;
            arrForIssueLink.push(fullLinkOfIssues);
            //console.log(fullLinkOfIssues);
            let topicPath = path.join(__dirname, "Topic Name",techName);
            processDir(topicPath);
            let filePath = path.join(topicPath, repoName+".json" );
            fs.writeFileSync(filePath, JSON.stringify(arrForIssueLink));
        }
        
        for(let i = 0; i<arrForIssueLink.length; i++){
            console.log(arrForIssueName[i] + " ---->> "+arrForIssueLink[i]);
        
        }
        console.log("~~~~~~");
    }
    
    function processDir(topicPath){
        if(!fs.existsSync(topicPath)){
            fs.mkdirSync(topicPath);
        }
    }
}



module.exports = {
    isuues : getIssues
}