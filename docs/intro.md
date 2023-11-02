---
sidebar_position: 1
---

# Introduction

*iil* is a work description model for human. 
The goal of iil is to render all levels (from high- to unit-level) of work in a single representation.
It's similar to playing with Lego blocks that can be easily assembled and customized.

The importance of *iil* is to state responsibility and where or how a work should be started or finished. Also it is possible to represent the relationship between iils such as consequence or super/subtask. 

*iil* can help people understand tasks through a clear and concise representation of work which can be used to effectively communicate about work across all levels of an organization.

## Usage of Task Model in Planning and Execution Phases

The *iil* model plays a crucial role in both planning and execution phases of a process.

During the planning phase, the *iil* model aids in the formulation of tasks by providing a structured format to define all necessary attributes of a task. The `goal` represents which *iil* is associated as a parent *iil*, which aims to describe a higher level goal. The `about` attribute can be used to describe the task to give better information for `actor` and others, while the `maintainer` and `owner` attributes identify the people or entities responsible for maintaining the task. Furthermore, the `variable` attribute allows for the definition of any additional variables associated with the task.

During the execution phase, *iil* model becomes pivotal in managing and tracking the progress of each task. The `actor` clarifies who is responsible to this task. The `state` attribute is used to record the current status of the task, which can be updated as the task progresses. The `output` attribute captures the results produced by a task, while the `next` attribute determines the subsequent task to be performed. In addition, the *iil* model includes `activateIf` and `finishIf` conditions which transfer *iil*'s state into activated and finished, respectively. This allows for dynamic control of the *iil*'s lifecycle based on the real-time progress and outcomes. The `help` attribute can be used to interactively provide additional information for users to accomplish the condition for `finishIf`. Finally, the `updatedAt` attribute ensures that the most recent update time of each task is recorded for tracking purposes.

*iil* applies event-driven nature in order to handle conditions such as `activateIf` and `finishIf`.

