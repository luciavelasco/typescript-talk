
1. `npm i typescript --save-dev`

2. `npm install @types/node --save-dev`

3. `node ./node_modules/typescript/lib/tsc --init` or manually create a `tsconfig.json` file that looks like this:
```
{
  "compilerOptions": {
    "target": "es2015",
    "module": "commonjs",
    "strict": true
  }
}
```

4. `npm install ts-node --save-dev`

5. `npm install nodemon --save-dev`


6. `npm run build`

7. `node ./index.js`