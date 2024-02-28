/**
 * Interfaz que define las operaciones aritméticas básicas.
 */
export interface Arithmeticable<T> {
  add(a: T, b: T): T;
  subtract(a: T, b: T): T;
  multiply(a: T, b: T): T;
  divide(a: T, b: T): T;
}
