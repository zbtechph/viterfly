<template>
    <div>
        <label v-text="label"></label>
        <input :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    </div>
</template>

<script setup>
    defineProps({
        type: String,
        label: String,
        modelValue: String
    })
    defineEmits(["update:modelValue"])
</script>