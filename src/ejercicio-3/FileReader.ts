import * as fs from 'fs';
import { IFileReader } from './FileOperation';

export class FileReader implements IFileReader {
  public readFile(filePath: string): string {
    try {
      const content: string = fs.readFileSync(filePath, 'utf-8');
      return content;
    } catch (error) {
      console.error('Error al leer el archivo:', error.message);
      return '';
    }
  }
}