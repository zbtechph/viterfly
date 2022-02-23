<template>
    <form action="/" method="post" @submit.prevent="$emit('formSubmit')">
        <slot></slot>
        <button type="submit">
            SUBMIT
        </button>
    </form>
</template>

<script setup>
    defineEmits(["formSubmit"])
</script>