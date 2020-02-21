/**
 * Color - Spectrums
 */


import PixelSpace from 'genera/src/PixelSpace';
import ColorSpectrum from 'genera/src/light/ColorSpectrum';
import Collection from 'genera/src/combine/Collection';

const workspace = document.querySelector("#workspace");
const canvas = new PixelSpace('#workspace', workspace.clientWidth, workspace.clientHeight);
const spectrum = new ColorSpectrum("RGGBRB");
const period = Math.floor(spectrum.length / canvas.width);

//const spectrums = new Collection(['r', 'g', 'b', 'r', 'g', 'b']).combinations;
const spectrums = new Collection(['r', 'r', 'g', 'g', 'b', 'b']).combinations().map(combo => combo.reduce((a,b) => a + b));

console.log(spectrums);

//for (let col = 0; col < canvas.width; col++) {
    //canvas.setColumn(col, spectrum.color(period * col));
//}
