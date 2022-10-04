<template>
  <div>
    <div class="sm:w-1/4 p-2">
      <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
        <h2 class="text-xl font-medium text-gray-700">{{ name }}</h2>
        <span class="text-blue-500 block mb-5"> {{ role }}</span>
        <button
          href="#"
          class="px-4 py-2 bg-blue-500 text-white rounded-full"
          @click="onClick"
        >
          Say hello
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouterView',
  props: ['members'],
  data() {
    let member = this.members;
    return {
      name: this.members[0].first_name,
      role: this.members[0].role,
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.name = this.members[toParams.id - 1].first_name;
        this.role = this.members[toParams.id - 1].role;
      }
    );
  },
  methods: {
    onClick() {
      alert(`Hello ${this.name}!!`);
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
