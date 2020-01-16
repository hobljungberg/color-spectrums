/**
 * Color - Spectrums
 */


import PixelSpace from 'genera/src/PixelSpace';
import ColorSpectrum from 'genera/src/light/ColorSpectrum';

const workspace = document.querySelector("#workspace");
const canvas = new PixelSpace('#workspace', workspace.clientWidth, workspace.clientHeight);
const spectrum = new ColorSpectrum("RGGBRB");
const period = Math.floor(spectrum.length / canvas.width);

for (let col = 0; col < canvas.width; col++) {
    canvas.setColumn(col, spectrum.color(period * col));
}
