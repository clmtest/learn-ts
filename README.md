# learn-typescript

Repositorio con las bases para aprender typescript

## Crear un nuevo repositorio de Git e inicializarlo con un archivo:
Los siguientes comandos se utilizan para crear un nuevo repositorio de Git e inicializarlo con un archivo README.md:

1. `echo "# learn-typescript" >> README.md`: Este comando crea un archivo README.md y agrega el título "learn-typescript" en la primera línea.

2. `git init`: Inicializa un nuevo repositorio de Git en el directorio actual.

3. `git add README.md`: Agrega el archivo README.md al área de preparación (staging area) de Git. Esto significa que está listo para incluirse en el próximo commit.

4. `git commit -m "first commit"`: Crea un nuevo commit con el mensaje "first commit" que incluye los cambios en el área de preparación (en este caso, el archivo README.md).

5. `git branch -M main`: Renombra la rama actual a "main" (por defecto, la rama principal en Git se llama "master", pero "main" se ha vuelto más común en los últimos años).

6. `git remote add origin https://github.com/user/learn-typescript.git`: Agrega un nuevo repositorio remoto llamado "origin" con la URL proporcionada (reemplaza "user" con tu nombre de usuario de GitHub y "learn-typescript" con el nombre del repositorio que deseas utilizar en GitHub).

7. `git push -u origin main`: Empuja los cambios locales en la rama "main" al repositorio remoto "origin" (en este caso, tu repositorio de GitHub). La opción `-u` establece la rama remota "origin/main" como el seguimiento predeterminado para la rama local "main".


## Para generar un gitignore se puede usar la siguiente ayuda:
[Generar .gitignore recomendados](https://www.toptal.com/developers/gitignore/api/windows,linux,macos,node)

## Inicializar el repositorio con npm

1. `npm init -y`: Comando para inicializar un nuevo proyecto Node.js y crear un archivo package.json con la configuración básica. Puedes editar este archivo más tarde para agregar una descripción, autor y otras metadatos del proyecto.

2. `npm install --save-dev typescript`: Este comando instala TypeScript como una dependencia de desarrollo en tu proyecto.