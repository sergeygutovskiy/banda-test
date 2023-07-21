<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';
    import RestaurantList from '../../components/RestaurantList/RestaurantList.vue';

    const restaurants = ref<Restaurant[]>([]);

    const getRestaurants = async () => {
        try {
            const response = await fetch('https://bandaumnikov.ru/api/test/site/get-index');
            restaurants.value = (await response.json()).data;
        } catch (e) {
            console.error(e);
        }
    };

    onMounted(() => {
        getRestaurants();
    });

    const getRandomId = computed(() => {
        const randomIndex = Math.floor( Math.random() * (restaurants.value.length - 1) );
        return restaurants.value[randomIndex].id;
    });

</script>

<template>
    <div v-if="restaurants.length > 0">
        <RestaurantList :restaurants="restaurants" />
    
        <router-link :to="`/restaurants/${getRandomId}`" class="random-link">
            Выбрать случайно
        </router-link>
    </div>
</template>

<style scoped>
    .random-link {
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);

        padding: 24px;

        white-space: nowrap;
        text-transform: uppercase;
        font-size: 24px;
        color: white;

        background-color: lightskyblue;
        border-radius: 6px;
    }
</style>
