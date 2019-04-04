<template>
  <div class="users">
    <h1>Users</h1>
    <div>
      <b-table striped hover :items="users" :fields="userFields">
				<template slot="id" slot-scope="data">
					<router-link :to="`/users/${data.item.id}`">{{ data.item.id }}</router-link>
				</template>
			</b-table>
    </div>
  </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'

export default {
  data() {
    return {
			userFields: ['id', 'name', 'email', 'phone', 'website'],
    };
  },
  methods : {
    ...mapActions([
      'LOAD_USERS_ACTION'
    ])
  },
  computed : mapState([
    'isLoaded',
    'users'
  ]),
  mounted: function() {
    if(!this.isLoaded) {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        this.LOAD_USERS_ACTION(json);
      });
    }
  }
};
</script>