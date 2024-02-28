import { Arithmeticable } from "./Arithmeticable";

/**
 * Clase que representa una colección de números aritméticos
 * @class ArithmeticableCollection
 * @template T
 * @property {T[]} elements Elementos de la colección
 * @method {void} addArithmeticable Añade un elemento a la colección
 * @method {T} getArithmeticable Devuelve un elemento de la colección
 * @method {number} getNumberOfArithmeticables Devuelve el número de elementos de la colección
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  private elements: T[] = [];

  addArithmeticable(element: T): void {
    this.elements.push(element);
  }

  getArithmeticable(index: number): T {
    return this.elements[index];
  }

  getNumberOfArithmeticables(): number {
    return this.elements.length;
  }
}
