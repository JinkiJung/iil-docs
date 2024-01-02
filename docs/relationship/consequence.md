---
sidebar_position: 2
---

# Consequence

*iil*'s conditional branching mechanism enables the modeling of cause-and-effect or consequence relationships between tasks.

This feature facilitates a more dynamic and adaptable approach to task management, allowing for seamless transitions between tasks based on predefined criteria.

The simplest example is an iil triggering another iil as a next step.

![two iil blocks](/img/iil-consequence.drawio.png)

Note that the cause iil block's *finish if* coincides with the *activate if* of the effect one, which triggers both end of one sequence and beginning of another one.


## Consequence with Next as condition

In a bit complicated setup, we can utilize a condition called *next* to control a consequence flow.

![two iil blocks with condition](/img/iil-base+condition.drawio.png)

Note that the *next* of the first iil - "want some dessert?" - has a conditional branch which leads two different flows depending on the result. 

*next*, iil's conditional branching mechanism, enables the modeling of cause-and-effect or consequence relationships between tasks, providing a more dynamic and adaptable approach to task management. This feature offers three key benefits:

- Exclusiveness: Only the completion of the relevant iil triggers the condition check, ensuring that transitions are based on consistent completion criteria.
    - Example: The "want some dessert?" check will only be triggered after the completion of the iil for "You eat food!", preventing any premature progression.

- Privacy: Private data or variables used within each iil remain shielded from unauthorized access, while the underlying logic remains accessible for all relevant parties.
    - Example: Internal data used during "You eat food!" is only accessible for the actor, owner, and maintainer, protecting sensitive information. Only *output* data produced at its termination will be accessable from *next*.

- Readability: The conditional branching structure enhances readability, making it easier for users to understand the flow of tasks and the conditions that trigger transitions.

In the execution phase, such consequence model makes user easier to capture which stage they are at and which condition blocks its flow, visualizing the problem to solve.
