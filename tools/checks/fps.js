const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:8100/foryou.full');await p.waitForTimeout(800);
const r=await p.evaluate(()=>new Promise(res=>{const hall=document.querySelector('.hall');const start=hall.offsetTop,end=start+hall.offsetHeight-innerHeight;
let y=start-200,last=performance.now(),times=[];window.scrollTo(0,y);
function step(t){times.push(t-last);last=t;y+=12;window.scrollTo(0,y);if(y<end)requestAnimationFrame(step);else res(times.slice(2));}
requestAnimationFrame(step);}));
r.sort((a,b)=>a-b);const avg=r.reduce((s,x)=>s+x,0)/r.length;
console.log('frames',r.length,'avg ms',avg.toFixed(1),'fps',(1000/avg).toFixed(0),'p95 ms',r[Math.floor(r.length*0.95)].toFixed(1),'over 33ms',r.filter(x=>x>33).length);
await b.close();})();
