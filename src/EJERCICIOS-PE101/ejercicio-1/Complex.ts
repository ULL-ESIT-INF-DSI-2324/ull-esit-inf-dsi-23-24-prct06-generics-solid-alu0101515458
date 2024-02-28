import { Arithmeticable } from "./Arithmeticable";

/**
 * Clase que representa un número complejo
 * @class Complex
 * @implements {Arithmeticable<Complex>}
 * @property {number} real Parte real del número complejo
 * @property {number} imaginary Parte imaginaria del número complejo
 * @method {number} getReal Devuelve la parte real del número complejo
 * @method {number} getImaginary Devuelve la parte imaginaria del número complejo
 * @method {Complex} add Suma dos números complejos
 * @method {Complex} subtract Resta dos números complejos
 * @method {Complex} multiply Multiplica dos números complejos
 * @method {Complex} divide Divide dos números complejos
 */
export class Complex implements Arithmeticable<Complex> {
  private real: number;
  private imaginary: number;

  constructor(real: number, imaginary: number) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Devuelve la parte real
  getReal(): number {
    return this.real;
  }

  // Devuelve la parte imaginaria
  getImaginary(): number {
    return this.imaginary;
  }

  // Devuelve la suma de los números complejos
  add(a: Complex, b: Complex): Complex {
    return new Complex(a.real + b.real, a.imaginary + b.imaginary);
  }

  // Devuelve la resta de los números complejos
  subtract(a: Complex, b: Complex): Complex {
    return new Complex(a.real - b.real, a.imaginary - b.imaginary);
  }

  // Devuelve la multiplicación de los números complejos
  multiply(a: Complex, b: Complex): Complex {
    // Operaciones para obtener la parte real.
    const operation1 = a.real * b.real;
    const operation4 = a.imaginary * b.imaginary * -1;
    // Operaciones para obtener la parte imaginaria.
    const operation2 = a.real * b.imaginary;
    const operation3 = a.imaginary * b.real;
    // Devolvemos un nuevo complejo con la parte real y la imaginaria.
    return new Complex(operation1 + operation4, operation2 + operation3);
  }

  // Devuelve la división de los números complejos
  divide(a: Complex, b: Complex): Complex {
    // Operaciones del numerador
    const operation1 = a.real * b.real;
    const operation2 = a.real * -1 * b.imaginary;
    const operation3 = a.imaginary * b.real;
    const operation4 = a.imaginary * -1 * b.imaginary * -1;

    // Operaciones del denominador
    const operation5 = b.real * b.real;
    const operation6 = b.imaginary * -1 * b.imaginary * -1;

    // Obtenemos la parte real con las operaciones y la parte imaginaria.
    const real = (operation1 + operation4) / (operation5 + operation6);
    const imaginary = (operation2 + operation3) / (operation5 + operation6);

    // Devolvemos un nuevo complejo con la parte real y la imaginaria.
    return new Complex(real, imaginary);
  }
}
