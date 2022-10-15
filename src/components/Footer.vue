<template>
  <footer>
    <p>Copyright &copy; 2022</p>
    <!-- <a
      href="https://github.com/iamAndreyGavrilov?tab=repositories"
      target="_blank"
      rel="noopener noreferrer"
    ></a> -->
    <router-link to="/about">About</router-link>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
a {
  color: #333;
}

footer {
  margin-top: 30px;
  text-align: center;
}
</style>
