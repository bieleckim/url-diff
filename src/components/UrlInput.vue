<template>
    <div
            class="form-group"
            :class="{ 'has-error': hasError() }"
    >
        <label class="form-label" :for="id">{{ label }}</label>
        <input
                class="form-input"
                @change="onChange"
                v-model="inputValue"
                :id="id"
                type="text"
                :placeholder="placeholder"
                required
                :title="label">
        <p
                v-if="hasError()"
                class="form-input-hint mb-0">
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
        data() {
            return {
                inputValue: this.value
            }
        },
        watch: {
            value (value) {
                this.inputValue = value;
            }
        },
        methods: {
            hasError() {
                return this.errorMessage !== null;
            },
            onChange() {
                this.$emit('update:value', this.inputValue)
            }
        }
    }
</script>
