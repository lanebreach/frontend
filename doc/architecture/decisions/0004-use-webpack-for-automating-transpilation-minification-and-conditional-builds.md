# 4. Use Webpack for Automating Transpilation, Minification, and Conditional Builds

Date: 2019-04-09

## Status

Accepted

## Context

With a significant number of build steps and library inclusions, we wish to have a system capable of walking the dependency graph based on our source files to produce a distribution of browser-readable code without us having to manually upkeep a topological sort of dependencies in the index.html. Additionally, we would like this system to handle the trigger of the transpilation via babel of JSX | ES6 to ES5. We also want to handle minimization concerns. We want this federalized to a single build configuration to retain ease of codebase navigation and onboarding of new developers.

## Decision

We will use Webpack to handle this. It is relatively easy, mature, feature complete, and popular. It has a significant user-base and active development community should we get stuck.

## Consequences

Alternative build methods will likely no longer be maintained. We will essentially expect that the code will be built by Webpack. Documentation of build procedures and orders may slip and the webpack configuration file may become the source of truth for understanding the order of operations in going from code-base to deployable web-site.