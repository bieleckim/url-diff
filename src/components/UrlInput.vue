<template>
    <div class="form-group">
        <label class="form-label" :for="id">{{ label }}</label>
        <input
                class="form-input"
                :value="value"
                :id="id"
                type="text"
                :placeholder="placeholder"
                required
                :title="label"
        >
    </div>
</template>

<script>
    export default {
        name: "UrlInput",
        props: {
            value: String,
            label: String,
            placeholder: String,
            id: String
        }
    }
</script>
