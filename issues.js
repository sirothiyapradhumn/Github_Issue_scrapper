const request = require("request");
const cheerio = require("cheerio");
const jspdf = require("jspdf");

function getIssues(url, techName){
    
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
            
        }
        
        for(let i = 0; i<arrForIssueLink.length; i++){
            console.log(arrForIssueName[i] + " ---->> "+arrForIssueLink[i]);
        
        }
        console.log("~~~~~~");
    }
}



module.exports = {
    isuues : getIssues
}