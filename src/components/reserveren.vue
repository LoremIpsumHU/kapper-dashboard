<template>
    <div>
        <div class="container">
            <p class="name">{{ personId }}</p>
            <p>Kapper: {{ barber }}</p>
            <p>{{ date }}</p>
            <p>{{ treatments }}</p>
            <p>meer...</p>
            <div class="extra">
                <p class="bijz">{{ bijzonderheden }}</p>
                <div class="row">
                    <p class="number">{{ number }}</p>
                    <p class="email">{{ email }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    components: {

    },
    data() {
        return {
            personId: "Edwin",
            barber: "Tobias",
            date: "21/09/2020 om 11:00",
            treatments: "Knippen",
            bijzonderheden: "Ik wil graag veel praten lekker mn verhaal kwijt kunnen",
            number: "06 12995866",
            email: "geen@idee.com",
        }
    },
    mounted() {
        console.log(process.env.ROOT_API)
    },
    methods: {

    },
}
</script>

<style scoped>
* {
    margin: 0 0;
    padding: 0 0;
}
.container {
    margin: 10px;
    padding: 10px;
    width: 100%;
    background-color: rgb(90, 88, 88);
}

.container p {
    font-style: bold;
    font-size: 0.7em;
}

.name {
    font-style: bold;
    font-size: 1em;
}

.extra p {
    font-size: 0.7em;
}
</style>