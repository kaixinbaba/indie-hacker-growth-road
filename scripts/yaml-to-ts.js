import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOCALES_DIR = path.join(__dirname, '../client/src/locales');

async function convertYamlToTs() {
  try {
    const files = await fs.readdir(LOCALES_DIR);
    const yamlFiles = files.filter(file => file.endsWith('.yaml'));

    for (const file of yamlFiles) {
      const filePath = path.join(LOCALES_DIR, file);
      const content = await fs.readFile(filePath, 'utf8');
      const data = yaml.load(content);
      
      const tsContent = `export default ${JSON.stringify(data, null, 2)};\n`;
      const tsFilePath = path.join(LOCALES_DIR, file.replace('.yaml', '.ts'));
      
      await fs.writeFile(tsFilePath, tsContent);
      console.log(`✓ Converted ${file} to ${file.replace('.yaml', '.ts')}`);
    }
  } catch (error) {
    console.error('Error converting YAML to TS:', error);
    process.exit(1);
  }
}

convertYamlToTs();
