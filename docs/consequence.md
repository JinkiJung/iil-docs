---
sidebar_position: 3
---

# Consequence

Here is how to model consequences with two *iil* blocks.

![two iil blocks with condition](/img/iil-base+condition.drawio.png)

Note that the *next* of the first *iil* - "want some dessert?" - has a conditional branch which leads two different flows depending on the result. 

*next* aims to provide three benefits:

- Exclusiveness: only completion of the corresponding *iil* triggers the condition check.
    - example: "want some dessert?" check will be triggered when "You eat food!" is finished.
- Privacy: *next* hinder data or variables inside of *iil* while preserves the logic. private data or variables used inside of iil are only accessible for actor, owner and maintainer, not others.
    - example: your weight while you doing "You eat food!" will be kept in secret. 😉
- Readability: Reader can easily follow what triggers to move to next stage and which *iil* will be activated on which condition.

In the execution phase, such consequence model makes user easier to capture which stage they are at and which condition blocks its flow, visualizing the problem to solve.
