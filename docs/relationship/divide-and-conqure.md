---
sidebar_position: 1
---

# Composite

*iil* employs a unified modeling approach for both tasks and subtasks, effectively leveraging the Composite Design Pattern.

Each iil instance, regardless of its level in the hierarchy, can be treated consistently, eliminating the need for separate modeling for tasks and subtasks.

This approach allows for a more streamlined and maintainable codebase.

*iil* has an attribute `goal` to make reference to its composite or a parent *iil*.

![Decompose 'You eat food!' into two child *iil*s](/img/iil-base-dnq.drawio.png)

*iil*'s unified model simplifies task management by enabling users to represent both high-level and low-level tasks using the same structure. 

This seamless approach facilitates effortless breakdown of work into smaller units during planning, allowing users to maintain a consistent perspective throughout the entire process.

Moreover, during execution, *iil* seamlessly connects tasks to their overarching goals, keeping users intimately aware of the purpose behind each step.
