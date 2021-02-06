<script lang="ts" context="module">
  export async function preload({ params }) {
    const res = await this.fetch("/faq.json");
    const data = await res.json();

    if (res.status === 200) {
      return { faq: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script lang="ts">
  import type { FAQ } from "../../types";
  import Seo from "../../components/Seo.svelte";
  import Collapse from "../../components/Collapse.svelte";

  export let faq: FAQ;
</script>

<Seo seo={faq.seo} />

<section class="pt-32 w-full max-w-4xl mx-auto py-16 sm:pb-32 px-6">
  <div class="max-w-2xl">
    <h1 class="text-2xl my-6 font-bold">Foire aux questions</h1>

    {#each faq.qas as qa}
      <Collapse title={qa.question} text={qa.answer} />
    {/each}
    <!-- <Collapse
      accordion
      class="bg-transparent border-0 text-green-900"
      expandIcon={({ isActive }) =>
        isActive ? (
          <FaChevronCircleUp class="mr-4 flex-none text-green-500 text-2xl" />
        ) : (
          <FaChevronCircleDown class="mr-4 flex-none text-green-500 text-2xl" />
        )
      }
    >
      {faq.map(([question, answer]) => (
        <Panel
          key={question}
          header={question}
          headerClass="flex items-center py-4 cursor-pointer"
        >
          {answer.split('\n').map((paragraph, i) => (
            <P key={i}>{paragraph}</P>
          ))}
        </Panel>
      ))}
    </Collapse> -->
  </div>
</section>
