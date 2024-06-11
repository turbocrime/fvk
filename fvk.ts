/// <reference types="node">

import { Buffer } from "node:buffer";
import { bech32mFullViewingKey } from '@penumbra-zone/bech32m/penumbrafullviewingkey';

const base64Key = process.argv[2];
const binkey = Buffer.from(base64Key, 'base64');
console.log(bech32mFullViewingKey({ inner: binkey }))
