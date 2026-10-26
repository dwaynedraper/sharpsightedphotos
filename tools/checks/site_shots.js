const {chromium}=require('playwright');
const pages=['/','/portraits','/gallery','/gift','/contact','/business','/business/headshots','/business/films'];
(async()=>{const b=await chromium.launch();const out=process.argv[2];
for(const u of pages){const name=u==='/'?'home':u.replace(/\//g,'_').slice(1);
 for(const [w,h,tag] of [[1440,900,'d'],[390,844,'m']]){
  const p=await b.newPage({viewport:{width:w,height:h},reducedMotion:'reduce'});const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text().slice(0,120))});
  await p.goto('http://localhost:3100'+u,{waitUntil:'networkidle'}).catch(e=>errs.push(String(e)));
  await p.evaluate(async()=>{for(const i of document.images){i.loading='eager'};window.scrollTo(0,document.body.scrollHeight);await new Promise(r=>setTimeout(r,600));window.scrollTo(0,0);});
  await p.waitForTimeout(800);
  const sw=await p.evaluate(()=>document.documentElement.scrollWidth);
  await p.screenshot({path:`${out}/${name}-${tag}.png`,fullPage:true});
  console.log(name,tag,'scrollWidth',sw,errs.length?'ERR '+errs.join(' | '):'');await p.close();}}
await b.close();})();
