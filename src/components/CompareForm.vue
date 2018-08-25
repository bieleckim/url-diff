<template>
    <div class="compare-form">
        <form
            id="compare-form"
            @submit.prevent="checkForm"
        >
            <div class="container">
                <div class="columns">
                    <div class="column col-6">
                        <UrlInput
                                :value="firstUrl"
                                :errorMessage="firstUrlErrorMessage"
                                label="First Url"
                                id="first-url"
                                placeholder="http://github.com?a=1"/>
                    </div>
                    <div class="column col-6">
                        <UrlInput
                                :value="secondUrl"
                                :errorMessage="secondUrlErrorMessage"
                                label="Second Url"
                                id="second-url"
                                placeholder="http://github.com?a=2&b=1"/>
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
        data: () => {
            return {
                firstUrl: null,
                secondUrl: null,
                firstUrlErrorMessage: null,
                secondUrlErrorMessage: null
            };
        },
        methods: {
            checkForm: function() {
                if (!this.isValidUrl(this.firstUrl)) {
                    this.firstUrlErrorMessage = INVALID_URL_MESSAGE;
                }

                if (!this.isValidUrl(this.secondUrl)) {
                    this.secondUrlErrorMessage = INVALID_URL_MESSAGE;
                }
            },
            isValidUrl: function (url) {
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
