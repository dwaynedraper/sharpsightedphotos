const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:'+(process.argv[2]||3100)+(process.argv[3]||'/portraits'));await p.waitForTimeout(800);
for(const f of [0,0.5,1]){await p.evaluate(f=>{const h=document.querySelector('.hall');scrollTo(0,h.offsetTop+f*(h.offsetHeight-innerHeight))},f);await p.waitForTimeout(900);await p.screenshot({path:`site-shots/hall_${f}.png`});}
await b.close();})();
