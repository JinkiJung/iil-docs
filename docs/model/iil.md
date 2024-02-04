---
sidebar_position: 1
---

# iil

*iil* is a simple data model defined with a JSON schema below:

```json
{
  "$id": "https://github.com/JinkiJung/iil/blob/main/iil.schema.json",
  "$version": "1.0",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "description": "A work description model.",
  "properties": {
    "id": {
      "type": "string",
      "format": "uuid",
      "description": "An unique identifier for an iil."
    },
    "namespace": {
      "type": "string",
      "description": "a namespace under which the work is categorized."
    },
    "version": {
      "type": "string",
      "description": "a version number of the work."
    },
    "help": {
      "type": "object",
      "additionalProperties": {
        "type": "object"
      },
      "description": "metadata that can be informed to actor in order to lead them to complition of a work"
    },
    "about": {
      "type": "object",
      "additionalProperties": {
        "type": "object"
      },
      "description": "metadata explaining the work itself"
    },
    "goal": {
      "type": "string",
      "format": "uuid",
      "description": "an unique identifier of the parent work."
    },
    "input": {
      "type": "object",
      "additionalProperties": {
        "type": "object"
      },
      "description": "an input required for the work."
    },
    "activateIf": {
      "$ref": "#/$defs/Condition",
      "description": "condition that activates this work."
    },
    "act": {
      "$ref": "#/$defs/Action",
      "description": "action that is expected to be done by actor."
    },
    "actor": {
      "$ref": "#/$defs/Actor",
      "description": "actor who is responsible for task performance."
    },
    "finishIf": {
      "$ref": "#/$defs/Condition",
      "description": "condition under which the task is completed."
    },
    "output": {
      "type": "object",
      "additionalProperties": {
        "type": "object"
      },
      "description": "output produced by the task."
    },
    "variable": {
      "type": "object",
      "additionalProperties": {
        "type": "object"
      },
      "description": "variables associated with the task."
    },
    "maintainer": {
      "type": "string",
      "description": "an ID of maintainer"
    },
    "owner": {
      "type": "string",
      "description": "an ID of owner"
    },
    "state": {
      "type": "string",
      "enum": [
        "NOT_ACTIVATED",
        "ACTIVATED",
        "PENDING",
        "FINISHED",
        "ABORTED"
      ],
      "description": "a state of iil"
    },
    "abortIf": {
      "$ref": "#/$defs/Condition",
      "description": "condition of abortion (mostly due to external factor)"
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time",
      "description": "time of last update"
    },
    "next": {
      "type": "object",
      "additionalProperties": {
        "type": "object"
      },
      "description": "next task(s) to be performed after the current task."
    }
  },
  "$defs" : {
    "Action": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid"
        },
        "namespace": {
          "type": "string"
        },
        "version": {
          "type": "string"
        },
        "shortName": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "code": {
          "type": "string"
        }
      }
    },
    "Actor": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid"
        },
        "name": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "iconLink": {
          "type": "string"
        },
        "actorList": {
          "uniqueItems": true,
          "type": "array",
          "items": {
            "$ref": "#/$defs/Actor"
          }
        },
        "group": {
          "type": "boolean"
        }
      }
    },
    "Condition": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid"
        },
        "namespace": {
          "type": "string"
        },
        "version": {
          "type": "string"
        },
        "shortName": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "type": {
          "type": "string",
          "enum": [
            "TIME",
            "LOCATION",
            "IIL_INPUT",
            "IIL_VARIABLE",
            "IIL_STATE",
            "EVENT"
          ]
        },
        "code": {
          "type": "string"
        }
      }
    }
  }
}
```

Up-to-date version of iil model is maintained at https://github.com/JinkiJung/iil.


## Attributes

Here you can find more comprehensive explanation of each attribute associated with different context.

### for work description

- `UUID goal;` : Unique identifier for the goal that the task is associated with.

- `Condition activateIf;` : The condition under which the task is activated.

- `Action act;` : The action that the task performs.

- `Actor actor;` : The actor who performs the task.

- `Condition finishIf;` : The condition under which the task is completed.

- `Map<String, Object> input;` : The input required for the task.

- `Map<String, Object> output;` : The output produced by the task.

- `Map<String, Object> next;` : The next task to be performed after the current task.

- `Map<String, Object> variable;` : Variables associated with the task.

### for metadata

- `UUID id;` : Unique identifier for the task.

- `String namespace;` : The namespace under which the task is categorized.

- `String version;` : Version number of the task.

- `String maintainer;` : The person or entity responsible for maintaining the task.

- `String owner;` : The owner of the task.

- `IilState state;` : The current state of the task.

- `LocalDateTime updatedAt;` : The timestamp of when the task was last updated.

- `Map<String, Object> about;` : Description of the task.

### for interaction handling

- `Map<String, Object> help;` : Information that is provided when user requests for help.


### for exception handling

- `Condition abortIf;` : The condition under which the task is aborted.