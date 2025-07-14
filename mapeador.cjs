const fs = require('fs');
const path = require('path');

function printTree(dir, prefix = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .filter(e => e.name !== 'node_modules' && e.name !== '.git')
    .sort((a, b) => a.name.localeCompare(b.name));

  const lastIndex = entries.length - 1;

  entries.forEach((entry, index) => {
    const isLast = index === lastIndex;
    const connector = isLast ? '└── ' : '├── ';
    const nextPrefix = isLast ? '    ' : '│   ';
    const fullPath = path.join(dir, entry.name);

    console.log(prefix + connector + entry.name);

    if (entry.isDirectory()) {
      printTree(fullPath, prefix + nextPrefix);
    }
  });
}

const projectRoot = process.cwd(); // diretório onde o script é executado
console.log(path.basename(projectRoot));
printTree(projectRoot);