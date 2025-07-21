#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const name = process.argv[2];

if (!name) {
  console.error("❌ Você precisa passar o nome da página: create-page NomeDaPagina");
  process.exit(1);
}

const pageDir = path.join(__dirname, `../src/pages/${name}`);
const tsxFile = `${name}.tsx`;
const cssFile = `${name}.module.css`;

if (fs.existsSync(pageDir)) {
  console.error("❌ Essa página já existe.");
  process.exit(1);
}

fs.mkdirSync(pageDir, { recursive: true });

fs.writeFileSync(
  path.join(pageDir, tsxFile),
  `import styles from './${cssFile}';

export default function ${name}() {
  return <div className={styles.container}>\n\t\tHello, ${name}!\n\t</div>;
}
`
);

fs.writeFileSync(
  path.join(pageDir, cssFile),
  `.container {
  /* estilo da pagina */
}
`
);

console.log(`✅ Pagina ${name} criada em src/pages/${name}`);