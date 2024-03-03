<template>
  {{ authenticated }}
  <nav class="bg-gray-800 py-3">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <div
          class="flex flex-shrink-0 items-center text-white font-bold uppercase"
        >
          AuthLaravelVue
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <router-link
              class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              to="/"
              >Home</router-link
            >
            <router-link
              v-if="authenticated"
              class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              to="/dashboard"
              >Dashboard</router-link
            >
            <template v-if="!authenticated">
              <router-link
                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                to="/auth/login"
                >Login</router-link
              >
              <router-link
                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                to="/auth/register"
                >Register</router-link
              >
            </template>
            <button
              v-if="authenticated"
              @click="logout"
              class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              to="/dashboard"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <router-view></router-view>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
import useAuth from "./auth/useAuth";
const { getAuthenticate: authenticated, logout } = useAuth();
</script>

<style scoped></style>
