"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pix_1 = require("./lib/pix");
// Example 01: BRCODE static with defined amount.
var pix = pix_1.PIX.static()
    .setReceiverName('Hiago Silva Souza')
    .setReceiverCity('Rio Preto')
    .setKey('fcba8826-cbff-46e2-8c40-1b39896402a8')
    .setDescription('Donation with defined amount - GPIX') // opcional
    .setReceiverZipCode('15082131') // opcional
    .setIdentificator('123') // opcional
    .setAmount(5.0); // opcional
console.log('\nDonation with defined amount - GPIX >>>>\n', pix.getBRCode());
// Example 02: Static BRCODE, with no defined amount (user types amount) and the defined identifier is 123
pix = pix_1.PIX.static()
    .setReceiverName('Hiago Silva Souza')
    .setReceiverCity('Rio Preto')
    .setKey('nubank@hiago.me')
    .setDescription('Donation without defined amount - GPIX'); // optional
console.log('\nDonation without defined amount - GPIX >>>>\n', pix.getBRCode());
// Example 03: BRCODE dinamic
var dpix = pix_1.PIX.dinamic()
    .setReceiverName('Minha Empresa LTDA')
    .setReceiverCity('Rio Preto')
    .setLocation('url-location-psp')
    .setAmount(10.4); // some PSP are not recovering the amount through the charge. Then temporarily enter the amount to avoid problems.
console.log('\nBRCODE dinamic - GPIX >>>>\n', dpix.getBRCode());
