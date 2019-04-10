# 5. Use Express.js for REST API Server

Date: 2019-04-09

## Status

Accepted

## Context

A general separation of concerns for any modern web application is that of the presentation and client-side state management from the data and the server-side state management. While custom messaging protocols could certainly be defined for this. Most user applications fit will (or can be easily shoe-horned into) an MVC front-end with a RESTful back-end. It is therefore sensible to use the framework of a REST API to standardize the transactions between the front and back ends of the application.

There are many REST API backends that we could use. Python has Flask and Falcon. Rust has Rocket. Javascript has Express.js, and a plethora of others.

We have a few desires, however:

1. Minimize the amount of context switching for developers.
2. Minimize new developer on-boarding induced operational overhead.
3. Minimize time spent in the design, development, and test of network serialization / deserialization of objects.
4. Minimize the time invested into handling endpoint exposure / routing

Express.js is a Node.js library for handling very easy REST API production using a continuation passing style encouraging a chain of responsibility design pattern for endpoint implementation. It makes REST API definitions fairly trivial and has a rich community of developers and middleware libraries available for consumption.

## Decision

We will use Express.js for any web-app back-end concerns. If we need to consume other APIs the front-end can do so by utilizing this Express backend as a proxy and transform of those APIs--which will simultaneously decouple our front-end implementation from changing API specs on the back-end.

## Consequences

This adds an additional layer of complexity in build and deploy as we now have another software component that needs to be run, instrumented, and managed along with the front-end component.