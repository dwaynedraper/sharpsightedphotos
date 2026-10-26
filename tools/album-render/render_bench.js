const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});const p=await b.newPage({viewport:{width:2000,height:760}});
p.on('console',m=>console.log('console',m.text()));p.on('pageerror',e=>console.log('err',e.message));
await p.goto('http://localhost:8101/bench');await p.waitForFunction(()=>window.done,null,{timeout:60000});
const d=await p.evaluate(()=>window.done);fs.writeFileSync('bench_raw.png',Buffer.from(d.split(',')[1],'base64'));console.log('ok');await b.close();})();
