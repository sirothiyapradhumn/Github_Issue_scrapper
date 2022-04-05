const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const pdfkit = require("pdfkit");

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
        let arrOfContent = [];
    
        for(let i = 0; i<8; i++){
            let issueName = selecTool(anchorElemArrOfIssues[i]).text();
            let relativeLinkOfIssue = selecTool(anchorElemArrOfIssues[i]).attr("href");
            let fullLinkOfIssues = "https://github.com" + relativeLinkOfIssue;
            //console.log(fullLinkOfIssues);
            let content = issueName +" --> "+fullLinkOfIssues;
            arrOfContent.push(content);  
        }

        let topicPath = path.join(__dirname, "Topic Name",techName);
        // processDir  function - > making tech vise folder
        processDir(topicPath);
        let filePath = path.join(topicPath, repoName+".pdf" );
        //let issueLinkText = JSON.stringify(arrForIssueLink);
        //writePdf -> wite the content of arrOfContent into a pdf
        writePdf(filePath, repoName, arrOfContent);

        // for(let i = 0; i<arrOfContent.length; i++){
        //     console.log(arrOfContent[i]);
        
        // }
    }
    
    function processDir(topicPath){
        if(!fs.existsSync(topicPath)){
            fs.mkdirSync(topicPath);
        }
    }

    function writePdf(filePath, repoName, arrOfContent){
        let pdfDoc = new pdfkit();
        pdfDoc.pipe(fs.createWriteStream(filePath));
        pdfDoc.fillColor('blue').fontSize(25).text(repoName);
        pdfDoc.fillColor('black').fontSize(13).list(arrOfContent);
        pdfDoc.end();
    }
}



module.exports = {
    isuues : getIssues
}