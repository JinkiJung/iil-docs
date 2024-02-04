---
sidebar_position: 1
---

# Introduction

Imagine a world where work descriptions transcend complexity, easily understood by individuals and teams across all levels of an organization. This is the vision behind the innovative **iil** model, a data-driven approach to representing work at every stage, from broad goals to granular tasks.

At its core, iil aims to revolutionize how we describe work by rendering all levels of work in a single, unified representation. This means ditching the siloed view of tasks and projects, allowing us to grasp the big picture alongside the intricate details.

But what truly sets iil apart is its focus on defining *completion criteria*. By clearly stating the specific conditions under which a work item is considered "**done**", iil eliminates ambiguity and ensures everyone is on the same page. This empowers individuals to track progress effectively and hold themselves accountable.

However, iil doesn't stop there. It also introduces two types of relationships between work items: **consequence** and **composition**. These capture the natural flow of work, depicting how tasks depend on each other and how subtasks contribute to larger goals. In simpler terms, think of "subtasks" as the building blocks that bring your "big picture" to life.

The impact of iil is profound. This clear and concise representation of work enables several key benefits:

- **Enhanced understanding**: Teams gain a shared understanding of what needs to be done, how it interconnects, and when it's complete. This fosters collaboration and reduces confusion.
- **Effective communication**: iil facilitates clear communication across all levels, from team members to executives. Everyone speaks the same language, ensuring alignment and reducing miscommunication.
- **Improved efficiency**: With a transparent view of work and clear completion criteria, individuals and teams can prioritize tasks effectively and optimize their efforts.
- **Greater accountability**: Defined completion criteria empower individuals to track progress and hold themselves accountable for results.

Whether you're a seasoned professional or a newcomer to the workforce, iil empowers you to understand and contribute to work with clarity and effectiveness. By providing a universal language for describing work, iil bridges the gap between different levels and functions, paving the way for a more collaborative and productive work environment.

## Usage of iil Model in Planning and Execution Phases

The *iil* model plays a crucial role in both planning and execution phases of a process.

During the planning phase, the *iil* model aids in the formulation of tasks by providing a structured format to define all necessary attributes of a task. The `goal` represents which *iil* is associated as a parent *iil*, which aims to describe a higher level goal. The `about` attribute can be used to describe the task to give better information for `actor` and others, while the `maintainer` and `owner` attributes identify the people or entities responsible for maintaining the task. Furthermore, the `variable` attribute allows for the definition of any additional variables associated with the task.

During the execution phase, *iil* model becomes pivotal in managing and tracking the progress of each task. The `actor` clarifies who is responsible to this task. The `state` attribute is used to record the current status of the task, which can be updated as the task progresses. The `output` attribute captures the results produced by a task, while the `next` attribute determines the subsequent task to be performed. In addition, the *iil* model includes `activateIf` and `finishIf` conditions which transfer *iil*'s state into activated and finished, respectively. This allows for dynamic control of the *iil*'s lifecycle based on the real-time progress and outcomes. The `help` attribute can be used to interactively provide additional information for users to accomplish the condition for `finishIf`. Finally, the `updatedAt` attribute ensures that the most recent update time of each task is recorded for tracking purposes.

*iil* applies event-driven nature in order to handle conditions such as `activateIf` and `finishIf`.

