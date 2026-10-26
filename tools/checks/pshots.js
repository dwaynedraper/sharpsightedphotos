const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const [w,h,tag] of [[1440,900,'d'],[390,844,'m']]){const p=await b.newPage({viewport:{width:w,height:h},reducedMotion:'reduce'});
await p.goto('http://localhost:3100/portraits');await p.waitForTimeout(1200);
// scroll through so lazy images load
const H=await p.evaluate(()=>document.body.scrollHeight);for(let y=0;y<H;y+=600){await p.evaluate(y=>scrollTo(0,y),y);await p.waitForTimeout(60);} await p.evaluate(()=>scrollTo(0,0));await p.waitForTimeout(600);
await p.screenshot({path:`site-shots/pt-${tag}.png`,fullPage:true});
console.log(tag,await p.evaluate(()=>({sw:document.documentElement.scrollWidth,iw:innerWidth,on:document.querySelector('.book-cover').classList.contains('on')})));await p.close();}
await b.close();})();
