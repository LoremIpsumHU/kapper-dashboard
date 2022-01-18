<template>
    <div>
        <reserveren></reserveren>
        <sidebar></sidebar>
    </div>
</template>

<script>
import reserveren from '../components/reserveren/reserveren.vue'
import sidebar from '../components/sidebar.vue'

export default {
    components: {
        reserveren,
        sidebar,

    },
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>

<style scoped>
    
</style>