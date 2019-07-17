<template>
	<b-card-group>
		<b-card 
      no-body 
      header="Where to Buy"
    >
			<b-list-group flush>
				<b-list-group-item
					class="flex-column align-items-start"
					v-for="(item, i) in partners"
					:key="i"
				>
					<div class="d-flex w-100 justify-content-between">
						<h5 class="mb-1">{{ item.title }}</h5>
						
					</div>

					<p class="mb-1">
						{{ item.addressOne }}
					</p>

          <p class="mb-1">
						{{ item.addressTwo }}
					</p>

					<b-link target="_blank" :href="item.website">{{ item.website }}</b-link>
				</b-list-group-item>
			</b-list-group>
		</b-card>
	</b-card-group>
</template>

<script>
	export default {
		data() {
			return {
				partners: [
					{
						title: "Camping World - Mesa",
						addressOne: "1234 E Main St",
						addressTwo: "Mesa, Arizona 85000",
						website: "www.campingworld.com"
					},
					{
						title: "REI - Phoenix",
						addressOne: "1234 E Main St",
						addressTwo: "Phoenix, Arizona 85000",
						website: "www.rei.com"
					},
					{
						title: "Cabelas - Glendale",
						addressOne: "1234 E Main St",
						addressTwo: "Glendale, Arizona 85000",
						website: "www.cabelas.com"
					},
					{
						title: "Camping World - Tempe",
						addressOne: "1234 E Main St",
						addressTwo: "Tempe, Arizona 85000",
						website: "www.campingworld.com"
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
