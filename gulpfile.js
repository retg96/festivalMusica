//IMPORTAMOS GULP
const {series,src,dest} = require('gulp');
const sass = require('gulp-sass');

//FUNCION QUE COMPILA SASS
function css() {
    return src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('./build/css'))
}

exports.css = css;

////////////////////////////////////////////////////////////////////////////
//IMPORTAMOS GULP
// const {series, parallel} = require('gulp');

// function hola(done){
//     console.log('Hola Mundo en Gulp');
//     done();
// }

// // hola();

// function javascript(done){
//     console.log('compilando js');
//     done();
// }

// exports.compilarSASS = hola;
// exports.comp=javascript;
// // exports.tareas = series(compilarSASS,comp);

// //ejecutar por default las funciones
// exports.default = series(compilarSASS,comp);


