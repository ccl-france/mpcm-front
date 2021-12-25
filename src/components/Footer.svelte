<script lang="ts">
	import { pages } from '../const';

	const linkStyle =
		'font-bold block my-2 md:my-6 hover:text-green-300 transition ease-in-out duration-200';
</script>

<footer class="bg-green-900 text-green-500">
	<div class="py-8 md:py-24 px-8 md:max-w-5xl mx-auto">
		<div class="md:flex -mx-8">
			<div class="md:w-1/3 m-8">
				{#each pages as page}
					<a class={linkStyle} href={page[0]}>{page[1]}</a>
				{/each}
				<a class={linkStyle} href="/privacy-policy"> Politique de confidentialité </a>
			</div>
			<div class="md:w-1/3 m-8">
				<a class={linkStyle} href="https://citizensclimatelobby.org/" target="blank">
					Citizen&apos;s Climate Lobby
				</a>
				<a class={linkStyle} href="https://ccl-france.org/" target="blank">
					Citizen's Climate Lobby France
				</a>
			</div>
			<div class="md:w-1/3 m-8">
				<a class={linkStyle} href="mailto:ccl.fra.paris@gmail.com"> ccl.fra.paris@gmail.com </a>
			</div>
		</div>
		<p class="text-sm text-center mt-6">&copy; Le meilleur plan climat du monde - 2021</p>
	</div>
</footer>
