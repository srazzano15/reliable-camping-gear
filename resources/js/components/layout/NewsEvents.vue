<template>
	<b-card-group>
		<b-card 
      no-body 
      header="News and Events"
			bg-variant="rcg-purple"
			
    >
			<b-list-group flush>
				<b-list-group-item
					class="flex-column align-items-center"
					v-for="(item, i) in posts"
					:key="i"
				>
					<div class="d-flex w-100 justify-content-center">
						<h5 class="mb-1">{{ item.title }}</h5>
						
					</div>

					<div class=" d-flex align-self-center w-100 justify-content-center">
						<p class="mb-1">{{ item.body }}</p>
					</div>
          <div
            class="d-flex align-self-center w-100 justify-content-center"
          >
            <b-button 
              target="_blank" 
              :href="item.href"
							variant="rcg-blue"
            >Go There Now</b-button>
          </div>
          
				</b-list-group-item>
			</b-list-group>
		</b-card>
	</b-card-group>
</template>

<script>
	export default {
		data() {
			return {
				posts: [
					{
						title: "Camping Tradeshow 8/23",
						body: "For more information and tickets, click the link below!",
						href: "www.campingworld.com"
					},
					{
						title: "RCG to Partner With REI",
						body: "Check out exclusive story to receive coupon!",
						href: "www.campingworld.com"
					},
					{
						title: "Live Demo of Antenna Weight",
						body: "For date and location informatin, click the link below!",
						href: "www.campingworld.com"
					}
				]
			};
		}
	};
</script>

<style>
  .card-header {
    font-size: 1.3em;
    text-align: center;
    font-weight: 600;
    padding: .2rem 1.25rem;
  }
</style>

