<template>
    <div class="page">
        <router-view />
    </div>
</template>

<style scoped>
    .page {
        padding: 24px;
    
        @media screen and (max-width: 768px) {
            padding: 12px;
        }
    }
</style>