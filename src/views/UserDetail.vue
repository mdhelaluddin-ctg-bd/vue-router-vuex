<<template>
    <div class="user-details">
        <h1>User Details</h1>
		<table class="table table-striped">
			<tr role="row">
				<th role="cell">Id</th>
				<td> {{ user.id }} </td>
			</tr>
			<tr>
				<th>Name</th>
				<td> {{ user.name }} </td>
			</tr>
			<tr>
				<th>Email</th>
				<td> {{ user.email }} </td>
			</tr>
			<tr>
				<th>Phone</th>
				<td> {{ user.phone }} </td>
			</tr>
			<tr>
				<th>Website</th>
				<td> {{ user.website }} </td>
			</tr>
		</table>
    </div>
</template>


<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    ...mapActions(["LOAD_USERS_ACTION"])
  },
  computed: {
    ...mapGetters(["getUser"]),
    ...mapState(["isLoaded", "users"])
  },
  mounted: function() {
    if (!this.isLoaded) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => {
		  this.LOAD_USERS_ACTION(json);
		  this.user = this.getUser(this.$route.params.id);
        });
    } else {
		this.user = this.getUser(this.$route.params.id);
	}
  }
};
</script>
