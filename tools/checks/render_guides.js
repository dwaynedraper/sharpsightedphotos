const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch();const p=await b.newPage();
for(const [f,o] of [['find-your-story.html','Find Your Story - Sharp Sighted Photos.pdf'],['team-headshot-day-kit.html','Team Headshot Day Kit - Sharp Sighted Photos.pdf']]){
await p.goto('file://'+path.resolve('../guides',f));await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(400);
const of=await p.evaluate(()=>[...document.querySelectorAll('.page')].map((s,i)=>s.scrollHeight>s.clientHeight+1?i+1:0).filter(Boolean));
console.log(f,'overflow pages',of,'fonts',await p.evaluate(()=>[...document.fonts].filter(x=>x.status==='loaded').length));
await p.pdf({path:path.resolve('../guides',o),width:'8.5in',height:'11in',printBackground:true,preferCSSPageSize:true});}
await b.close();})();
