#Intro

In the beginning there was ES5…

ES is loosely and dynamically typed - this means that the compiler doesn’t know a variable’s type at compile time,
I can treat an object like a string all the way until I actually run it and it might not even complain if it turns
into something REALLY dodgy - you’ve seen “wat”.

TS incorporated the proposals for ES6 and also added a static typing system (which runs at compile time, allowing
you and your IDE to leverage this in realtime and catching bugs at compile time). It was developed in part by
Anders Hejlsberg (known as the father of C#) and is maintained by Microsoft. It first appeared as version 8.0.0 in
2012, then 1.0.0 was released in 2014 and 2.0.0 in 2016.

Some of its popularity now is attributed to Angular, who converted to Typescript early on, which was seen as a ringing
endorsement from people who ought to know what they're doing.

## Setting up a typescript project

Starting up a TypeScript project is pretty easy.

In your project directory run: `npm i typescript --save-dev`
Create `[filename].ts`
Run `tsc` to compile typescript to javascript files, or `tsc -d` to also `[filename].d.ts` files, which will contain your files.
To run your typescript, just run the compiled JS as you usually would: `node ./[filename].js`!

Once you've gotten started you can look into compiler options, building a `tsconfig.json` and other typescript related modules to play around with.