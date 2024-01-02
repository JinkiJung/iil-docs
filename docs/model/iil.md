---
sidebar_position: 1
---

# iil

*iil* is defined as JSON with the attributes below:

## for work description

- `UUID goal;` : Unique identifier for the goal that the task is associated with.

- `Condition activateIf;` : The condition under which the task is activated.

- `Action act;` : The action that the task performs.

- `Actor actor;` : The actor who performs the task.

- `Condition finishIf;` : The condition under which the task is completed.

- `Map<String, Object> input;` : The input required for the task.

- `Map<String, Object> output;` : The output produced by the task.

- `Map<String, Object> next;` : The next task to be performed after the current task.

- `Map<String, Object> variable;` : Variables associated with the task.

## for meta data

- `UUID id;` : Unique identifier for the task.

- `String namespace;` : The namespace under which the task is categorized.

- `String version;` : Version number of the task.

- `String maintainer;` : The person or entity responsible for maintaining the task.

- `String owner;` : The owner of the task.

- `IilState state;` : The current state of the task.

- `LocalDateTime updatedAt;` : The timestamp of when the task was last updated.

- `Map<String, Object> about;` : Description of the task.

## for interaction handling

- `Map<String, Object> help;` : Information that is provided when user requests for help.


## for exception handling

- `Condition abortIf;` : The condition under which the task is aborted.