import { Arithmeticable } from "./Arithmeticable";

/**
 * Clase que representa un número racional
 * @class Rational
 * @implements {Arithmeticable<Rational>}
 * @property {number} numerator Numerador del número racional
 * @property {number} denominator Denominador del número racional
 * @method {number} getNumerator Devuelve el numerador del número racional
 * @method {number} getDenominator Devuelve el denominador del número racional
 * @method {Rational} add Suma dos números racionales
 * @method {Rational} subtract Resta dos números racionales
 * @method {Rational} multiply Multiplica dos números racionales
 * @method {Rational} divide Divide dos números racionales
 */
export class Rational implements Arithmeticable<Rational> {
  private numerator: number;
  private denominator: number;

  constructor(numerator: number, denominator: number) {
    if (denominator === 0) {
      throw new Error("Denominador no puede ser 0");
    }
    this.numerator = numerator;
    this.denominator = denominator;
  }

  // Devuelve el numerador
  getNumerator(): number {
    return this.numerator;
  }

  // Devuelve el denominador
  getDenominator(): number {
    return this.denominator;
  }

  // Devuelve la suma de los valores racionales
  add(a: Rational, b: Rational): Rational {
    return new Rational(
      a.numerator * b.denominator + b.numerator * a.denominator,
      a.denominator * b.denominator,
    );
  }

  // Devuelve la resta de los valores racionales
  subtract(a: Rational, b: Rational): Rational {
    return new Rational(
      a.numerator * b.denominator - b.numerator * a.denominator,
      a.denominator * b.denominator,
    );
  }

  // Devuelve la multiplicación de los valores racionales
  multiply(a: Rational, b: Rational): Rational {
    return new Rational(
      a.numerator * b.numerator,
      a.denominator * b.denominator,
    );
  }

  // Devuelve la división de los valores racionales
  divide(a: Rational, b: Rational): Rational {
    return new Rational(
      a.numerator * b.denominator,
      a.denominator * b.numerator,
    );
  }
}
