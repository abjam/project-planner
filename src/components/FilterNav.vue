<template>
  <nav class="filter-nav">
    <button @click="filterButton('all')" :class="{active: current === 'all'}">View all</button>
    <button @click="filterButton('completed')" :class="{active: current === 'completed'}">Completed</button>
    <button @click="filterButton('ongoing')" :class="{active: current === 'ongoing'}">Ongoing</button>
  </nav>
</template>

<script>
export default {
  props: ['current'],
  methods: {
    filterButton(by) {
        this.$emit('filterChange', by)
    }
  }
}
</script>

<style>
    .filter-nav button {
        background: none;
        border: none;
        color: #bbb;
        outline: none;
        font-size: 12px;
        text-transform: uppercase;
        margin-right: 10px;
        letter-spacing: 1px;
        font-weight: bold;
        cursor: pointer;
    }
    .filter-nav button.active {
        color: #555;
    }
</style>