<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      Product
      <img src="http://www.scapromotions.com/wp-content/uploads/2014/10/sca-consumer-products-icon.jpg" />
      {{ JSON.stringify(product) }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({
        ha: 'ha, ha'
      }),
      required: true
    }
  }
};
</script>

<style>
</style>
