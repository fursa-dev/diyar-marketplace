import * as fs from 'fs';

const files = ['src/components/Sections.tsx', 'src/components/Hero.tsx'];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(/rounded-xl md:/g, 'rounded-2xl md:');
  content = content.replace(/rounded-2xl md:rounded-2xl/g, 'rounded-2xl');
  
  fs.writeFileSync(file, content);
});
console.log('Fixed rounded classes');
