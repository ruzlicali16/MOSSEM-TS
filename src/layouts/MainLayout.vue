<template>
  <q-layout class="bg-img" view="hHh LpR fFf">
    <!-- header -->
    <transition appear enter-active-class="animated fadeInDown">
      <q-header elevated class="header-bg">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />

          <!-- Title -->
          <q-avatar size="42px">
            <img src="~assets/logo/splogo.png" />
          </q-avatar>

          <q-toolbar-title>Sining Pananadem</q-toolbar-title>
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="text = ''"
            />
          </template>

          <!-- Menu -->
          <q-btn
            v-if="$route.name == 'Homeadmin-page'"
            outline
            icon="person"
            label="Account"
            text-color="white"
          >
            <q-menu fit :offset="[0, 10]">
              <q-btn
                class="full-width"
                label="logout"
                color="primary"
                text-color="white"
                to="/login"
              >
              </q-btn>
            </q-menu>
          </q-btn>
          <q-btn
            outline
            class="radius"
            icon="home"
            label="Home"
            color="orange"
            text-color="white"
            to="/"
          >
          </q-btn>
          <!-- menu end -->
        </q-toolbar>
      </q-header>
    </transition>
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :height="100"
      :width="250"
      :breakpoint="500"
      elevated
    >
      <q-scroll-area class="fullscreen drawer-bg text-white">
        <div>
          <q-list padding>
            <div>
              <q-item
              class="my-menu-link-title"
              >
                <q-item-section class="text-h5 text-bold text-shadow-title"> Intangible Inventory </q-item-section>
              </q-item>
              <q-separator />
              <q-separator />
              <q-item
                dense
                to="Dances"
                clickable
                v-ripple
                @click="link = 'Dances'"
                active-class="my-menu-link"
              >
                <q-item-section avatar>
                  <q-img
                    style="height: 48px; width: 38px"
                    src="~assets/logo/icon.png"
                  />
                </q-item-section>

                <q-item-section class="text-h6"> Dances </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                to="Songs"
                clickable
                v-ripple
                @click="link = 'Songs'"
                active-class="my-menu-link"
              >
                <q-item-section avatar>
                  <q-img
                    style="height: 48px; width: 38px"
                    src="~assets/logo/icon.png"
                  />
                </q-item-section>

                <q-item-section class="text-h6"> Songs </q-item-section>
              </q-item>

              <q-separator />

              
            </div>
            <q-separator />
            <q-separator />
            <div>
              <q-item
              class="my-menu-link-title"
              >
                <q-item-section class="text-h5 text-bold text-shadow-title"> Tangible Inventory </q-item-section>
              </q-item>
              <q-separator />
              <q-separator />
              <q-item
                to="Equipments"
                clickable
                v-ripple
                @click="link = 'Equipments'"
                active-class="my-menu-link"
              >
                <q-item-section avatar>
                  <q-img
                    style="height: 48px; width: 38px"
                    src="~assets/logo/icon.png"
                  />
                </q-item-section>

                <q-item-section class="text-h6"> Equipments </q-item-section>
              </q-item>
              <q-item
                to="Instruments"
                clickable
                v-ripple
                @click="link = 'Instruments'"
                active-class="my-menu-link"
              >
                <q-item-section avatar>
                  <q-img
                    style="height: 48px; width: 38px"
                    src="~assets/logo/icon.png"
                  />
                </q-item-section>

                <q-item-section class="text-h6"> Instruments </q-item-section>
              </q-item>
              <q-item
              class="my-menu-link-title"
              >
                <q-item-section class="text-h5 text-bold text-shadow-title">Performances</q-item-section>
              </q-item>
              <q-separator />
              <q-separator />
              <q-item
                to="Pictures"
                clickable
                v-ripple
                @click="link = 'Pictures'"
                active-class="my-menu-link"
              >
                <q-item-section avatar>
                  <q-img
                    style="height: 48px; width: 38px"
                    src="~assets/logo/icon.png"
                  />
                </q-item-section>

                <q-item-section class="text-h6"> Gallery </q-item-section>
              </q-item>
            </div>
            <q-separator />
          </q-list>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="custom-page-container">
      <router-view v-slot="{ Component }">
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class MainLayout extends Vue {
  drawer = false;
  miniState = true;
  link = '';
  text = '';
}
</script>

<style scoped>
.my-menu-link {
  background: linear-gradient(to top, #68130288 1%, #8b8373a2 64%);
}
.my-menu-link-title {
  background: linear-gradient(to top, #e483047c 1%, #e483047c 64%);
}
.bg-img {
  background-image: url('~assets/background/BackGroundBlur.jpg');
  padding: 0px;
}
.header-bg {
  background-image: url('~assets/background/TribalPattern.jpg');
  background-position: center;
  box-shadow: 0 0 0 1000px rgb(0 0 0 / 45%) inset;
}
.drawer-bg {
  background-image: url('~assets/background/TribalPattern.jpg');
  background-position-y: center;
  box-shadow: 0 0 0 1000px rgb(0 0 0 / 45%) inset;
}
.text-shadow-title {
  text-shadow: 2px 2px 6px #000000;
}
</style>
