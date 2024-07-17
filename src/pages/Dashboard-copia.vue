<template>
  <section>
    <div>
      <h1>This is Dashboard</h1>
      <p>
        If you read this text it means that you are in the reserved dedicated
        area.
      </p>
      <h2>Lorem Ipsum</h2>
      <p>
        Blue bottle crucifix vinyl post-ironic four dollar toast vegan
        taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug
        VHS try-hard.
      </p>

      <h2>Etiam quis luctus</h2>
      <p>
        Blue bottle crucifix vinyl post-ironic four dollar toast vegan
        taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug
        VHS try-hard.
      </p>

      <h2>Lacus sit ame</h2>
      <p class="leading-relaxed text-base">
        Blue bottle crucifix vinyl post-ironic four dollar toast vegan
        taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug
        VHS try-hard.
      </p>
    </div>
    <div>
      <h2>Posts</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
/*
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
*/
import axios from "axios"
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      posts: [],
    };
  },
  computed: mapGetters([ 
    'checklistCount', 
    'completedChecklistCount', 
    'itemsCount', 
    'completedItemsCount' 
  ]),
  async created() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.posts = response.data;
    } catch (error) {
      console.error(error);
    }
  },
}
</script>
