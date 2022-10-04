<template>
  <div>
    <div class="bg-white rounded-md p-5 shadow-md">
      <nav class="flex flex-row">
        <button
          class="
            text-gray-600
            py-4
            px-6
            block
            hover:text-blue-500
            focus:outline-none
          "
          :class="{
            'text-blue-500': isActive[0],
            'border-b-2': isActive[0],
            'font-medium': isActive[0],
            'border-blue-500': isActive[0],
          }"
          @click="onClick(0)"
        >
          <router-link to="/members/1">Adam</router-link>
        </button>
        <button
          class="
            text-gray-600
            py-4
            px-6
            block
            hover:text-blue-500
            focus:outline-none
          "
          :class="{
            'text-blue-500': isActive[1],
            'border-b-2': isActive[1],
            'font-medium': isActive[1],
            'border-blue-500': isActive[1],
          }"
          @click="onClick(1)"
        >
          <router-link to="/members/2">Przemek</router-link>
        </button>
        <button
          class="
            text-gray-600
            py-4
            px-6
            block
            hover:text-blue-500
            focus:outline-none
          "
          :class="{
            'text-blue-500': isActive[2],
            'border-b-2': isActive[2],
            'font-medium': isActive[2],
            'border-blue-500': isActive[2],
          }"
          @click="onClick(2)"
        >
          <router-link to="/members/3">Marcin</router-link>
        </button>
      </nav>
    </div>
    <router-view :members="members"> }}</router-view>
  </div>
</template>

<script>
import RouterView from './RouterView.vue';
const members = [
  { id: 1, first_name: 'Adam', last_name: 'Gospodarczyk', role: 'Member' },
  { id: 2, first_name: 'Przemek', last_name: 'Smyrdek', role: 'Member' },
  { id: 3, first_name: 'Marcin', last_name: 'Czarkowski', role: 'Member' },
];
export default {
  name: 'Inside',
  components: {
    RouterView,
  },
  data() {
    return {
      members,
      isActive: [true, false, false],
    };
  },
  methods: {
    onClick(id) {
      this.isActive[id] = true;

      let curentIsActive = this.isActive;

      curentIsActive = curentIsActive.forEach((el, index) => {
        if (index !== id) {
          this.isActive[index] = false;
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
