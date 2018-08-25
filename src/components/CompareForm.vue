<template>
    <div class="compare-form">
        <form>
            <div class="container">
                <div class="columns">
                    <div class="column col-6">
                        <UrlInput label="First Url" id="first-url" placeholder="http://github.com?a=1"></UrlInput>
                    </div>
                    <div class="column col-6">
                        <UrlInput label="Second Url" id="second-url" placeholder="http://github.com?a=2&b=1"></UrlInput>
                    </div>
                    <div class="column col-12 mt-2">
                        <button type="submit" class="btn btn-primary btn-block">Compare</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import UrlInput from './UrlInput.vue';

    export default {
        name: 'CompareForm',
        components: {
            UrlInput
        }
    }
</script>

<style scoped>
    label {
        text-transform: uppercase;
        font-size: 12px;
    }
</style>
