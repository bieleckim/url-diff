<template>
    <div class="compare mt-2">
        <div class="container">
            <h4 v-if="isComparisonsSame" class="text-success">
                They look same
            </h4>
            <h4 v-if="!isComparisonsSame" class="text-warning">
                They look different
            </h4>
            <div v-for="(comparison, index) in comparisons" :key="index">
                <h5 class="text-gray mt-2">{{ comparison.name }}</h5>
                <div
                        class="columns"
                        :class="{
                            'text-success': comparison.isSame
                        }">
                    <div class="column col-6">
                        <difference :from="comparison.first" :to="comparison.second"></difference>
                    </div>
                    <div class="column col-6">
                        <difference :from="comparison.second" :to="comparison.first"></difference>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Difference from '../components/Difference.vue'

    export default {
        name: 'Compare',
        components: {
            Difference
        },
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
        computed: {
            isComparisonsSame: function () {
                return this.comparisons.every(function (comparison) {
                    return comparison.isSame;
                });
            }
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
                const firstUrlProperty = this.firstUrl[property];
                const secondUrlProperty = this.secondUrl[property];

                if (firstUrlProperty === "" && secondUrlProperty === "") {
                    return;
                }

                this.comparisons.push({
                    name: name,
                    first: firstUrlProperty,
                    second: secondUrlProperty,
                    isSame: firstUrlProperty === secondUrlProperty,
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