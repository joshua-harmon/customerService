<template lang="html">
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/about1">About1</RouterLink> |
        <RouterLink to="/about2">About2</RouterLink> |
        <RouterLink to="/customerService">CustomerService</RouterLink> |
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </header>

    <main id="content">
      <RouterView :key="$route.path"/>
    </main>

    <footer>
      <p>Page footer</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style scoped>
body {
  background-color: #fafafa;
  color: #1a1b1c;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
a {
  color: #666666;
  font-weight: bold;
}
header,
footer {
  text-align: center;
}
section {
  max-width: 800px;
  margin: 0 auto;
}
section h1 {
}
section p {
  text-align: left;
  justify-content: left;
}
</style>
