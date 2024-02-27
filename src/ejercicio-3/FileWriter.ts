import * as fs from 'fs';
import { IFileWriter } from './FileOperation';

export class FileWriter implements IFileWriter {
  public writeFile(filePath: string, data: string): void {
    if (!fs.existsSync(filePath)) {
      throw new Error('El archivo no existe.');
    }
    fs.writeFileSync(filePath, data, 'utf-8');
    console.log('Archivo escrito exitosamente.');
  }
}
