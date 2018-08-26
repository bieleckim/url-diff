<template>
    <div class="compare">
        Compare {{ first }} with {{ second }}.
    </div>
</template>

<script>
    export default {
        name: 'Compare',
        props: {
            first: String,
            second: String
        }
    }
</script>
