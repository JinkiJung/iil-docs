---
sidebar_position: 2
---

# Data structure


iil version 1.0 has a data structure as below:

```
activateIf (condition): condition of activation of iil

actor (string): id of the user responsible for this iil

act (action): action of the user

finishIf (condition): condition of termination of iil

id (string): an unique, UUID string

namespace (string): namespace 

version (string): version of current iil

help (json object): interactive guide when user request

about (json object): metadata of work

goal (string): id of parent iil

input (string): given information can be used in iil

output (string): generated information at the end of iil

maintainer (string): id of user responsible for maintanance of this iil

owner (string): id of user who has ownership of this iil

state (iilState): state of iil

updatedAt (datetime): last time of update

dahmm (list of dahmm): list of possible sequences and its triggering condition
```

Description of the data structures used in here (condition, action, iilState, dahmm) will be provided soon.

