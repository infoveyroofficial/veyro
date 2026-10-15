import fs from 'node:fs';
import path from 'node:path';
const output=path.resolve('dist');
fs.mkdirSync(output,{recursive:true});
for(const f of fs.readdirSync('.'))if(f.endsWith('.html')||f==='.nojekyll')fs.copyFileSync(f,path.join(output,f));
fs.cpSync('assets',path.join(output,'assets'),{recursive:true});
console.log('Static deployment build created in dist/. No server or runtime dependency.');
