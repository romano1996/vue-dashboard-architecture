<template>
  <div>
    <h1>Product information</h1>
    <p>This information is collected & rendered by the Products/Index view inside the dashboard module.</p>

    {{ productData }}
  </div>
</template>

<script>
import { FetchProducts } from "@/modules/dashboard/services/product_service";

export default {
  name: "Index",
  data() {
    return { productData: [] };
  },
  created() {
    FetchProducts().then((response) => {
      this.productData = response.data;
    });
  }
};
</script>

<style scoped></style>
