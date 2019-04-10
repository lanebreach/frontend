# 3. Use Babel for Transpilation of JSX and ES6

Date: 2019-04-09

## Status

Accepted

## Context

React utilizes JSX which is not parsable by any web browser currently in use. This means that a transpilation from JSX to a parsable dialect of ECMAScript needs to occur. Babel is the most popular and feature complete of the transpilers.

ES6 is the next-gen standard of ECMAScript and carries a significant number of imporvements ranging from proper class definitions and OOP style inheritance representaion at a syntactic level to syntactic utilities such as object destructuring.

## Decision

We will use Babel for our (ES6 | JSX) -> ES5 transpilation.

## Consequences

The code-base itself will not be able to be natively run in a browser. This requires anyone desiring to run the project to install the necessary toolchains and follow the requisite build process to produce a browser-parsable website. We accept this minor inconvenece for the significant benefits this provides.