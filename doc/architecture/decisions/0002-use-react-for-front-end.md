# 2. Use React for Front-End

Date: 2019-04-09

## Status

Accepted

## Context

We would like to pick a reasonable, modern, web-framework with the following general properties:

1. It should be reasonably feature complete. We should not have to go down the path of merging several heavy, opinionated libraries to achieve a modern, single-page, web-application.

2. It should support a reasonable MVC-esque separation of concerns to encourage modular software design and component reuse.

3. It should be popular enough that new developers coming onto the project require neither arcane skills nor detrimental levels of hand-holding. i.e.: stack-overflow and others should have a reasonable knowledge base around the answers. a.k.a.: an active user-base and community.

## Decision

We have decided in favour of FB's React as it satisfies the above. We have decided against the use of Angular or Vue as that is not what the current development team knows.

## Consequences

This is significant design decisions which is reasonably irreversable. React implies a given ecosystem of packages and components, as well as a general philosophy of design. This will not be easily undone--and we accept that.