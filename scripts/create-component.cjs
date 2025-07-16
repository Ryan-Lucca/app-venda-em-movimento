#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const name = process.argv[2];

if (!name) {
  console.error("❌ Você precisa passar o nome do componente: create-component NomeDoComponente");
  process.exit(1);
}

const componentDir = path.join(__dirname, `../src/components/${name}`);
const tsxFile = `${name}.tsx`;
const cssFile = `${name}.module.css`;

if (fs.existsSync(componentDir)) {
  console.error("❌ Esse componente já existe.");
  process.exit(1);
}

fs.mkdirSync(componentDir, { recursive: true });

fs.writeFileSync(
  path.join(componentDir, tsxFile),
  `import styles from './${cssFile}';

export default function ${name}() {
  return <div className={styles.container}>\n\t\tHello, ${name}!\n\t</div>;
}
`
);

fs.writeFileSync(
  path.join(componentDir, cssFile),
  `.container {
  /* estilo do componente */
}
`
);

console.log(`✅ Componente ${name} criado em src/components/${name}`);