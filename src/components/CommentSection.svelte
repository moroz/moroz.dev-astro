<script lang="ts">
  import type { Comment } from "@interfaces";
  import { formatDateTime } from "@lib/dateHelpers";

  export let title: string = "Default";
  export let url: string;
  export let comments: Comment[] = [];
</script>

<section class="comments">
  <h3>Comments</h3>
  {#each comments as comment}
    <article>
      <p class="meta">
        <span class="signature">{comment.signature}</span>
        <span class="date">{formatDateTime(comment.insertedAt * 1000)}</span>
      </p>
      <div class="body">
        {comment.body}
      </div>
    </article>
  {/each}
</section>

<style lang="scss">
  .meta {
    font-size: 0.9em;
    margin: 0;
  }

  .signature {
    font-weight: bold;
  }

  .date {
    color: var(--dimmed-text);
  }

  .body {
    margin-bottom: 1em;

    p:last-child {
      margin-bottom: 0;
    }

    p:first-child {
      margin-top: 0;
    }
  }
</style>
