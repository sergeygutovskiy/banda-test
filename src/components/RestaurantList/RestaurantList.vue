<script setup lang="ts">
    import RestaurantListItem from './RestaurantListItem/RestaurantListItem.vue';
 
    const { restaurants } = defineProps<{ restaurants: Restaurant[] }>();
</script>

<template>
    <div class="list">
        <div v-for="restaurant in restaurants" :key="restaurant.id" class="list-item">
            <RestaurantListItem :restaurant="restaurant" />
        </div>
    </div>
</template>

<style scoped>
    .list {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
    }

    .list-item {
        flex: calc(50% - 8px);
    }
</style>
