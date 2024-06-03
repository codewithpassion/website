import fs from 'fs';
import sizeOf from 'image-size';
import path from 'path';

const scriptDirectory = path.dirname(import.meta.url).replace(/^file:\/\//, '');
const relativePath = '../../assets/photos/underwater';
const photoDirectory = path.join(scriptDirectory, relativePath);

// Read the list of photo files from the directory
const photoFiles = fs.readdirSync(photoDirectory);

// Generate the import statements
const importStatements = photoFiles.map((file) => {
  const sanitizedName = file.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9_]/g, '_');
  return `import ${sanitizedName} from '${relativePath}/${file}';`;
}).join('\n');

// Generate the photos array
const photosArray = photoFiles.map((file) => {
  const sanitizedName = file.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9_]/g, '_');
  const dimensions = sizeOf(path.join(photoDirectory, file));
  return `  { src: ${sanitizedName}, width: ${dimensions.width}, height: ${dimensions.height} }`;
}).join(',\n');

// Output the result
const output = `${importStatements}

const photos = [
${photosArray}
];

export { photos };`;

console.log(output);