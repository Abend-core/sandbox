<template>
  <form action="" @submit.prevent="addTodo">
    <fieldset role="group">
      <input v-model="newTodo" type="text" placeholder="Tâche à effectuer" />
      <button :disabled="newTodo.length === 0">Ajouter la tâche</button>
    </fieldset>
  </form>
  <div v-if="todos.length === 0">Vous n'avez pas de tâches à faire 😥</div>
  <div v-else>
    <ul>
      <li
        :key="todo.date"
        v-for="todo in sortedTodos"
        :class="{ completed: todo.completed }"
      >
        <label>
          <input type="checkbox" v-model="todo.completed" /> {{ todo.title }}
        </label>
      </li>
    </ul>
  </div>
  <label>
    <input type="checkbox" v-model="hideCompleted" />Masquer les tâches
    complétées
  </label>
  <Checkbox label="Bonjour" />
</template>

<script setup>
import { computed, ref } from "vue";
import Checkbox from "./Checkbox.vue";

// fetch("http://localhost:5000/users", {
//   method: "GET", // Specify the HTTP method
//   headers: {
//     "Content-Type": "application/json", // Indicate the content type of the request body
//   },
// })
//   .then((response) => {
//     // Check if the request was successful
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json(); // Parse the JSON response
//   })
//   .then((data) => {
//     // Handle the response data
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     // Handle any errors that occur
//     console.error("Error:", error);
//   });

const newTodo = ref("");
const hideCompleted = ref(false);
const todos = ref([
  {
    title: "Tâche de test",
    completed: true,
    date: 1,
  },
  {
    title: "Tâche à faire",
    completed: false,
    date: 2,
  },
]);
const addTodo = () => {
  todos.value.push({
    title: newTodo.value,
    completed: false,
    date: Date.now(),
  });
  newTodo.value = "";
};

const sortedTodos = computed(() => {
  const sortedTodos = todos.value.toSorted((a, b) =>
    a.completed > b.completed ? 1 : -1
  );
  if (hideCompleted.value === true) {
    return sortedTodos.filter((t) => t.completed === false);
  }
  return sortedTodos;
});
</script>

<style>
.completed {
  opacity: 0.5;
  text-decoration: line-through;
}
</style>
