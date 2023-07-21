<script setup lang="ts">
    const { restaurant } = defineProps<{ restaurant: Restaurant }>();
</script>

<template>
    <article class="container">
        <div class="container__image">
            <img 
                class="image"
                :src="restaurant.photo ? restaurant.photo : 'https://thumbs.dreamstime.com/z/restaurant-placeholder-vector-icon-symbol-location-isolated-white-background-eps-restaurant-placeholder-vector-icon-symbol-159301079.jpg?w=992'"
            />
        </div>
        <div class="container__content">
            <h2 class="title">{{ restaurant.name }}</h2>
            <div class="address">{{ restaurant.address }}</div>
            <div class="address-info" v-if="restaurant.landmark">
                {{ restaurant.landmark }}
            </div>

            <div class="link-wrapper">
                <router-link :to="`/restaurants/${restaurant.id}`" class="link">
                    Перейти
                </router-link>
            </div>
        </div>
    </article>
</template>

<style scoped>
    .container {
        display: flex;
        padding: 16px;
        border: solid 1px black;
        border-radius: 6px;
    }

    .container__image {
        margin: 8px;
        width: 200px;
        height: 300px;
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px;
    }

    .container__content {
        display: flex;
        flex-direction: column;
    }

    .title {
        margin: 8px;
    }

    .address {
        margin: 8px;
    }

    .address-info {
        margin: 8px;
    }

    .link-wrapper {
        margin-top: auto;
    }

    .link {
        margin: 8px;
        display: inline-block;
        padding: 6px 12px;
        text-decoration: none;
        color: white;
        background-color: green;
        border-radius: 6px;
    }
</style>
