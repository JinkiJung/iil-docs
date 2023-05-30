---
sidebar_position: 1
---

# Concept



Note that here the condition (we call it as *finishIf*) doesn't mean the criteria of success or fail, but just termination. We will get that later.

# Parent-child relationship

In order to make the work finished you split up a task into multiple subtasks in order to satisfy the condition *finishIf*, convert the subtasks into iils and build a relationship between iils, either parent-child relationship or consequence. 

For example, let's assume that you want to finish reading on the iil model. Then a corresponding iil could be build as follows:

```
actor: you
act: read this documentation
finishIf: read the last line
```

Here *act* describes an action to be performed by *actor* who is responsible for completion of the iil.

The iil can be splited into two iils,

```
actor: you
act: read Concept section
finishIf: read the last line of Concept section
```

```
actor: you
act: read Recursive nature section
finishIf: read the last line of Recursive nature
```

It is also possible to recursively break more things down into lower-level iils, and the simpler *act* gets the clearer *finishIf*.

In this way, iil model will help you to describe how you get things done step by step.
