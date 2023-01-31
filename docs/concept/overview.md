---
sidebar_position: 1
---

# Basic

*iil* is a representation of work. The goal of iil is to render all levels (from high- to unit-level) of work in a single model. It doesn’t mean that iil doesn’t necessarily render a complex task into a single model, instead describes a condition on when the work is considered as finished, representing an integrity of model. 

Note that here the condition (we call it as *finishIf*) doesn't mean the criteria of success or fail but just termination. We will get that later.

In order to make the work finished you split up a task into multiple subtasks in order to satisfy the condition *finishIf*, convert the subtasks into iils and build a relationship between iils, either parent-child relationship or consequence. 

For example, let's assume that you want to finish reading on the iil model. Then a corresponding iil could be build as follows:

```
actor: you
act: read this documentation
finishIf: read the last line
```

Here *act* describes an action to be performed by *actor* who is responsible for completion of the iil.

It is also possible to recursively break more things down into smaller iils, and the simpler *act* gets the clearer *finishIf*.

In this way, iil model will help you to build a way of thinking how you get things done.

