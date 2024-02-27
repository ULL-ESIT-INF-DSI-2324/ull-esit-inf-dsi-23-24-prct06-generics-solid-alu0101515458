/**
 * Interfaz que define las operaciones que se pueden realizar con un fichero.
 * @method readFile Método que lee un fichero.
 */
export interface IFileReader {
  readFile(filePath: string): string;
}

/**
 * Interfaz que define las operaciones que se pueden realizar con un fichero.
 * @method writeFile Método que escribe en un fichero.
 */
export interface IFileWriter {
  writeFile(filePath: string, data: string): void;
}