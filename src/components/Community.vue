<template>
  <div>
      <h1>Community</h1>
  </div>
</template>

<script>
import { api } from '../services/api-glue';

export default {
    name: 'Home',
    data() {
        return {
          currentDate: new Date()
        };
    },
    methods: {
        handleClick () {
            api.getLaravel(2)
                .then(() => {
                    this.$message({
                        message: 'Congrats, this is a success message.',
                        type: 'success'
                    });
                });
        }
    }
};
</script>

<style scoped>
    
</style>