<template>
  <h1>Edit</h1>
  <form @submit.prevent="handleSubmit">
    <label>Title: </label>
    <input type="text" required v-model="title">
    <label>Details: </label>
    <textarea v-model="details"></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
        title: '',
        details: '',
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects/' + this.id)
        .then(res => res.json())
        .then(data => {
            this.details = data.details
            this.title = data.title
        })
        .catch(err => console.log(err.message))
  },
  methods: {
    handleSubmit() {
      let project = {
        title: this.title,
        details: this.details
      }

      fetch('http://localhost:3000/projects/' + this.id, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(project)
            })
            .then(data => {
                this.details = data.details
                this.title = data.title
            })
            .then(() => {                
                this.$router.push('/')
            })
            .catch(err => console.log(err.message));
    }
  }
}
</script>

<style>

</style>