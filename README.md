# NCC Debounce

This project automatically extract the ESM version of debounce from the [original source](https://github.com/jashkenas/underscore/blob/master/modules/debounce.js) when a new version of Underscore releases (checks daily).

## Why is there no dependencies?

`@vercel/ncc` bundle them all in a single JS file. Thus, all dependencies are marked as "dev".
