# Javascript_Proyecto Formula1

De acuerdo al aplicativo de la pagina web para la **Formula1** para el gestionamiento de Pilotos, Escuderias, Monoplazas y Circuitos. Teniendo en cuenta que deben haber dos perfiles uno como administardor (**Admin**) y otro como Usuario.

El equipo ha entregado el primer flujo de entrada para el administrador, desde el login hasta el acceso al panel.  
Este trabajo busca desarrollar los módulos de:

- **Añadir**
- **Eliminar**
- **Actualizar**  

## Estructura completa del programa


```
Formula1/
├── fonts/             # Tipografías utilizadas en el proyecto
├──html/                
│   ├── adminPages/
│   │   └── adminPrincipalPage.html
│   └──userPages/
│       ├──principalPage.html
│       ├──teamsPage.html
│       └──vehiculos.html
├──scripts/             #Scripts de las paginas, consumo de Apis, Etc.
│   ├──admin/
│   │  └──admin.js   
│   ├── users/
│   │   ├── main.js
│   │   ├── teams.js
│   │   └── vehiculos.js
│   └── script.js
├── storage/                 # Imágenes, fondos e iconos SVG.
├── styles/                  # Archivos CSS para estilizar el proyecto
│   ├── adminStyles/              
│   │   ├── admin.css
│   └── userStyles/
│       └── style.css   
├── index.html           # Página principal
└── README.md            # Documentación del proyecto
```

## Tabla de Contenidos

| Módulo Principales  | Contenido  |
|---------|-----------|
| 1       | [index.html](index.html)  |
| 2       | [fonts](fonts)  |
| 3       | [Html](html)  |
| 4       | [scripts](scripts/)  |
| 5       | [storage](storage/)  |
| 6       | [style](styles/)  |

## Explicacion
- El primer modulo nos muestra el archivo index.html, es el Html de la pagina del login desde donde se ingresa.  
- El segundo modulo nos muestra la carpeta fonts ,es donde se necuentran las fuentes que se utilizaron para las paginas.  
- El tercer modulo nos muestra la carperta de html, en el cual se encuentran los diferentes html para cada pagina y usuario.  
- EL cuarto modulo nos muestra la carpeta de scripts, en la cual estan todos los scripts que se utilizan para las paginas y el consumo de API.  
- El quinto modulo nos muestra la carpeta de storage, en la cual se muestran los iconos, imagenes de fondo y svg.  
- El sexto modulo nos muestra la carpeta de styles, donde se encuentran todos los estilos para las paginas.

## Tecnologías Utilizadas

- HTML para la estructura del contenido.

- CSS3 para el diseño y la estilización de la interfaz.

- Imágenes en formato PNG y SVG para los elementos visuales.

- Tipografías personalizadas almacenadas en la carpeta "fuentes".

- Diseño responsive implementado con @media queries.

- Javascript se utiliza para consumir las Apis y y obtener informacion los recursos desde la web.


> [!NOTE]
> No se utilizan librerías externas; todo el código es nativo de HTML y CSS.

## Instalación y Uso

No se requieren herramientas adicionales para visualizar el proyecto. Sigue estos pasos:

1. Descarga o clona el repositorio.

2. Abre el archivo index.html en tu navegador preferido.

3. Navega a través de los módulos disponibles en la página.
