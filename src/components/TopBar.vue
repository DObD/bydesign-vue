<template>
    <div class="topbar">

        <div class="topbar-inner">
            <img src="../assets/logo/dd-face-round.svg" class="topbar-logo" alt="Logo">
            <!-- <topbar-sites v-if="displayIcon" />
            <topbar-preview-link v-if="displayIcon" />
            <topbar-notification />
            <topbar-dropdown /> -->
            <navigation />
        </div>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  name: 'topbar',
  components: {
    navigation: Navigation
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

.topbar {
    background: $color-9;
    font-size: 1.6rem;
    // height: 8.4rem;
    position: absolute;
    top: 0;
    -webkit-app-region: no-drag;
    -webkit-user-select: none;
    width: 100%;

    & > .topbar-inner {
        background: $color-10;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
        display: flex;
        align-items: center;
        padding: 0 5rem;
        position: absolute;
        // top: 2.2rem;
        width: 100%;
        z-index: 102;
    }

    &-logo {
        display: block;
        height: 4rem;
        margin-right: auto;
        width: 4rem;
        padding-top: .5rem;
        padding-bottom: .5rem;
    }
}

body[data-os="win"] {
    .topbar {
        height: 9.8rem;

        & > .topbar-inner {
            top: 3.6rem;
        }
    }
}

/*
 * Responsive improvements
 */

@media (max-height: 900px) {
    .topbar > .topbar-inner {
        padding: 0 3rem;
    }
}

@media (max-width: 1400px) {
    .topbar > .topbar-inner {
        padding: 0 3rem;
    }
}
</style>
