import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
const pages=fs.readdirSync('.').filter(f=>f.endsWith('.html'));
const issues=[];
for(const page of pages){
 const text=fs.readFileSync(page,'utf8');
 if(!/<html lang="en"/.test(text)||!/<meta name="viewport"/.test(text)||!/<title>/.test(text))issues.push(page+': missing page metadata');
 if((text.match(/<h1[ >]/g)||[]).length!==1)issues.push(page+': expected one h1');
 const ids=[...text.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 if(new Set(ids).size!==ids.length)issues.push(page+': duplicate IDs');
 for(const m of text.matchAll(/(?:href|src)="([^"]+)"/g)){
  const ref=m[1];if(/^(https?:|mailto:|data:)/.test(ref))continue;
  if(ref.startsWith('/'))issues.push(page+': root-relative path '+ref);
  const [filePart,hash]=ref.split('#');const file=(filePart.split('?')[0]||page);
  if(!fs.existsSync(file)){issues.push(page+': missing '+file);continue;}
  if(hash&&file.endsWith('.html')&&!fs.readFileSync(file,'utf8').includes('id="'+hash+'"'))issues.push(page+': missing anchor '+ref);
 }
}
for(const file of ['assets/app.js','assets/config.js']){try{new vm.Script(fs.readFileSync(file,'utf8'),{filename:file})}catch(e){issues.push(e.message)}}
if(issues.length){console.error(issues.join('\n'));process.exit(1)}
console.log(`PASS: ${pages.length} pages; metadata, headings, IDs, relative links, anchors, assets and JavaScript syntax.`);
