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
    import UrlInput from '../components/UrlInput.vue';
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
                        placeholder: 'http://github.com?a=2&b=1',
                        url: null
                    },
                    {
                        value: null,
                        errorMessage: null,
                        label: 'Second Url',
                        id: 'second-url',
                        placeholder: 'http://github.com?a=1',
                        url: null
                    },
                ],
            };
        },
        methods: {
            checkForm() {
                let isValid = true;

                for (let index in this.urlFields) {
                    let urlField = this.urlFields[index];

                    try {
                        urlField.url = new URL(urlField.value);
                    } catch (error) {
                        urlField.errorMessage = INVALID_URL_MESSAGE;
                        isValid = false;
                        continue;
                    }

                    urlField.errorMessage = null;
                }

                if (isValid) {
                    this.$router.push({ name: 'compare', params: {
                        first: this.urlFields[0].value,
                        second: this.urlFields[1].value
                    }})
                }

                return false;
            },
        }
    }
</script>
