# Github-Issue-Scrapper
## This script fetches the topics page of github and gets the current top 3 topics. 
- Then for each topic it fetchs the top 8 projects For each project it fetches all the top issues. 
- Then it generate folder by topic name, each folder will contain pdf corresponding to project name. 
- The project pdf will contain issue title along with its link.
### This project can be used by Data Analysist, Machine Learning Technologies, etc.




### JavaScript Modules
![](https://img.shields.io/badge/Tool%20Used-6-orange)
- npm modules
- request module
- cheerio module
- fs module
- path module
- pdfkit module




### Example of a pdf-file

[![Screenshot-36.png](https://i.postimg.cc/c4XBB8rG/Screenshot-36.png)](https://postimg.cc/rKR48s1f)
## Run Locally

Clone the project

```bash
  git clone https://github.com/sirothiyapradhumn/Github_scrapper.git
```

Go to the project directory

```bash
  cd Github_scrapper
```

Install dependencies

```bash
  npm install pdfkit
  npm install cheerio
  npm install request
```

Run the script

```bash
  node main.js
```
### Reference: https://www.npmjs.com/package/jspdf
