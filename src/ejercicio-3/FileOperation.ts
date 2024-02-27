/**
 * Interfaz que define las operaciones que se pueden realizar con un fichero.
 * @exports
 * @interface IFileReader
 * @method readFile Método que lee un fichero.
 */
export interface IFileReader {
  readFile(filePath: string): string;
}

/**
 * Interfaz que define las operaciones que se pueden realizar con un fichero.
 * @exports
 * @interface IFileWriter
 * @method writeFile Método que escribe en un fichero.
 */
export interface IFileWriter {
  writeFile(filePath: string, data: string): void;
}