<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
 
    const restaurant = ref<Restaurant>();
    const isReposted = ref<boolean>(false);

    const getRestaurant = async (id: string) => {
        try {
            const response = await fetch(`https://bandaumnikov.ru/api/test/site/get-view?id=${id}`);
            restaurant.value = (await response.json()).data;
        } catch(e) {
            console.error(e);
        }
    };

    onMounted(() => {
        const id = route.params.id;
        if (!id || id instanceof Array) return;

        getRestaurant(id);
    });

    const marks = computed(() => {
        const marks: string[] = [];
        if (!restaurant.value) return marks;

        if (restaurant.value.landmark) {
            marks.push(`Как дойти: ${restaurant.value.landmark}`);
        }

        if (restaurant.value.cuisine) {
            marks.push(`Кухня: ${restaurant.value.cuisine}`);
        }

        if (restaurant.value.business_lunch) {
            marks.push('Есть бизнес-ланч');
        }

        return marks;
    });

    const repost = () => {
        if ( !navigator || !navigator.clipboard || !navigator.clipboard.writeText ) return;
        
        navigator.clipboard.writeText(window.location.href);
        isReposted.value = true;
    };
</script>

<template>
    <div v-if="restaurant" class="container">
        <div v-if="restaurant.photo" class="container__image" >
            <img :src="restaurant.photo" class="image" />
        </div>
        <div class="container__content">
            <h1 class="title">{{ restaurant.name }}</h1>
        
            <div class="address">
                {{ restaurant.address }}
            </div>

            <div class="marks">
                <span v-for="(mark, index) in marks" :key="index" class="mark">
                    {{ mark }}
                </span>
            </div>

            <div class="button-wrapper">
                <router-link to="/" class="button">
                    Вернуться
                </router-link>

                <button class="button" @click="repost">
                    {{ isReposted ? 'Скопировано в буффер обмена!' : 'Поделиться' }}
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        gap: 32px;
    }

    .container__image {
        margin: 16px;
        flex: calc(50% - 16px);
        max-width: 600px;
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
        margin: 16px;
    }

    .address {
        margin: 8px 16px;
        text-transform: uppercase;
    }

    .marks {
        margin: 16px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .mark {
        padding: 6px 12px;
        text-transform: lowercase;
        color: white;
        background-color: lightskyblue;
        border-radius: 6px;
    }

    .button-wrapper {
        margin-top: auto;
        display: flex;
    }

    .button {
        margin: 16px;
        display: inline-block;
        text-transform: uppercase;
        
        font-family: inherit;
        font-size: inherit;
        color: black;
        
        background-color: transparent;
        border: none;
        border-radius: 6px;
    
        cursor: pointer;
    }
</style>
