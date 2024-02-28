# Informe de Práctica 6: Clases e interfaces genéricas. Principios SOLID

| **Autor** | **Profesor** | **Asignatura** | **Universidad** | **Ubicación** | **Fecha** | 
|--------------|--------------|--------------|--------------|--------------|--------------|
| ***TOMÁS JAVES TOMMASONE*** | ***Dr. EDUARDO MANUEL SEGREDO GONZALEZ*** | ***DESARROLLO DE SISTEMAS INFORMÁTICOS*** | ***UNIVERSIDAD DE LA LAGUNA*** | ***SAN CRISTOBAL DE LA LAGUNA*** | ***27/02/2024*** |

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-alu0101515458/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-alu0101515458?branch=main)

#### Índice:  
1. [_Objetivo_](#1-objetivo)
2. [_Tareas Previas_](#2-tareas-previas)
3. [_Ejercicios Propuestos_](#3-ejercicios-propuestos)  
3.1 [Ejercicio 1 - La mudanza](#ejercicio-1---la-mudanza)  
3.2 [Ejercicio 2 - Facturas en diferentes formatos](#ejercicio-2---facturas-en-diferentes-formatos)  
3.3 [Ejercicio 3 - Gestor de ficheros](#ejercicio-2---gestor-de-ficheros)

# 1. Objetivo
El objetivo de esta práctica es profundizar en el conocimiento y manejo de clases e interfaces genéricas en TypeScript, así como en la aplicación de los principios SOLID de diseño orientado a objetos. Mediante una serie de ejercicios prácticos, buscamos no solo comprender la sintaxis y el uso avanzado de TypeScript, sino también cómo estos conceptos pueden ser aplicados para desarrollar soluciones de software robustas, mantenibles y escalables. A través del desafío de implementar un conjunto de requisitos específicos, esta práctica está diseñada para reforzar nuestra habilidad en el uso de técnicas de programación orientada a objetos y genéricas, enfocándonos en la calidad del diseño de software. Al aplicar los principios SOLID, pretendemos crear un código que sea fácil de entender, modificar y ampliar, destacando la importancia de un diseño de software bien pensado en el desarrollo de aplicaciones eficientes y efectivas.

# 2. Tareas Previas
Antes de sumergirnos en la resolución de los ejercicios propuestos, realizamos una serie de pasos preparatorios esenciales para asegurar el éxito de nuestra práctica.

Primero, aceptamos la asignación en GitHub Classroom, lo que nos proporcionó un repositorio inicial para alojar todas nuestras soluciones. Este paso inicial es fundamental para organizar y versionar adecuadamente nuestro trabajo a lo largo de la práctica.

A continuación, dedicamos tiempo a repasar TypeDoc pues en prácticas anteriores ya habíamos hecho uso de esta herramienta.  
TypeDoc es indispensable para la documentación de proyectos TypeScript porque no solamente adquirimos las habilidades necesarias para documentar efectivamente nuestros desarrollos sino que también garantizamos que nuestro código es comprensible para otros desarrolladores.

Mocha y Chai fueron las herramientas clave para el desarrollo de pruebas. Aunque anteriormente habíamos hecho uso de ellas, volvimos a familiarizarnos para esta nueva práctica. Esto no solo nos permitiría verificar la corrección de nuestras implementaciones sino también asegurar su robustez frente a casos de uso y entradas inesperadas.

Con estas tareas previas completadas, nos encontramos en una posición óptima para abordar los ejercicios propuestos con confianza, equipados con las herramientas y conocimientos necesarios para crear soluciones efectivas y bien diseñadas, siguiendo las mejores prácticas en el desarrollo de software con TypeScript.

# 3. Ejercicios Propuestos
### Ejercicio 1 - La mudanza
Para abordar el ejercicio de diseño y gestión de ensers y mudanzas, se ha desarrollado un sistema flexible y escalable utilizando los principios de programación orientada a objetos y adherido a los principios SOLID en TypeScript. Este enfoque permite manejar de manera eficiente y organizada los distintos objetos involucrados en una mudanza, como prendas, tecnología y cualquier otro enser que requiera ser empacado y transportado. A continuación, se detalla la implementación del sistema y cómo se alinea con los principios SOLID:

- **Interfaces y Clases Implementadas**:

***Enser.ts***: Esta interfaz define la estructura común para todos los objetos que pueden ser manejados en el sistema de mudanza. Incluye propiedades esenciales como nombre, categoría, peso, dimensiones, y un método para obtener una descripción detallada del enser. Esta interfaz permite seguir el principio de Segregación de Interfaces (ISP) al especificar solo los métodos y propiedades que son necesarios para los objetos que implementan esta interfaz.

***Caja.ts***: La clase Caja es genérica y puede contener cualquier tipo de objeto que implemente la interfaz Enser. Esto permite una gran flexibilidad y reutilización de código, alineándose con el principio de Inversión de Dependencias (DIP) al depender de abstracciones (la interfaz Enser) en lugar de implementaciones concretas. Además, esta clase encapsula la lógica para añadir, eliminar, listar y buscar ensers dentro de una caja, siguiendo el principio de Responsabilidad Única (SRP).

***Prendas.ts y Tecnologia.ts***: Estas clases implementan la interfaz Enser y especifican detalles particulares para prendas y tecnología, respectivamente. Cada clase proporciona su propia implementación del método getDescription, lo que demuestra el principio de Sustitución de Liskov (LSP), ya que pueden ser utilizadas en lugar de su tipo base (Enser) sin afectar la integridad del programa.

***Mudanza.ts***: La clase Mudanza gestiona colecciones de cajas (Caja<T>) y ofrece funcionalidades para añadir y eliminar cajas, listar todos los ensers de la mudanza, y calcular el peso total. Esto ejemplifica el principio de Abierto/Cerrado (OCP), ya que la clase está abierta para extensión (pueden agregarse nuevos tipos de ensers o cajas) pero cerrada para modificación, manteniendo el código seguro ante cambios.

El código propuesto para cada interfaz y clases son los siguientes:

- ***Enser.ts***:
```typescript
export interface Enser {
  name: string; // Nombre del enser
  category: string; // Categoría a la que pertenece el enser (ej: libros, ropa, electrónica)
  weight: number; // Peso del enser en kilogramos
  dimensions: {
    // Dimensiones del enser
    width: number; // Ancho del enser en centímetros
    height: number; // Altura del enser en centímetros
    depth: number; // Profundidad del enser en centímetros
  };
  getDescription(): string; // Método para obtener una descripción del enser
}
```
- ***Caja.ts***:
```typescript
export class Caja<T extends Enser> {
  private contents: T[] = [];

  /**
   * Método para añadir un Enser a la caja   *
   * @param Enser Enser a añadir a la caja
   * @returns void
   */
  addEnser(Enser: T): void {
    this.contents.push(Enser);
  }

  /**
   * Método para eliminar un Enser de la caja
   * @param name Nombre del Enser a eliminar
   * @returns T | undefined
   */
  removeEnser(name: string): T | undefined {
    // Obtenemos el índice del Enser a eliminar
    const index = this.contents.findIndex((Enser) => Enser.name === name);
    // Si el índice no es -1, existe y, por tanto, lo eliminamos
    if (index !== -1) {
      return this.contents.splice(index, 1)[0];
    }
    // Si el índice es -1, no existe y, por tanto, devolvemos undefined
    return undefined;
  }

  /**
   * Método para listar los Ensers que contiene la caja
   * @returns void
   */
  listEnsers(): void {
    // Listamos la descripción de cada Enser
    this.contents.forEach((Enser) => console.log(Enser.getDescription()));
  }

  /**
   * Método para obtener los Ensers que contiene la caja
   * @returns T[]
   */
  getEnsers(): T[] {
    return this.contents;
  }

  /**
   * Método para buscar un Enser en la caja
   * @param name Nombre del Enser a buscar
   * @returns T | undefined
   */
  findEnser(name: string): T | undefined {
    // Devolvemos el Enser si lo encontramos
    return this.contents.find((Enser) => Enser.name === name);
  }
}
```
- ***Prendas.ts***:
```typescript
export class Prendas implements Enser {
  name: string;
  category: string = "Prendas";
  weight: number;
  dimensions: { width: number; height: number; depth: number };
  tipo: string; // Pantalones, Camisetas

  constructor(
    name: string,
    weight: number,
    dimensions: { width: number; height: number; depth: number },
    tipo: string,
  ) {
    this.name = name;
    this.weight = weight;
    this.dimensions = dimensions;
    this.tipo = tipo;
  }

  /**
   * Método para obtener la descripción de la prenda
   * @returns string
   */
  getDescription(): string {
    return `${this.name} (${this.tipo}): ${this.weight}kg, ${this.dimensions.width}x${this.dimensions.height}x${this.dimensions.depth}cm`;
  }
}
```
- ***Tecnologia.ts***:
```typescript
export class Tecnologia implements Enser {
  name: string;
  category: string = "Tecnología";
  weight: number;
  dimensions: { width: number; height: number; depth: number };
  tipo: string; // Televisores, Móviles

  constructor(
    name: string,
    weight: number,
    dimensions: { width: number; height: number; depth: number },
    tipo: string,
  ) {
    this.name = name;
    this.weight = weight;
    this.dimensions = dimensions;
    this.tipo = tipo;
  }

  /**
   * Método para obtener la descripción del enser
   * @returns string
   */
  getDescription(): string {
    return `${this.name} (${this.tipo}): ${this.weight}kg, ${this.dimensions.width}x${this.dimensions.height}x${this.dimensions.depth}cm`;
  }
}
```
- ***Mudanza.ts***:
```typescript
export class Mudanza<T extends Enser> {
  private Caja: Caja<T>[] = [];

  /**
   * Método para añadir una Caja a la mudanza
   * @param Caja Caja a añadir a la mudanza
   * @returns void
   */
  addCaja(Caja: Caja<T>): void {
    // Añadir Caja a la mudanza
    this.Caja.push(Caja);
  }

  /**
   * Método para eliminar una Caja de la mudanza
   * @param index Índice de la Caja a eliminar
   * @returns Caja<T> | undefined
   */
  removeCaja(index: number): Caja<T> | undefined {
    // Si el índice es válido, eliminar Caja de la mudanza
    if (index >= 0 && index < this.Caja.length) {
      return this.Caja.splice(index, 1)[0];
    }
    // Si el índice no es válido, devolver undefined
    return undefined;
  }

  /**
   * Método para listar los Ensers que contiene la mudanza
   * @returns void
   */
  listAllEnsers(): void {
    // Listar los Ensers de cada Caja
    this.Caja.forEach((Caja, index) => {
      // Mostrar el número de Caja y listar sus Ensers
      console.log(`Caja #${index + 1}:`);
      Caja.listEnsers();
    });
  }

  /**
   * Método para obtener el peso total de la mudanza
   * @returns number
   */
  getTotalWeight(): number {
    // Calcular el peso total de la mudanza
    return this.Caja.reduce((totalWeight, Caja) => {
      const CajaWeight = Caja.getEnsers().reduce((weight, Enser) => weight + Enser.weight, 0);
      return totalWeight + CajaWeight;
    }, 0);
  }

  /**
   * Método para obtener las Cajas que contiene la mudanza
   * @returns Caja<T>[]
   */
  getCajas(): Caja<T>[] {
    return this.Caja;
  }
}
```
### Ejercicio 2 - Facturas en diferentes formatos
Para desarrollar una solución eficiente y flexible para la gestión de facturas digitales, se ha diseñado un sistema basado en TypeScript que aprovecha los principios de la programación orientada a objetos y la implementación de interfaces y clases genéricas. Este enfoque no solo permite la creación de un sistema robusto y escalable sino que también facilita la integración y expansión futuras con nuevos formatos de factura o funcionalidades adicionales. A continuación, se detalla el diseño e implementación del sistema propuesto:

- **Interfaces y Clases Implementadas**:

***Factura.ts***: Esta interfaz define la estructura base de una factura, incluyendo propiedades esenciales como el total, remitente, destinatario, formato, fecha de emisión y descripción, además de un método generarFactura() para obtener la representación de la factura en el formato específico requerido. Esta interfaz asegura que todas las clases que representen tipos específicos de facturas implementen un conjunto común de propiedades y comportamientos, promoviendo así la reutilización de código y la interoperabilidad entre diferentes tipos de facturas.

***ColeccionFacturas.ts***: Se implementó una clase genérica ColeccionFacturas<T extends Factura>, que sirve como contenedor para almacenar y manejar un conjunto de facturas de cualquier tipo que cumpla con la interfaz Factura. Esta clase incluye métodos para agregar y remover facturas, obtener la lista de todas las facturas almacenadas, y generar todas las facturas en sus respectivos formatos. La utilización de genéricos aquí permite la creación de colecciones de facturas de diferentes tipos, ofreciendo flexibilidad y facilitando la gestión de diversas formas de facturas en un solo lugar.

***HTML.ts y PDF.ts***: Estas clases concretas implementan la interfaz Factura, proporcionando implementaciones específicas del método generarFactura() para generar representaciones de la factura en formatos HTML y PDF, respectivamente. Cada clase se encarga de definir cómo se presenta la información de la factura en su formato designado, permitiendo la fácil extensión del sistema para soportar más formatos en el futuro. Al separar las implementaciones específicas de formato en clases distintas, se promueve el principio de responsabilidad única, mejorando la mantenibilidad y la claridad del código.

El código propuesto para cada interfaz y clases son los siguientes:

- ***Factura.ts***:
```typescript
export interface Factura {
  total: number; // Total de la factura
  remitente: string; // Remitente de la factura
  formato: string; // Formato de la factura (PDF, HTML)
  fechaEmision: Date; // Fecha de emisión de la factura
  destinatario: string; // Destinatario de la factura
  descripcion: string; // Descripción de la factura
  generarFactura(): string; // Método para generar la factura en el formato especificado
}
```
- ***ColeccionFactura.ts***:
```typescript
export class ColeccionFacturas<T extends Factura> {
  private facturas: T[] = [];

  /**
   * Método para agregar una factura a la lista
   * @param factura T Factura a agregar
   * @returns void
   */
  agregarFactura(factura: T): void {
    this.facturas.push(factura);
  }

  /**
   * Método para remover una factura de la lista
   * @param indice number Índice de la factura a remover
   * @returns void
   */
  removerFactura(indice: number): void {
    this.facturas.splice(indice, 1);
  }

  /**
   * Método para obtener la lista de facturas
   * @returns T[] Lista de facturas
   */
  obtenerFacturas(): T[] {
    return this.facturas;
  }

  /**
   * Método para generar todas las facturas de la lista
   * @returns string[] Lista de facturas generadas
   */
  generarTodasLasFacturas(): string[] {
    return this.facturas.map((factura) => factura.generarFactura());
  }
}
```
- ***HTML.ts***:
```typescript
export class HTML implements Factura {
  public total: number;
  public remitente: string;
  public formato: string;
  public fechaEmision: Date;
  public destinatario: string;
  public descripcion: string;

  /**
   * Constructor de la clase HTML
   * @param total Total de la factura
   * @param remitente Remitente de la factura
   * @param fechaEmision Fecha de emisión de la factura
   * @param destinatario Destinatario de la factura
   * @param descripcion Descripción de la factura
   */
  constructor(
    total: number,
    remitente: string,
    fechaEmision: Date,
    destinatario: string,
    descripcion: string,
  ) {
    this.total = total;
    this.remitente = remitente;
    this.fechaEmision = fechaEmision;
    this.destinatario = destinatario;
    this.descripcion = descripcion;
    this.formato = "HTML"; // Se establece el formato como HTML por defecto
  }

  /**
   * Método para obtener el total de la factura
   * @returns number Total de la factura
   */
  getTotal(): number {
    return this.total;
  }

  /**
   * Método para obtener el remitente de la factura
   * @returns string Remitente de la factura
   */
  getRemitente(): string {
    return this.remitente;
  }

  /**
   * Método para obtener el formato de la factura
   * @returns string Formato de la factura
   */
  getFormato(): string {
    return this.formato;
  }

  /**
   * Método para obtener la fecha de emisión de la factura
   * @returns Date Fecha de emisión de la factura
   */
  getFechaEmision(): Date {
    return this.fechaEmision;
  }

  /**
   * Método para obtener el destinatario de la factura
   * @returns string Destinatario de la factura
   */
  getDestinatario(): string {
    return this.destinatario;
  }

  /**
   * Método para obtener la descripción de la factura
   * @returns string Descripción de la factura
   */
  getDescripcion(): string {
    return this.descripcion;
  }

  /**
   * Método para generar la factura en formato HTML
   * @returns string Factura en formato HTML
   */
  generarFactura(): string {
    // Generación de la factura en formato HTML
    return `
      <html>
        <head>
          <title>Factura</title>
        </head>
        <body>
          <h1>Factura en formato HTML</h1>
          <p><strong>Remitente:</strong> ${this.remitente}</p>
          <p><strong>Fecha de emisión:</strong> ${this.fechaEmision.toDateString()}</p>
          <p><strong>Destinatario:</strong> ${this.destinatario}</p>
          <p><strong>Descripción:</strong> ${this.descripcion}</p>
          <p><strong>Total:</strong> ${this.total}</p>
        </body>
      </html>
    `;
  }
}
```
- ***PDF.ts***:
```typescript
export class PDF implements Factura {
  public total: number;
  public remitente: string;
  public formato: string;
  public fechaEmision: Date;
  public destinatario: string;
  public descripcion: string;

  /**
   * Constructor de la clase PDF
   * @param total Total de la factura
   * @param remitente Remitente de la factura
   * @param fechaEmision Fecha de emisión de la factura
   * @param destinatario Destinatario de la factura
   * @param descripcion Descripción de la factura
   */
  constructor(
    total: number,
    remitente: string,
    fechaEmision: Date,
    destinatario: string,
    descripcion: string,
  ) {
    this.total = total;
    this.remitente = remitente;
    this.fechaEmision = fechaEmision;
    this.destinatario = destinatario;
    this.descripcion = descripcion;
    this.formato = "PDF"; // Se establece el formato como PDF por defecto
  }

  /**
   * Método para obtener el total de la factura
   * @returns number Total de la factura
   */
  getTotal(): number {
    return this.total;
  }

  /**
   * Método para obtener el remitente de la factura
   * @returns string Remitente de la factura
   */
  getRemitente(): string {
    return this.remitente;
  }

  /**
   * Método para obtener el formato de la factura
   * @returns string Formato de la factura
   */
  getFormato(): string {
    return this.formato;
  }

  /**
   * Método para obtener la fecha de emisión de la factura
   * @returns Date Fecha de emisión de la factura
   */
  getFechaEmision(): Date {
    return this.fechaEmision;
  }

  /**
   * Método para obtener el destinatario de la factura
   * @returns string Destinatario de la factura
   */
  getDestinatario(): string {
    return this.destinatario;
  }

  /**
   * Método para obtener la descripción de la factura
   * @returns string Descripción de la factura
   */
  getDescripcion(): string {
    return this.descripcion;
  }

  /**
   * Método para generar la factura en formato PDF
   * @returns string Factura en formato PDF
   */
  generarFactura(): string {
    // Lógica para generar la factura en formato PDF
    return `Factura en formato PDF:\n\nRemitente: ${this.remitente}\nFecha de emisión: ${this.fechaEmision.toDateString()}\nDestinatario: ${this.destinatario}\nDescripción: ${this.descripcion}\nTotal: ${this.total}`;
  }
}
```

### Ejercicio 3 - Gestor de ficheros
Para los archivos proporcionados en tu tercer ejercicio, tenemos una estructura que define interfaces y clases para la lectura y escritura de archivos, haciendo uso de una abstracción para manejar archivos de manera flexible. Este diseño permite cambiar fácilmente las implementaciones de lectura y escritura sin modificar el código que usa estas abstracciones.

- **Interfaces y Clases Implementadas**:

**IFileWriter.ts**: define una interfaz para escribir datos en un archivo. Cualquier clase que implemente esta interfaz debe proporcionar la implementación del método writeFile, que escribe datos en el archivo especificado.

**IFileReader.ts**: define una interfaz similar para leer datos de un archivo. Las clases que implementan esta interfaz deben proporcionar la implementación del método readFile, que devuelve el contenido de un archivo como una cadena de texto.

**FileWriter.ts**: es una implementación concreta de la interfaz IFileWriter. Utiliza el módulo fs de Node.js (File System) para escribir datos en un archivo. La existencia del archivo se verifica antes de escribir en él, y se lanza un error si el archivo no existe.

**FileReader.ts**: es una implementación de IFileReader que también usa el módulo fs para leer el contenido de un archivo. Si ocurre un error durante la lectura, se captura la excepción, se registra un mensaje de error y se devuelve una cadena vacía.

**FileManager.ts**: es una clase que compone IFileReader y IFileWriter para proporcionar una interfaz unificada para leer y escribir archivos. Esto permite a los usuarios de FileManager leer y escribir archivos sin preocuparse por los detalles de implementación específicos de la lectura o escritura de archivos.

Este diseño promueve la separación de preocupaciones y la inversión de dependencias, dos principios importantes de la programación orientada a objetos y el diseño de software. Al depender de abstracciones (interfaces) en lugar de implementaciones concretas, es fácil cambiar las implementaciones de lectura y escritura sin afectar el código que depende de ellas, facilitando el mantenimiento y la extensibilidad del código.
