const express  = require('express');
const cors = require("cors");

const  request =require("request-promise");
const cheerio = require("cheerio");
const app =  express();
//middleware to handle cors
app.use(cors());
app.options('*', cors());

//middleware to handle requested body
app.use(express.json());
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});
const url="https://www.mohfw.gov.in/";
const puppeteer = require('puppeteer');
let ans={};
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
 
    const selector='#state-data > div > div > div > div > table > tbody > tr'
    const row = await page.$$eval(selector, trs => trs.map(tr => {
        const tds = [...tr.getElementsByTagName('td')];
        return tds.map(td => td.textContent);
    }));
    
    ans=row.slice(0,36);
    //console.log(ans[36])
    await browser.close();
})();

app.get("/total", async (req, resp) => {
    const response=await request({
        uri:url,
        headers:{
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Referer": "https://www.mohfw.gov.in/",
            
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
            "X-Requested-With": "XMLHttpRequest" 
        }
        
    })
    
    const $ = cheerio.load(response);
    const totalActive=$('#site-dashboard > div > div > div:nth-child(1) > div.col-xs-8.site-stats-count > ul > li.bg-blue > span:nth-child(5) > strong').text().split('(')[0];
    const totalDis=$('#site-dashboard > div > div > div:nth-child(1) > div.col-xs-8.site-stats-count > ul > li.bg-green > span:nth-child(5) > strong').text().split('(')[0];
    const totalDe=$('#site-dashboard > div > div > div:nth-child(1) > div.col-xs-8.site-stats-count > ul > li.bg-red > span:nth-child(5) > strong').text().split('(')[0];
    let total=[totalActive,totalDis,totalDe]
    resp.send(total);
})

app.get("/statedata", async (req, resp) => {
    resp.send(ans);
})
app.listen(process.env.PORT || 5000);

