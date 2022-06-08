 import franc from 'franc';
 import { where } from 'langs';
 const langCode = franc('Considerando ser essencial que os direitos humanos');
 const language = where('3', langCode);
 console.log(language);