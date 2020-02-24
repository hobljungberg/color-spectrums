/**
 * Color - Spectrums
 */


import CanvasSpace from 'genera/src/spaces/CanvasSpace';
import ColorSpectrum from 'genera/src/light/ColorSpectrum';
import Collection from 'genera/src/combine/Collection';

const workspace = document.querySelector("#workspace");
const dashboard = document.querySelector("#dashboard");

const canvas = new CanvasSpace('#workspace', workspace.clientWidth, workspace.clientHeight);
const spectrums = new Collection('RRGGBB').permute();
const spectrum = new ColorSpectrum(spectrums[Math.round(Math.random() * spectrums.length)]);
const period = Math.floor(spectrum.length / canvas.width);

dashboard.innerText = spectrum.permutation;

for (let col = 0; col < canvas.width; col++) {
    canvas.setColumn(col, spectrum.color(period * col));
}
