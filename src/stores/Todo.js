import { defineStore } from 'pinia';
import { onMounted, computed, ref } from 'vue';

export const useTodoStore = defineStore('todo', () => {
  const loading = ref(false);
  const error = ref(false);
  const todos = ref([]);
  const searchTitle = ref('');
  const titleSearch = computed(() => {
    return todos.value.filter((item) => {
      return String(item.title).includes(searchTitle.value);
    });
  });
  const checkData = computed(() => {
    return todos.value.length > 0 ? '' : 'data not found';
  });
  const fetchTodos = () => {
    loading.value = true;
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        loading.value = false;
        todos.value = json;
      });
  };
  onMounted(() => {
    fetchTodos();
  });
  return { loading, error, todos, searchTitle, titleSearch, checkData };
});
