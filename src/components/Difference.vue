<template>
    <div class="difference">
        <span
                v-for="(letter, index) in letters"
                :key="index"
                :class="{
                    'text-error': !letter.isSame  && !isLettersSame,
                    'text-success': isLettersSame,
                    'text-warning': letter.isSame && !isLettersSame
                }">
            {{ letter.char }}
        </span>
    </div>
</template>

<script>
    export default {
        name: "Difference",
        props: {
            from: String,
            to: String
        },
        computed: {
            letters: function () {
                let letters = [];

                for (let i = 0; i <= this.from.length; i++) {
                    letters.push({
                        char: this.from.charAt(i),
                        isSame: this.from.charAt(i) === this.to.charAt(i)
                    });
                }

                return letters;
            },
            isLettersSame: function () {
                return this.letters.every(function (letter) {
                    return letter.isSame;
                });
            }
        },
    }
</script>

<style scoped>

</style>
