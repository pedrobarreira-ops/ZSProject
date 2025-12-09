# Workflow Status Instructions

## Purpose
The workflow-status system helps track where you are in your project workflow and what you should do next.

## Usage
1. Read the `bmm-workflow-status.yaml` file in your output folder
2. Check the `current_phase` and `next_steps` sections
3. Follow the guidance provided
4. Update the status file as you progress

## Status File Location
The status file is located at: `{output_folder}/bmm-workflow-status.yaml`

## Phases
- **init**: Initial project setup
- **planning**: Requirements and planning phase
- **design**: Architecture and design phase
- **development**: Active development phase
- **testing**: Testing and QA phase
- **deployment**: Deployment and release phase
- **maintenance**: Ongoing maintenance phase

## Updating Status
When you complete a task or phase:
1. Update the `current_phase` field
2. Add an entry to `workflow_history`
3. Update `next_steps` with new actions
4. Add any relevant notes
