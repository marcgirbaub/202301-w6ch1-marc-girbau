# DATA

## Data layer

- list of todos:
  - id
  - name
  - isDone

## Data modifications

- load todos
- toggle todo isDone
- delete todo
- add todo

# COMPONENTS

## APP

- Shows title "To Do List" with heading
- Shows Form component
- Shows TodoList component

## FORM

- Receives the add todo action
- Shows an input for the new todo name with the label "Name:"
- Shows the create button to submit the form
- On submit executes the received add todo action

## TODOLIST

- Receives the list of todos
- Show a Todo component for each todo in the received list
- Sends a todo to each Todo component

## TODO

- Receives a todo
- Shows the name of the todo
- Shows button component to toggle todo
- Shows button component to delete todo
- Sends "✅" icon to button component thats toggles todo if todo is done
- Sends "☑️" icon to button component thats toggles todo if todo is not done
- Sends "❌" icon to button component thats deletes todo

## BUTTON

- Receives an icon
- Receives an action
- Shows the received icon inside a button
- on click executes the received action
