# Symlinks

Test to see whether a symlink works with Maestro.

Here, we have two sibling folders, flows and utils. A symlink is created inside the flows folder to the utils folder, so that all of the files required by `flows/flow.yaml` are in the `flows` folder.

## Usage

`maestro test flows/flow.yaml`
