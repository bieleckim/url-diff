<template>
    <div class="compare-form">
        <form
            id="compare-form"
            @submit.prevent="checkForm"
        >
            <div class="container">
                <div class="columns">
                    <div class="column col-6" v-for="(urlField, index) in urlFields" :key="index">
                        <UrlInput
                                :value.sync="urlField.value"
                                :errorMessage="urlField.errorMessage"
                                :label="urlField.label"
                                :id="urlField.id"
                                :placeholder="urlField.placeholder"/>
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
    import { INVALID_URL_MESSAGE } from './../messages';

    export default {
        name: 'CompareForm',
        components: {
            UrlInput
        },
        data() {
            return {
                urlFields: [
                    {
                        value: null,
                        errorMessage: null,
                        label: 'First Url',
                        id: 'first-url',
                        placeholder: 'http://github.com?a=2&b=1'
                    },
                    {
                        value: null,
                        errorMessage: null,
                        label: 'Second Url',
                        id: 'second-url',
                        placeholder: 'http://github.com?a=1'
                    },
                ],
            };
        },
        methods: {
            checkForm() {
                let isValid = true;

                for (let index in this.urlFields) {
                    let urlField = this.urlFields[index];

                    if (!this.isValidUrl(urlField.value)) {
                        urlField.errorMessage = INVALID_URL_MESSAGE;
                        isValid = false;
                        continue;
                    }

                    urlField.errorMessage = null;
                }

                if (isValid) {
                    alert('move to compare view');
                }

                return false;
            },
            isValidUrl(url) {
                try {
                    new URL(url);
                } catch (error) {
                    return false;
                }

                return true;
            }
        }
    }
</script>

<style scoped>
    label {
        text-transform: uppercase;
        font-size: 12px;
    }
</style>
