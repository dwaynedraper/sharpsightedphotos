const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const base='http://localhost:3200/site/';
const pages=['index.html','home.html','portraits.html','gift.html','gallery.html','contact.html','business.html','business-headshots.html','business-films.html'];
for(const pg of pages){const p=await b.newPage({viewport:{width:1440,height:900}});const errs=[];
p.on('console',m=>{if(m.type()==='error')errs.push(m.text().slice(0,140))});p.on('pageerror',e=>errs.push('PAGEERR '+e.message.slice(0,140)));
p.on('requestfailed',r=>errs.push('FAIL '+r.url().replace(base,'')));p.on('response',r=>{if(r.status()>=400)errs.push(r.status()+' '+r.url().replace(base,''))});
await p.goto(base+pg);await p.waitForTimeout(1500);
const info=await p.evaluate(()=>({url:location.pathname,title:document.title,js:document.documentElement.classList.contains('js-motion'),td:getComputedStyle(document.querySelector('.hall')||document.body).getPropertyValue('--td')}));
console.log(pg,JSON.stringify(info),errs.length?errs.slice(0,6):'clean');await p.close();}
// navigation and widgets
const p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto(base+'home.html');await p.waitForTimeout(800);await p.click('a[href="business.html"]');await p.waitForLoadState();console.log('nav ->',await p.evaluate(()=>location.pathname));
await p.click('a[href="business-films.html"] >> nth=0');await p.waitForLoadState();await p.waitForTimeout(1500);console.log('nav ->',await p.evaluate(()=>location.pathname));
const clip=await p.$('.clip-btn');await clip.scrollIntoViewIfNeeded();await clip.click();await p.waitForTimeout(500);
console.log('dialog open',await p.evaluate(()=>!!document.querySelector('dialog[open]')));
await p.goto(base+'business-headshots.html');await p.waitForTimeout(1500);const t=await p.$('.table');const bb=await t.boundingBox();
for(let i=0;i<20;i++)await p.mouse.move(bb.x+40+i*8,bb.y+80+i*3);await p.waitForTimeout(200);
console.log('loupe',await p.evaluate(()=>document.querySelector('.loupe').classList.contains('live')));
await p.screenshot({path:'site-shots/pv-hs.png'});
await p.goto(base+'portraits.html');await p.waitForTimeout(1000);
const hall=await p.evaluate(()=>{const h=document.querySelector('.hall');scrollTo(0,h.offsetTop+0.4*(h.offsetHeight-innerHeight));return 1});await p.waitForTimeout(1200);await p.screenshot({path:'site-shots/pv-hall.png'});
await b.close();})();
