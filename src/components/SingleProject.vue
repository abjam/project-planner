<template>
  <div class="project" :class="{complete: prj.complete}">
    <div class="actions">
      <h3 @click="handleDetails">{{ prj.title }}</h3>
      <div class="icons">
        <span class="material-icons">edit</span>
        <span class="material-icons" @click="changeComplete">done</span>
        <span class="material-icons" @click="deleteProject">delete</span>
      </div>
    </div>
    <div class="details" v-if="showDetails">
        <p>{{ prj.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['prj'],
    data() {
      return {
        showDetails: false,
        uri: 'http://localhost:3000/projects/' + this.prj.id  
      }
    },
    methods: {
        handleDetails() {
            this.showDetails = !this.showDetails
        },
        deleteProject() {
            fetch(this.uri, {method: 'DELETE'})
                .then(() => this.$emit('delete', this.prj.id))
                .catch(err => console.log(err.message));
        },
        changeComplete() {
            fetch(this.uri, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({complete: !this.prj.complete})
            })
                .then(() => this.$emit('complete', this.prj.id))
                .catch(err => console.log(err.message));
        }
    }
}
</script>

<style>
.project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    border-left: 4px solid #e90074;
}
h3 {
    cursor: pointer;
}
.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
}
.material-icons:hover {
    color: #777;
}
.project.complete {
    border-left: 4px solid #00ce89;
}
</style>