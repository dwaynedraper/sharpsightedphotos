const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const base='http://localhost:3100';
const p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto(base+'/business/films');const s=await p.$('.clapper-board');await s.scrollIntoViewIfNeeded();await p.evaluate(()=>scrollBy(0,250));await p.waitForTimeout(900);await s.screenshot({path:'site-shots/slate.png'});
// pinned hallway
await p.goto(base+'/portraits');await p.waitForTimeout(500);
const top=await p.evaluate(()=>document.querySelector('.hall').offsetTop),H=await p.evaluate(()=>document.querySelector('.hall').offsetHeight);
await p.evaluate(y=>scrollTo(0,y),top+0.35*(H-900));await p.waitForTimeout(1200);await p.screenshot({path:'site-shots/hall.png'});
// fps through hallway
const r=await p.evaluate(()=>new Promise(res=>{const hall=document.querySelector('.hall');const end=hall.offsetTop+hall.offsetHeight-innerHeight;let y=hall.offsetTop-200,last=performance.now(),t=[];scrollTo(0,y);function st(n){t.push(n-last);last=n;y+=14;scrollTo(0,y);if(y<end)requestAnimationFrame(st);else res(t.slice(2))}requestAnimationFrame(st)}));
r.sort((a,b)=>a-b);console.log('hall fps',(1000/(r.reduce((s,x)=>s+x,0)/r.length)).toFixed(0),'p95',r[Math.floor(r.length*.95)].toFixed(1));
// reveal check
await p.evaluate(()=>scrollTo(0,document.querySelector('#faq-title').getBoundingClientRect().top+scrollY-500));await p.waitForTimeout(700);
console.log('reveal states',await p.evaluate(()=>[...document.querySelectorAll('[data-reveal]')].slice(0,40).filter(e=>e.getBoundingClientRect().top<innerHeight*0.7).map(e=>e.classList.contains('is-in')).join('')));
// loupe responsiveness
await p.goto(base+'/business/headshots');await p.waitForTimeout(800);
const t=await p.$('.table');const bb=await t.boundingBox();
await p.mouse.move(bb.x+10,bb.y+10);
const t0=Date.now();for(let i=0;i<120;i++){await p.mouse.move(bb.x+20+i*3,bb.y+60+i);} const dt=Date.now()-t0;
await p.waitForTimeout(100);await t.screenshot({path:'site-shots/loupe.png'});
const st=await p.evaluate(()=>{const l=document.querySelector('.loupe');return {tf:l.style.transform,live:l.classList.contains('live'),bg:document.querySelector('.lens').style.backgroundImage.slice(0,60)}});
console.log('loupe 120 moves ms',dt,JSON.stringify(st));
await b.close();})();
