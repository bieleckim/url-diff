<template>
    <div class="compare">
        <div class="container">
            <div v-for="(comparison, index) in comparisons" :key="index">
                <h5 class="text-gray mt-2">{{ comparison.name }}</h5>
                <div class="columns" :class="{ 'text-success': comparison.isSame }">
                    <div class="column col-6">
                        {{ comparison.first }}
                    </div>
                    <div class="column col-6">
                        {{ comparison.second }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Compare',
        props: {
            first: String,
            second: String
        },
        data() {
            return {
                firstUrl: null,
                secondUrl: null,
                comparisons: []
            };
        },
        created() {
            this.firstUrl = new URL(this.first);
            this.secondUrl = new URL(this.second);
            this.createSimpleComparison('Protocol', 'protocol');
            this.createSimpleComparison('Hostname', 'hostname');
            this.createSimpleComparison('Port', 'port');
        },
        methods: {
            createSimpleComparison(name, property) {
                this.comparisons.push({
                    name: name,
                    first: this.firstUrl[property],
                    second: this.secondUrl[property],
                    isSame: this.firstUrl[property] === this.secondUrl[property],
                });
            },
        }
    }
</script>

<style scoped>
    h5 {
        text-transform: uppercase;
        font-size: 14px;
    }
</style>