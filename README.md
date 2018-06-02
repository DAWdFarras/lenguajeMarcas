# lenguajeMarcas

## Metodología
Todo el trabajo se ha realizado con una metodología de trabajo dinámica basada en github. EN el histórico se pueden ver el proceso de pull request realizando durante la creación de la página.

## Metatags
Para mejorar la ubicación de la página SEO, y para hacer que sea fácilmente más accesible para los usuarios se han añadido los tags propios del header.

Desde los tags de facebook que faciliten y mejoren la experiencia de usuario a la hora de compartir los contenidos, como rss...

## Estructura de la página
Todas las páginas disponene de los siguientes elementos:

1. Carousel
2. Menu
3. Contenido principal
4. Footer

## Calidad
Los procesos de carga ven su rendimiento mejorado cuando la carga se realiza sobre archivos minimificados, aunque en un trabajo tan pequeño la diferencia no será apreciable.

Además todo la codificación de estilos se ha mantenido dentro de un único archivo css. Para facilitar el mantenimiento de la página se han seguido algunas normas de estilo:COMPLETAMENTE RESPONSIVE

### Adaptabilidad completa
Todas las páginas se han probado en los distintos dispositivos para garantizar que se comportaban como se esperaba. Además esto se ha conseguido con un único documento css global y un documento html por página, es decir lo indispensable lo que a la larga hace más fácil el mantenimiento.

### Maneter los elementos relacionados cerca
He mantenido todos los mediaQuery justo debajo de los elementos de css que sobreescriben de manera que se hace más difícil errores debidos a efectos inesperados.

### Nombres significativos
A excepción del body, todas las demás referencias se dan desde ids y clases lo que presenta dos ventajas:

1. Aumenta la reutilización del código: No tenemos que codificar cambios varias veces sino que con una vez se lo aplicamos a todos los elementos que lo requieran.
2. Mejora la legibilidad: No es necesario buscar dónde se ha aplicado el mismo cambio dentro del css, solo con conocer la clase sobre la que se ha aplicado podemos encontrar todas las referencias necesarias.

### Iconos de personalización
Para hacer que la página pueda ser lo más única posible se han dejado unos iconos en la parte inferior de la página que pueden ser ersonalizados en cualquier momento con la funcionallidad deseada.

## Funcionalidad (js)
Toda la funcionalidad se ha implementado en el menor número de líneas posibles por la misma razón por la que se dispone de archivos minimificados.
Además las cargas de datos se pueden ver al principio del documento js lo que genera una carga ligeramente más pesada al principio, pero agiliza cualquier proceso posterior.
Se han implementado las funcionalidades originalmente requeridas en la página home:

1. Botón de carga de noticias.
2. Auto carga.

Además para mejorar la legibilidad del código se ha empleado jQuery en su realización, evitando en todo momento salirnos de su estandard.

## Estilo
Dada la naturaleza "seria" de la página se ha optado por colores sin opacidad  y formas rectas que refuercen el concepto que se pretende describir.


Para mejorar los procesos de carga y evitar extraños durante la carga de la página (Ej: resizing de imágenes), todos los contenidos de un mismo tipo SIEMPRE tienen las mismas características.

El caso más evidente es el de las imágenes que al todas tener el mismo tamaño la carga es suave y la experiencia del usuario es inmejorable, sin embargo la longitud de los textos y las características de los títulos son otros ejemplos de esta estandarización del contenido.

Además en el proceso se ha utlizado al máximo bootstrap como librería a la hora de realizar la codificación de html, aplicando las clases bootstrap tanto para el posicionamiento de elementos como para la responsividad de los mismos.
