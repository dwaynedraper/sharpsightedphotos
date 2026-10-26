const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});const p=await b.newPage({viewport:{width:1600,height:1200}});
p.on('pageerror',e=>console.log('err',e.message));
await p.goto('http://localhost:8102/album'+(process.argv[2]||''));await p.waitForFunction(()=>window.done,null,{timeout:90000});
const d=await p.evaluate(()=>window.done);fs.writeFileSync(process.argv[3]||'album_raw.png',Buffer.from(d.split(',')[1],'base64'));
console.log(JSON.stringify(await p.evaluate(()=>window.corners)));await b.close();})();
