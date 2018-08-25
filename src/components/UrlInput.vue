<template>
    <div
            class="form-group"
            :class="{ 'has-error': hasError() }"
    >
        <label class="form-label" :for="id">{{ label }}</label>
        <input
                class="form-input"
                :value="value"
                :id="id"
                type="text"
                :placeholder="placeholder"
                required
                :title="label">
        <p
                v-if="hasError()"
                class="form-input-hint">
            {{ errorMessage }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "UrlInput",
        props: {
            value: String,
            label: String,
            placeholder: String,
            id: String,
            errorMessage: String
        },
        methods: {
            hasError: function () {
                return this.errorMessage !== null;
            }
        }
    }
</script>
