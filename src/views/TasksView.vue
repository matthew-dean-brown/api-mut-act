<template>
    <div>
        <h1>This is the tasks page</h1>
        <p v-for="a of $store.state.tasks" :key="a.id">
            {{ a.taskName}}
        </p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>