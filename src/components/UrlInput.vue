<template>
    <div class="form-group">
        <label class="form-label" :for="id">{{ label }}</label>
        <input
                class="form-input"
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
            label: String,
            placeholder: String,
            id: String
        }
    }
</script>
