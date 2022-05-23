<template>
    <div>
        <div class="item">
            Car: <span>{{car}}  </span>
            <br/>
            Model: <span>{{model}}  </span>
           
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["car", "model"]),
    //   basic example to get state
    // car() {
    //   return this.$store.state.car;
    // },
    // model() {
    //   return this.$store.state.model;
    // },
  },
};
</script>
